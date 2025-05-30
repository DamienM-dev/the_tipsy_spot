import { Colors } from "@/constants/Colors"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

// DATA

import { supabase } from "@/lib/supabase"
import { useEffect, useState } from "react"
import {useRouter } from "expo-router"

// TYPE

type iconeTop = {
    id_drinks:number,
    type:string,
    image:string,
    alt:string,
}

const router = useRouter()

const IconesTop = () => {

    const [fetchError, setFetchError] = useState(null)
    const [icones, setIcones] = useState<iconeTop[]>([]);

    useEffect(() => {
        const fetchIcones = async() => {

            const {data:drinks, error} = await supabase
            .from('drinks')
            .select('id_drinks,type,image,alt')

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
        <ScrollView 
        horizontal
        showsHorizontalScrollIndicator ={false}
        style={styles.containerGenralIcones}>
            {
                icones.map((icone, index) =>(
                
                    <TouchableOpacity
                    key={index}
                    onPress={() => router.push({pathname:'/ProductsByAlcoolScreen', params:{id_alcool:icone.id_drinks}})}>
                        
                        <View style={styles.containerIcone}>
                        
                            <Image 
                            source={{uri:icone.image}}
                            alt={icone.alt} style={styles.image} />
                            <Text style={styles.text}>{icone.type}</Text>
                        </View>
                   </TouchableOpacity>
                ))
                
            }
        
        </ScrollView>
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
borderColor:Colors.secondary.red,
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
    fontFamily:'SpaceGrotesk-Bold',

}
})

export default IconesTop;