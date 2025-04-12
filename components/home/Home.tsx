import { Image, ImageStyle, StyleSheet, Text, View, ViewStyle } from "react-native"

import { Colors } from "@/constants/Colors"

const HomeScreen = () => {
    return(
       <View style={styles.containerPrincipal}>
            <View style={styles.containerImage}>
                <Image 
                source={require('../../assets/images/illustration_temp_accueil.jpg')}
                style={styles.imageHome} />
            </View>
            <View style={styles.buttonHome}>
                <Text style={styles.buttonTextHome}>test</Text>
            </View>
       </View>


    )
}
const styles = StyleSheet.create({
    containerPrincipal:{
        height:"100%",
        backgroundColor:Colors.primary.beige
    } as ViewStyle,
    containerImage:{
        height:"70%",
    } as ViewStyle,
    imageHome:{
        width:"100%", 
        height:"100%"
        } as ImageStyle,
    buttonHome:{
        borderColor:Colors.secondary.red,
        borderWidth:2,
        borderRadius:1000,
        marginHorizontal:45,
        alignItems:"center",
        backgroundColor:Colors.primary.beige
    } as ViewStyle,
    buttonTextHome:{
        color:Colors.secondary.red,
        fontFamily:"textFonts",
        fontSize:20,
        fontWeight:"bold",
        paddingVertical:14,
    } as ViewStyle
    })

export default HomeScreen;