import { Colors } from "@/constants/Colors"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

// TYPE

const title:string = "Negroni"

const HomeProductView = () => {
    return(
        <ScrollView style={styles.containerGeneralHome}>
            <View style={styles.blockImage}>
                <Image 
                source={require('../../../assets/images/negroni.jpg')}
                style={styles.imageStyle}
               />
            </View>
            <View>
                <Text style={styles.titleStyle}>{title}</Text>
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
    
    },
    imageStyle: {
        width:"100%",
        height:400
    },
    titleStyle: {
        fontSize:30,
        fontFamily:'SpaceGrotesk-Regular',
        fontWeight:"bold"
    }
})



export default HomeProductView