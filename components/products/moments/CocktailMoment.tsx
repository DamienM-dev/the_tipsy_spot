import { Colors } from "@/constants/Colors"
import { StylesSame } from "@/constants/StyleSame"
import { Image, ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native"

const CocktailMoment = () => {
    return (
        <View style={[styles.containerCocktailMoment, StylesSame.cardsCocktail]}>
            <Image source={require("../../../assets/images/negroni.jpg")} style={StylesSame.imageCocktailCards}/>
            <Text style={[styles.titleCocktailMoment, StylesSame.titleCocktailCards]}>Negroni</Text>
        </View>
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