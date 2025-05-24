// EXPO

import { useRouter } from "expo-router"

// REACT

import { useEffect, useState } from "react"
import { Image, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"


// CONSTANT

import { StylesSame } from "@/constants/StyleSame"
import { Colors } from "@/constants/Colors"

// CONNEXION

import { supabase } from "@/lib/supabase"

// TYPE

type Cocktails = {
    id_recipes:number,
    image:string,
    name:string,
    recipe:string,
    is_favorite:boolean,
    alt:string
}

const CocktailMoment = () => {

    const router = useRouter();

    const[error, fetchError] = useState(null);
    const[cocktailData, fetchCocktailData] = useState<Cocktails[]>([])


      useEffect(()  => {
        const fetchData = async() => {
            
            const {data:cocktails, error} = await supabase
            .from('recipes')
            .select('id_recipes,image, name, recipe,is_favorite,alt');
            
           
            if(error){
                fetchError('Une erreur est survenue lors du chargement des cocktail,');
                console.error(error)
            } else {
                fetchCocktailData(cocktails)
                fetchError(null)
            }
        }
        fetchData()
      },[])
   
    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerIncipalCards}>


            {
                cocktailData.map((cocktail) => (

        <TouchableOpacity 
            key={cocktail.id_recipes} 
            style={[styles.containerCocktailMoment, StylesSame.cardsCocktail]}
            onPress={() => router.push({ pathname: '/ProductScreen', params: { idRecipe: cocktail.id_recipes.toString() } })} >

            <Image 
                source={{uri:cocktail.image}} 
                alt={cocktail.alt} 
                style={StylesSame.imageCocktailCards}
            />
            <Text style={[styles.titleCocktailMoment, StylesSame.titleCocktailCards]}>{cocktail.name}</Text>
        </TouchableOpacity>


                ))
            }
            </View>
        </View>
    )
}

//PENSER A REGARDER POURQUOI LES FONTS NE SEMBLENT PAS FONCTIONNER !!!

const styles = StyleSheet.create({
    mainContainer: {
    
        display:"flex",
       
    } as ViewStyle,
    containerIncipalCards: {
        display:"flex",
        justifyContent:"center",
        flexDirection:"row",
        flexWrap:"wrap",

    } as ViewStyle, 
    containerCocktailMoment:{
        backgroundColor:Colors.secondary.red,
    } as ViewStyle,
    titleCocktailMoment: {
        color:Colors.primary.beige,
    } as TextStyle,
    
})

export default CocktailMoment