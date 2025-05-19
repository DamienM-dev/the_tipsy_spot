import { StyleSheet, Text, View, ViewStyle } from "react-native"

type ComponentsType = {
    index:number,
    name:string
}


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
        <View style={styles.blockComponent}>
            {displayComponents}
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
    }
})

export default Components