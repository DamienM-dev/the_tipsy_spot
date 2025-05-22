import { Colors } from "@/constants/Colors"
import { StyleSheet, Text, View, ViewStyle } from "react-native"

// TYPE

type ComponentsType = {
    index:number,
    name:string
}
const componentText:string ="Composants"


const Components= ():ComponentsType[]=> {
    const temporyNames = [
       {
            index:0,
            name: "Menthe"
        },
        {
            index:1,
            name: "Rhum"
        },
        {
            index:2,
            name: "sucre"
        },
        {
            index:3,
            name: "glaçon"
        }
    ]

    const displayComponents = temporyNames.map((temporyName) => (
       
    <Text 
        key={temporyName.index}
        style={styles.textBlockComponent}>
         <Text>-</Text>   
         {temporyName.name}
    </Text>
    ))
    return(
        <View style={styles.componantContainer}>
            <Text style={styles.componantTitle}>{componentText}</Text>
            <View style={styles.blockComponent}>
                {displayComponents}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    blockComponent: {
        display:"flex",
        flexDirection:"column",
       
    } as ViewStyle, 
    textBlockComponent: {
        marginTop:5,
        fontWeight:"ultralight"
    },
        componantContainer: {
        width:"30%",
        borderRightWidth:1,
        borderRightColor:Colors.secondary.red,
     
    } as ViewStyle,
        componantTitle: {
            fontFamily:'SpaceGrotesk-Regular',
            fontWeight:"bold",
        } as ViewStyle,
})

export default Components