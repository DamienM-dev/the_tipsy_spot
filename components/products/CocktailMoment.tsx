import { Colors } from "@/constants/Colors"
import { Image, ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native"

const CocktailMoment = () => {
    return (
        <View style={styles.containerCocktailMoment}>
            <Image source={require("../../assets/images/negroni.jpg")} style={styles.imageCocktailMoment}/>
            <Text style={styles.titleCocktailMoment}>Negroni</Text>
        </View>
    )
}

//PENSER A REGARDER POURQUOI LES FONTS NE SEMBLENT PAS FONCTIONNER !!!

const styles = StyleSheet.create({
    containerCocktailMoment:{
        backgroundColor:Colors.secondary.red,
        width:180,
        height:210,
        borderRadius:28,
        marginLeft:25,
        marginTop:30,
        
    } as ViewStyle,
    titleCocktailMoment: {
        fontSize:18,
        fontWeight:"bold",
        fontFamily:"textTitle",
        color:Colors.primary.beige,
        marginTop:27,
        textAlign:"center"
    } as TextStyle,
    imageCocktailMoment:{
        width:"100%",
        height:120,
        borderTopLeftRadius:28,
        borderTopRightRadius:28
    } as ImageStyle
    
})

export default CocktailMoment