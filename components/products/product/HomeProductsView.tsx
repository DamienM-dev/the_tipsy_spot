import { Colors } from "@/constants/Colors"
import { Image, ImageStyle, ScrollView, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native"
import Components from "./Components"
import Recipe from "./Recipe"

// TYPE

const title:string = "Negroni"
const componentText:string ="Composants"
const recipeText:string = "Recette"
const HomeProductView = () => {
    return(
        <ScrollView style={styles.containerGeneralHome}>
            <View style={styles.blockImage}>
                <Image 
                source={require('../../../assets/images/negroni.jpg')}
                style={styles.imageStyle}
               />
            </View>
            <View style={styles.containerBlockTitle}>
                <View style={styles.blockTitle}>
                     <Text style={styles.titleStyle}>{title}</Text>
                </View>

            </View>
            <View style={styles.containerGenCentral}>
                <View style={styles.componantContainer}>
                    <Text style={styles.componantTitle}>{componentText}</Text>
                    <Components />
                </View>
                <View style={styles.recipeContainer}>
                    <Text style={styles.componantTitle}>{recipeText}</Text>
                    <Recipe />
                </View>
            </View>


            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerGeneralHome: {
        backgroundColor: Colors.primary.beige
    },
    blockImage: {
        width:"100%",
    } as ViewStyle,

    imageStyle: {
        width:"100%",
        height:400
    } as ImageStyle,

    titleStyle: {
        fontSize:20,
        fontFamily:'SpaceGrotesk-Regular',
        fontWeight:"bold"
    } as TextStyle,

    containerBlockTitle:{
        display:"flex",
       justifyContent:"center",
       alignItems:"center",
       width:"100%",
    } as ViewStyle,

    blockTitle:{
        display:"flex",
       justifyContent:"center",
       alignItems:"center",
        borderWidth:1,
        borderBlockColor:Colors.secondary.red,
        borderRadius:100,
        width:308,
        padding:8,
        margin:-30,
        backgroundColor:Colors.primary.beige,
    } as ViewStyle,

    componantContainer: {
        width:"30%",
        borderRightWidth:1,
        borderRightColor:Colors.secondary.red,
     
    } as ViewStyle,

    recipeContainer:{
        width:"70%",
        paddingLeft:5
     
    } as ViewStyle,

    containerGenCentral: {
        display:"flex",
        flexDirection:"row",
        width:"100%",
        marginTop:30,
        padding:5,
        borderBottomWidth:1,
        borderBottomColor:Colors.secondary.red

    } as ViewStyle,

    componantTitle: {
        fontFamily:'SpaceGrotesk-Regular',
        fontWeight:"bold",
    } as ViewStyle,

}) 

export default HomeProductView