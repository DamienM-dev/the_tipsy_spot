
import { Colors } from "@/constants/Colors"
import { StylesSame } from "@/constants/StyleSame"
import { supabase } from "@/lib/supabase"
import { useEffect, useState } from "react"
import { Image, ScrollView, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native"


// type

type genreCocktail = {
    id:number,
    type:string,
    image:string,
    alt:string
}



const ByGenre = () => {

    const [error, setFetchError] = useState(null);
    const [genresCocktail, setGenreCocktail] = useState<genreCocktail[]>([])
    
    useEffect(() => {
        const fetchGenre = async() => {
    
            const {data:genres, error} = await supabase.from('generalType').select('id, type, image, alt');
    
            if(error) {
                setFetchError(error)
                console.error("Une erreur lors de la récupération des genre")
            } else {
                setGenreCocktail(genres || [])
                setFetchError(null)
            }
           
        }
        fetchGenre()
    },[])
    
    return(
        <ScrollView>

            {
                genresCocktail.map((cocktail,index) => (

        <View style={[styles.containerGenre, StylesSame.cardsCocktail ]}>
            <Image 
                source={{uri:cocktail.image}}
                alt={cocktail.alt} 
                style={StylesSame.imageCocktailCards}
                />
        </View>

                ))
            }

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
    } as ViewStyle
})

export default ByGenre