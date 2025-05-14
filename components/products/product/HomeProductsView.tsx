import { Colors } from "@/constants/Colors"
import { Image, ImageStyle, ScrollView, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native"
import Components from "./Components"

// TYPE

const title:string = "Negroni"
const componentText ="Composants"

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
            <View>
                <View>
                    <Text>{componentText}</Text>
                    <Components />
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
       width:"100%"

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
})



export default HomeProductView