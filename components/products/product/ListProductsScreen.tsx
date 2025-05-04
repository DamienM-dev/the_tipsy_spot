// REACT NATIVE
import { StyleSheet, Text, View, ViewStyle } from "react-native"

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



const ListProducts = () => {


    return(
        <View style={styles.containerPrincipal}>
            <View style={styles.containerDiscovey}>
                <View style={styles.styleSelected}>
                    <Text>Découvertes</Text>
                </View>
                <View>
                    <Text>Favorites</Text>
                </View>
            </View>
            <View style={styles.containerIcones}>
                <IconesTop />
            </View>
            <CocktailMomentView />
            <ByGenreView />
        </View>
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
    }
})

export default ListProducts