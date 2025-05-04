// LIBRAIRY REACT NATIVE
import { useRouter } from "expo-router";
import { Alert, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native"


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

    const router = useRouter()

    const handleNavigate = () => {
        console.log("Navigating to:", pageToNavigate);
        if(!pageToNavigate) {
            Alert.alert('Navigation', "Lien de navigation manquant")
            return;
        }
    
            router.push(`${pageToNavigate}`)
        
    }

    
    return (
        <TouchableOpacity style={[styles.buttonHome, {backgroundColor:buttonBackgroundColor,borderColor:buttonBorderColor}]}
        onPress={handleNavigate}
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
        fontFamily:"Manrope-Regular",
        fontSize:16,
        fontWeight:"bold",
        paddingVertical:14,
    } as TextStyle
    })

    export default ButtonHomeComponent