// REACT NATIVE
import { ScrollView, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native"

//CONSTANT

import { Colors } from "@/constants/Colors"

// COMPONENT

import IconesTop from "../IconesTop";

import ByGenreView from "../genres/ByGenreView";
import CocktailMomentView from "../moments/CocktailMomentView";



// TYPES

 type choiceUser = {
    label: string;
    value: 'Découverte' | 'Favorites';
    isSelected?: boolean;
 }
// TEXT TYPE
 const textDecouvert:string = "Découverts";
 const textFavorit:string = "Favorites"



const ListProducts = () => {


    return(
        <ScrollView style={styles.containerPrincipal}>
            <View style={styles.containerDiscovey}>
                <View style={styles.styleSelected}>
                    <Text style={styles.textStyle}>{textDecouvert}</Text>
                </View>
                <View>
                    <Text style={styles.textStyle}>{textFavorit}</Text>
                </View>
            </View>
            <View style={styles.containerIcones}>
                <IconesTop />
            </View>
            <CocktailMomentView />
            <ByGenreView />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
containerPrincipal: {
    backgroundColor: Colors.primary.beige,
    height:"100%",
} as ViewStyle,
containerDiscovey:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop: 30
} as ViewStyle,
styleSelected: {
    borderBottomColor: Colors.secondary.red,
    borderBottomWidth:1
} as ViewStyle,
containerIcones: {
    flexDirection:"row",
    } as ViewStyle,
    textStyle:{
        fontFamily:"Manrope-Regular",
    } as TextStyle,
})

export default ListProducts