
// SUPABASE

import { Colors } from "@/constants/Colors";
import { supabase } from "@/lib/supabase";

//EXPO

import { useLocalSearchParams } from "expo-router";

// REACT

import { useEffect, useState } from "react";

// REACT NATIVE

import { Image, ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

// TYPE

type recipeDataType = {
    id: number,
    image: string,
    name: string,
    recipe: string[],
    is_favorite: boolean,
    alt:string
}
const recipeText:string = "Recette"
const Recipe = () => {

    const {id} = useLocalSearchParams();
    const[error, setError] = useState(null)
    const[recipes, setRecipes] = useState<recipeDataType | null>(null)

    useEffect(() => {

        // J'AFFICHE UNE RECETTE PAR SON ID

        const fetchRecipe = async() =>  {
            const{data:recipeData, error} = await supabase
            .from('recipes')
            .select('id,image,name,recipe,is_favorite,alt')
            .eq("id", Number(id))
            .single();

            if(error) {
                console.error("Une erreur est survenue lors du chargement de la recette",error)
            } else {
                setRecipes(recipeData);
                setError(null);
            }
        }
        if(id) {

            fetchRecipe();
        }
    },[id])
   
    if(!recipes) {
        return null
    }
    return (
    <>
      
      <View style={styles.containerImage}>
        <Image
          source={{ uri: recipes.image }}
          alt={recipes.alt}
          style={styles.imageCocktail}
        />

        <View style={styles.containerBlockTitle}>
          <View style={styles.blockTitle}>
            <Text style={styles.titleStyle}>{recipes.name}</Text>
          </View>
        </View>
      </View>

      
      <View style={styles.recipeContainer}>
        <Text style={styles.componantTitle}>{recipeText}</Text>
        {recipes.recipe.map((line, index) => (
          <Text key={index} style={styles.textRecipe}>
            - {line}
          </Text>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textRecipe: {
    marginTop: 8,
  },
  recipeContainer: {
    width: "60%",
    marginHorizontal: 6,
  } as ViewStyle,
  containerImage: {
    width: "100%",
  } as ViewStyle,
  imageCocktail: {
    width: "100%",
    height: 400,
  } as ImageStyle,
  titleStyle: {
    fontSize: 20,
    fontFamily: 'SpaceGrotesk-Regular',
    fontWeight: "bold"
  } as TextStyle,
  blockTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.secondary.red,
    borderRadius: 100,
    width: 308,
    padding: 8,
    margin: -30,
    backgroundColor: Colors.primary.beige,
  } as ViewStyle,
  containerBlockTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  } as ViewStyle,
  componantTitle: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontWeight: "bold",
  } as TextStyle
});
export default Recipe;