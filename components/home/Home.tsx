//REACT NATIVE

import { Image, ImageStyle, StyleSheet, TextStyle, View, ViewStyle } from "react-native"

// CONSTANT
import { Colors } from "@/constants/Colors"

//COMPOSANT
import ButtonHomeComponent from "./ButtonHomeComponent"


const Home = (props:any) => {
    const buttonPropsRegistration = {
        buttonBorderColor: Colors.secondary.red,
        buttonBackgroundColor: Colors.primary.beige,
        textColor: Colors.secondary.red,
        textContaint: "S'inscrire gratuitement",
    }
    const buttonPorpsMail = {
        buttonBorderColor: Colors.primary.beige,
        buttonBackgroundColor: Colors.secondary.red,
        textColor: Colors.primary.beige,
        textContaint: "Continuer avec l'email",
    }



    return(
       <View style={styles.containerPrincipal}>
            <View style={styles.containerImage}>
                <Image 
                source={require('../../assets/images/illustration_temp_accueil.jpg')}
                style={styles.imageHome} />
            </View>
            <View style={styles.blockButtonsHome}>
                <ButtonHomeComponent {...buttonPropsRegistration} pageToNavigate="/ListProductsScreen"/>
                <ButtonHomeComponent {...buttonPorpsMail} pageToNavigate="/ListProductsScreen"/>
            </View>
            
       </View>


    )
}
const styles = StyleSheet.create({
    containerPrincipal:{
        height:"100%",
        backgroundColor:Colors.primary.beige
    } as ViewStyle,
    containerImage:{
        height:"70%",
    } as ViewStyle,
    imageHome:{
        width:"100%", 
        height:"100%"
        } as ImageStyle,
    buttonHome:{
        borderColor:Colors.secondary.red,
        borderWidth:1,
        borderRadius:1000,
        marginHorizontal:45,
        alignItems:"center",
        backgroundColor:Colors.primary.beige
    } as ViewStyle,
    buttonTextHome:{
        color:Colors.secondary.red,
        fontFamily:"Manrope-Regular",
        fontSize:20,
        fontWeight:"bold",
        paddingVertical:14,
    } as TextStyle,
    blockButtonsHome: {
marginTop:-28
    }
    })

export default Home;