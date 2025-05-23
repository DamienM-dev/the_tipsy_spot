// CONSTANT

import { Colors } from "@/constants/Colors"
// REACT NATIVE

import {ScrollView, StyleSheet,View, ViewStyle } from "react-native"

// COMPONENTS


import Recipe from "./Recipe"

// TYPE


const HomeProductView = () => {
    return(
        <ScrollView style={styles.containerGeneralHome}>

            <View style={styles.containerGenCentral}>

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
        width:"100%",
   
        
  

    } as ViewStyle,

}) 

export default HomeProductView