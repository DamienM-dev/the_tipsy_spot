// REACT NATIVE

import { ScrollView, StyleSheet, Text, View} from "react-native"

// CONSTANT

import { StylesSame } from "@/constants/StyleSame"

// COMPONENTS
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