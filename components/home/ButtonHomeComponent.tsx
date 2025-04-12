// LIBRAIRY REACT NATIVE
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native"

// CONSTANT
 import { Colors } from "@/constants/Colors"

 // TYPES

 type buttonHomeProps = {
    buttonBorderColor: string;
    buttonBackgroundColor: string;
    textColor: string;
    textContaint:string;
 }



const ButtonHomeComponent = ({buttonBackgroundColor, buttonBorderColor, textColor, textContaint}:buttonHomeProps)=> {
    return (
        <View style={[styles.buttonHome, {backgroundColor:buttonBackgroundColor,borderColor:buttonBorderColor}]}>
            <Text style={[styles.buttonTextHome, {color:textColor}]}>{textContaint}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    buttonHome:{
        borderWidth:2,
        borderRadius:1000,
        marginHorizontal:45,
        alignItems:"center",
    } as ViewStyle,
    buttonTextHome:{
        fontFamily:"textFonts",
        fontSize:20,
        fontWeight:"bold",
        paddingVertical:14,
    } as TextStyle
    })

    export default ButtonHomeComponent