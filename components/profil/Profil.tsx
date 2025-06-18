import { Colors } from "@/constants/Colors"
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View, ViewStyle } from "react-native"

// REAC HOOK FORM

import { useForm, Controller } from "react-hook-form"

//TYPE

const emailUser:string = "Email"
const password:string="changez votre mot de passe"
const confirm:string="confirmer votre mot de passe"

const Profil = () => {

    const {
        
        control, 
        handleSubmit,

        formState:{errors},
    } = useForm({
    
        defaultValues:{
            userName:"",
            emailUser:"",
            password:"",
            confirm:"",
        }
    })

    const onSubmit = (data:string) => console.log(data)


    return(
        <View style={styles.containerMain}>
            <View style={styles.containerImage}>
            </View>
            <View>
                <Controller
                control={control}
                rules={{
                    required:"Ce champ est obligatoire"
                    
                }} 
                render={({field: {onChange, onBlur, value}}) =>  (
                    <TextInput
                    placeholder="votre nom"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.inputStyle}
                    />
                )}
                name="userName"
                
                />
                {errors.userName && <Text>{errors.userName.message}</Text>}

                <Controller
                control={control}
                 rules={{
                    required:"Ce champ est obligatoire",
                    maxLength:{value:50, message:"email trop long"},
                     pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Email invalide",
                    }
                 }}
                 render={({field: {onChange, onBlur,value}}) => (
                    <TextInput
                    placeholder="Votre email"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value} 
                    />
                 )}
                    name="emailUser" 
                    />
                    
                    {errors.emailUser && <Text>{errors.emailUser.message}</Text>}

                    <Controller
                    control={control}
                    rules={{
                        required:"Ce champ est obligatoire",
                        minLength:{value:6, message:"Votre mot de passe doit contenir 6 caractéres minimum"}
                    }}
                    render={({field:{onChange,onBlur,value}}) => (
                        <TextInput
                        placeholder="mot de passe"
                        secureTextEntry
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value} 
                        />
                    )}
                    name="password"
                    />
                    
                    {errors.password  && <Text>{errors.password.message}</Text>}
                    
                    <Controller
                    control={control}
                    rules={{
                        required:"Ce champ est obligatoire",
                        validate: (value, formValues) =>
                            value === formValues.password|| "Les mots de passe ne correspondent pas"                        
                    }}
                    render={({field:{onChange, onBlur, value}}) => (
                        <TextInput
                        placeholder="mot de passe"
                        secureTextEntry
                        onChangeText={(text) => onChange(text)}
                        onBlur={onBlur}
                        value={value}
                        />
                    )}
                    name="confirm"
                     />
                    {errors.password  && <Text>{errors.confirm?.message}</Text>}

                <Button
                title="Submit"
                onPress={handleSubmit(onSubmit)}/>

            </View>

        </View>

    )
}
const styles = StyleSheet.create({
    containerMain: {
        backgroundColor:Colors.primary.beige,
        height:"100%",
    } as ViewStyle,
    containerImage:{
        width:120,
        height:120,
        borderRadius:"100%",
        borderColor:Colors.secondary.red,
        borderWidth:1,
        backgroundColor:"white",
        alignSelf:"center",
        marginTop:100
    } as ViewStyle,
    inputStyle:{
        borderColor:Colors.secondary.red,
        borderWidth:1,
    }
})

export default Profil