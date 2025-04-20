import { StyleSheet, Text, TextStyle, View } from "react-native"
import CocktailMoment from "./CocktailMoment"
import { Colors } from "@/constants/Colors"

const CocktailMomentView = () => {
    return(
        <View>
            <Text style={styles.titleSubCategory}> Cocktail du moment</Text>
            <CocktailMoment />
        </View>
    )
}
// PENSER A FAIRE UNE CONSTANTE POUR titleSubCategory

const styles = StyleSheet.create({
titleSubCategory: {
    fontSize:16,
    fontWeight:"bold",
    fontFamily:"textFonts",
    marginTop:20,
    marginLeft:25,
    color:Colors.textColor.black,
} as TextStyle
})
export default CocktailMomentView