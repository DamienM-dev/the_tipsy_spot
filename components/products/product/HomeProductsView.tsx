// CONSTANT

import { Colors } from "@/constants/Colors"
// REACT NATIVE

import {ScrollView, StyleSheet, View, ViewStyle } from "react-native"

// COMPONENTS

import Components from "./Components"
import Recipe from "./Recipe"

// TYPE


const HomeProductView = () => {
    return(
        <ScrollView style={styles.containerGeneralHome}>

            <View style={styles.containerGenCentral}>

                    <Components />
                    <Recipe />
            </View>



            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerGeneralHome: {
        backgroundColor: Colors.primary.beige
    },

    containerGenCentral: {
        display:"flex",
        flexDirection:"row",
        width:"100%",
        marginTop:30,
        padding:5,
        borderBottomWidth:1,
        borderBottomColor:Colors.secondary.red

    } as ViewStyle,

}) 

export default HomeProductView