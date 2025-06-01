import { Colors } from "@/constants/Colors"
import { useState } from "react"
import { StyleSheet, Text, TextInput, View, ViewStyle } from "react-native"

//TYPE

const emailUser:string = "Email"
const password:string="changez votre mot de passe"
const confirm:string="confirmer votre mot de passe"

const Profil = () => {

    const [email,setEmail] = useState()
    return(
        <View style={styles.containerMain}>
            <View style={styles.containerImage}>
            </View>
            <View>
                <View>
                    <Text>{emailUser}</Text>
                    <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Entrez votre email"
                    keyboardType="email-address" />
                </View>
                <View>
                    <Text>{password}</Text>
                    <TextInput/>
                    <Text>{confirm}</Text>
                    <TextInput/>
                </View>

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

    }
})

export default Profil