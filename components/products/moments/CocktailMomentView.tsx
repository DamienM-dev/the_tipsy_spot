import { StyleSheet, Text, TextStyle, View } from "react-native"

import { StylesSame } from "@/constants/StyleSame"
import CocktailMoment from "./CocktailMoment"

const CocktailMomentView = () => {
    return(
        <View>
            <Text style={StylesSame.titleSubCategory}> Cocktail du moment</Text>
            <CocktailMoment />
        </View>
    )
}


const styles = StyleSheet.create({

})
export default CocktailMomentView