// DEPENDANCES
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native"
import bcrypt from "bcryptjs"
import { supabase } from "@/lib/supabase"
import { Colors } from "@/constants/Colors"
import { Redirect, useRouter } from "expo-router"

// TYPES
type FormData = {
  email: string
  password: string
  confirmPassword?: string
}

const router = useRouter();


// COMPONENT
const AskEmail = () => {
  const [step, setStep] = useState<"email" | "register" | "login">("email")
  const [userEmail, setUserEmail] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)


  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors }
  } = useForm<FormData>()

  const resetFlow = () => {
    reset()
    setUserEmail("")
    setStep("email")
  }

  const checkEmail = async ({ email }: FormData) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single()
      setUserEmail(email)
      if (data) {
        setStep("login")
      } 
      else {
        setStep("register")
      }

    } catch (err) {
        Alert.alert("Erreur", "Une erreur est survenue.")
        console.error("erreur de type: ",err)
    } finally {
        setIsLoading(false)
    }
  }

const hashPassword = async (password: string) => {
  bcrypt.setRandomFallback((len: number) => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let result = ""
    for (let i = 0; i < len; i++) {
      result += chars[Math.floor(Math.random() * chars.length)]
    }
    return result
  })

  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

  const register = async ({ password, confirmPassword }: FormData) => {
    if (!password || typeof password !== "string") {
    setError("password", {message:"Mot de passe invalide."})
    return
}
    if (password !== confirmPassword) {
      setError("confirmPassword", { message: "Les mots de passe ne correspondent pas." })
      return
    }

    if (password.length < 8) {
      setError("password", { message: "Minimum 8 caractères" })
      return
    }

    setIsLoading(true)
    try {
      const hashed = await hashPassword(password)
      const { error } = await supabase.from("users").insert({
        email: userEmail,
        password: hashed,
        created_at: new Date().toISOString()
      })

      if (error) {
        Alert.alert("Erreur", "Impossible de créer le compte.")
      } else {
        Alert.alert("Succès", "Compte créé !")
        resetFlow()
        // pageHome
      }
    } catch (err) {
      Alert.alert("Erreur", "Une erreur est survenue.")
      console.error("erreur au niveau de la création du compte: ",err)
    } finally {
      setIsLoading(false)
    }
  }

  const login = async ({ password }: FormData) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase
        .from("users")
        .select("password")
        .eq("email", userEmail)
        .single()

      if (!data || error) {
        Alert.alert("Erreur", "Utilisateur non trouvé")
        return
      }


      const match = await bcrypt.compare(password, data.password)
     
      if (match) {
        Alert.alert("Connexion", "Bienvenue !")
        resetFlow()
       router.push("/ListProductsScreen")
      } else {
        setError("password", { message: "Mot de passe incorrect" })
      }
    } catch (err) {
      Alert.alert("Erreur", "Une erreur est survenue.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      {step === "email" && (
        <>
          <Text style={styles.title}>Entrez votre email</Text>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email requis",
              pattern: { value: /\S+@\S+\.\S+/, message: "Email invalide" }
            }}
            render={({ field }) => (
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />
          {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(checkEmail)}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {isLoading ? "Chargement..." : "Continuer"}
            </Text>
          </TouchableOpacity>
        </>
      )}

      {step === "register" && (
        <>
          <Text style={styles.title}>Créer un mot de passe</Text>
          <Text style={styles.subtitle}>{userEmail}</Text>

          <Controller
            control={control}
            name="password"
            rules={{ required: "Mot de passe requis", minLength: { value: 8, message: "Minimum 8 caractères" } }}
            render={({ field }) => (
              <TextInput
                placeholder="Mot de passe"
                secureTextEntry
                style={styles.input}
                onChangeText={field.onChange}
                value={field.value || ""}
              />
            )}
          />
          {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

          <Controller
            control={control}
            name="confirmPassword"
            rules={{ required: "Confirmation requise" }}
            render={({ field }) => (
              <TextInput
                placeholder="Confirmer le mot de passe"
                secureTextEntry
                style={styles.input}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />
          {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword.message}</Text>}

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(register)}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {isLoading ? "Création..." : "Créer le compte"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={resetFlow}>
            <Text style={styles.link}>Changer d'email</Text>
          </TouchableOpacity>
        </>
      )}

      {step === "login" && (
        <>
          <Text style={styles.title}>Connexion</Text>
          <Text style={styles.subtitle}>{userEmail}</Text>

          <Controller
            control={control}
            name="password"
            rules={{ required: "Mot de passe requis" }}
            render={({ field }) => (
              <TextInput
                placeholder="Mot de passe"
                secureTextEntry
                style={styles.input}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />
          {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(login)}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {isLoading ? "Connexion..." : "Se connecter"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={resetFlow}>
            <Text style={styles.link}>Changer d'email</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: Colors.primary.beige },
  title: { fontSize: 24, fontFamily: "SpaceGrotesk-Bold", textAlign: "center", marginBottom: 20 },
  subtitle: { textAlign: "center", fontSize: 16, marginBottom: 20, color: Colors.secondary.red },
  input: {
    borderWidth: 2,
    borderColor: Colors.secondary.red,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10
  },
  button: {
    backgroundColor: Colors.secondary.red,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10
  },
  buttonText: {
    color: Colors.primary.beige,
    fontFamily: "Manrope-Bold",
    fontSize: 16
  },
  error: { color: "red", textAlign: "center", marginBottom: 5 },
  link: {
    color: Colors.secondary.red,
    textAlign: "center",
    marginTop: 10,
    textDecorationLine: "underline"
  }
})

export default AskEmail
