
import { Colors } from "@/constants/Colors"
import { StylesSame } from "@/constants/StyleSame"
import { supabase } from "@/lib/supabase"
import { useEffect, useState } from "react"
import { Image, ImageStyle, ScrollView, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"


// type

type genreCocktail = {
    id_general_type:number,
    type:string,
    image:string,
    alt:string
}



const ByGenre = () => {

    const [error, setFetchError] = useState(null);
    const [genresCocktail, setGenreCocktail] = useState<genreCocktail[]>([])
    
    useEffect(() => {
        const fetchGenre = async() => {
    
            const {data:genres, error} = await supabase
            .from('general_type')
            .select('id_general_type, type, image, alt');
    
            if(error) {
                console.error("Une erreur lors de la récupération des genre",error)
                setFetchError(error)
            } else {
                setGenreCocktail(genres || [])
                setFetchError(null)
            }
           
        }
        fetchGenre()
    },[])
    
    return(
        <ScrollView>
            <View style={styles.containerCards}>

            {
                genresCocktail.map((cocktail) => (

        <TouchableOpacity 
            key = {cocktail.id_general_type} 
            style={[styles.containerGenre, StylesSame.cardsCocktail ]} 
            // onPress={}
        >
            <Image 
                source={{uri:cocktail.image}}
                alt={cocktail.alt} 
                style={styles.imageGenre}
    
                />
        </TouchableOpacity>

                ))
            }
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    titleGenre: {
        color: Colors.textColor.black
    } as TextStyle,
    containerGenre: {
        borderColor:Colors.secondary.red,
        borderWidth:1,
    } as ViewStyle,
    imageGenre: {
            width:"100%",
            height:"100%",
            borderRadius:28,
            objectFit:"cover",
    } as ImageStyle,
    containerCards: {
        display:"flex",
        justifyContent:"center",
        flexDirection:"row",
        flexWrap:"wrap",
    }
})

export default ByGenre