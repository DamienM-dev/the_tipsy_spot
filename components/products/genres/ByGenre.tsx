
import { Colors } from "@/constants/Colors"
import { StylesSame } from "@/constants/StyleSame"
import { Image, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native"

// type

let name:string = "Les fruitées"



const ByGenre = () => {
    return(
        <View style={[styles.containerGenre, StylesSame.cardsCocktail ]}>
            <Image source={require('../../../assets/images/cocktail_fruitee.png')} style={StylesSame.imageCocktailCards}/>
            <Text style={[StylesSame.titleCocktailCards, styles.titleGenre]}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleGenre: {
        color: Colors.textColor.black
    } as TextStyle,
    containerGenre: {
        borderColor:Colors.secondary.red,
        borderWidth:1,
    } as ViewStyle
})

export default ByGenre