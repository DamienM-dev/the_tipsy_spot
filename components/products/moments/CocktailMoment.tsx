import { Colors } from "@/constants/Colors"
import { StylesSame } from "@/constants/StyleSame"
import { useRouter } from "expo-router"
import { useState } from "react"
import { Image, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native"


const CocktailMoment = () => {

    const router = useRouter();


      
   
    return (
        <TouchableOpacity style={[styles.containerCocktailMoment, StylesSame.cardsCocktail]}
        onPress={() => router.push('/ProductScreen')} >
            <Image source={require("../../../assets/images/negroni.jpg")} style={StylesSame.imageCocktailCards}/>
            <Text style={[styles.titleCocktailMoment, StylesSame.titleCocktailCards]}>Negroni</Text>
        </TouchableOpacity>
    )
}

//PENSER A REGARDER POURQUOI LES FONTS NE SEMBLENT PAS FONCTIONNER !!!

const styles = StyleSheet.create({
    containerCocktailMoment:{
        backgroundColor:Colors.secondary.red,
    } as ViewStyle,
    titleCocktailMoment: {
        color:Colors.primary.beige,
    } as TextStyle,
    
})

export default CocktailMoment