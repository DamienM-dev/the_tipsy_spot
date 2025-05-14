import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { Colors } from "./Colors";

export const StylesSame = {
    titleSubCategory: {
        fontSize:16,
        fontWeight:"bold",
        fontFamily:"Manrope-Regular",
        marginTop:20,
        marginLeft:25,
        color:Colors.textColor.black
    } as TextStyle,
    cardsCocktail: {
        width:140,
        height:200,
        borderRadius:28,
        marginLeft:25,
        marginTop:30,
    } as ViewStyle,
    imageCocktailCards:{
            width:"100%",
            height:120,
            borderTopLeftRadius:28,
            borderTopRightRadius:28,
            objectFit:"cover",
        } as ImageStyle,
        titleCocktailCards: {
            fontSize:18,
            fontWeight:"bold",
            fontFamily:"SpaceGrotesk-Regular",
            marginTop:27,
            textAlign:"center",
        } as TextStyle,
}