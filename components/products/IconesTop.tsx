import { Colors } from "@/constants/Colors"
import { Image, StyleSheet, Text, View } from "react-native"

// TYPE

type iconeTop = {
    
    image:any,
    name:string
}



const IconesTop = () => {

    const icones:iconeTop[] = [
        {

            name:"Rhum",
            image:require("../../assets/images/icones/rhum.png")
        }
]

    return(
        <View>
            
            {
                icones.map((icone, index) =>(

            <View key={index} style={styles.containerIcone}>
            
                <Image source={icone.image} style={styles.image} />
                <Text style={styles.text}>{icone.name}</Text>
            </View>
                ))
            }
        
        </View>
    )

}

// STYLE

const styles = StyleSheet.create({
containerIcone: {
marginTop:27,
marginLeft:27,
width:110,
height:60,
flexDirection:"row",
alignItems:"center",
justifyContent:"center",
borderBlockColor:Colors.secondary.red,
borderWidth:1,
borderRadius:16,

},
image:{
    width:40,
    height:40
},
text:{
    color:Colors.textColor.black,
    fontSize:14,
    fontWeight:"bold",
    fontFamily:'textTitle'
}
})

export default IconesTop;