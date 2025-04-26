import { Colors } from "@/constants/Colors"
import { Image, StyleSheet, Text, View } from "react-native"

// DATA

import { supabase } from "@/lib/supabase"
import { useEffect, useState } from "react"

// TYPE

type iconeTop = {
    
    image:string,
    type_of_drink:string
}



const IconesTop = () => {

    const [fetchError, setFetchError] = useState(null)
    const [icones, setIcones] = useState<iconeTop[]>([]);

    useEffect(() => {
        const fetchIcones = async() => {

            const {data:drinks, error} = await supabase.from('drinks').select('type_of_drink, image')

            if(error) {
                setFetchError('erreur lors de la récupération de drinks');
                console.error(error)
          
            } else {

                setIcones(drinks || []);
                setFetchError(null)
            }
        };
        fetchIcones()
    }, [])


    return(
        <View style={styles.containerGenralIcones}>
            {
                icones.map((icone, index) =>(

                   
            <View key={index} style={styles.containerIcone}>
            
                <Image source={{uri:icone.image}} style={styles.image} />
                <Text style={styles.text}>{icone.type_of_drink}</Text>
            </View>
                ))
                
            }
        
        </View>
    )

}

// STYLE

const styles = StyleSheet.create({
containerGenralIcones: {
flexDirection:"row",
},
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
    fontFamily:'SpaceGrotesk-Regular'
}
})

export default IconesTop;