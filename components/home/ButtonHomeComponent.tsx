// LIBRAIRY REACT NATIVE
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native"

// REACT NAVIGATION
import { useNavigation } from "@react-navigation/native";

// TYPES
type buttonHomeProps = {
    buttonBorderColor: string;
    buttonBackgroundColor: string;
    textColor: string;
    textContaint:string;
    pageToNavigate:string;
 }





const ButtonHomeComponent = ({
    buttonBackgroundColor, 
    buttonBorderColor, 
    textColor, 
    textContaint,
    pageToNavigate
}:buttonHomeProps)=> {

    const navigation = useNavigation();
    return (
        <TouchableOpacity style={[styles.buttonHome, {backgroundColor:buttonBackgroundColor,borderColor:buttonBorderColor}]}
        onPress={()=>navigation.navigate(pageToNavigate)}
        >
            <Text style={[styles.buttonTextHome, {color:textColor}]}>{textContaint}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    buttonHome:{
        borderWidth:2,
        borderRadius:1000,
        marginHorizontal:45,
        marginBottom:30,
        alignItems:"center",
    } as ViewStyle,
    buttonTextHome:{
        fontFamily:"textFonts",
        fontSize:16,
        fontWeight:"bold",
        paddingVertical:14,
    } as TextStyle
    })

    export default ButtonHomeComponent