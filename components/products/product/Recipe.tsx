

// SUPABASE

import { Colors } from "@/constants/Colors";
import { supabase } from "@/lib/supabase";

//EXPO

import { useLocalSearchParams } from "expo-router";

// REACT

import { useEffect, useState } from "react";

// REACT NATIVE

import { Image, ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import Components from "./Components";

// TYPE

type recipeDataType = {
    id_recipes: number,
    image: string,
    name: string,
    recipe: string[],
    is_favorite: boolean,
    alt:string,
    text:string
}
const recipeText:string = "Recette"
const history:string = "Histoire"
const Recipe = () => {

    const {idRecipe} = useLocalSearchParams();
    const[error, setError] = useState(null)
    const[recipes, setRecipes] = useState<recipeDataType | null>(null)

    useEffect(() => {

        // J'AFFICHE UNE RECETTE PAR SON ID

        const fetchRecipe = async() =>  {
            const{data:recipeData, error} = await supabase
            .from('recipes')
            .select('id_recipes,image,name,recipe,is_favorite,alt,text')
            .eq("id_recipes", Number(idRecipe))
            .single();
            


            if(error) {
                console.error("Une erreur est survenue lors du chargement de la recette",error)
            } else {
                setRecipes(recipeData);
                setError(null);
            }
        }
        if(idRecipe) {

            fetchRecipe();
        }
    },[idRecipe])
   
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

      <View style={styles.containerRecipeAndComponent}>

        <Components />

        <View style={styles.recipeContainer}>
          <Text style={styles.componantTitle}>{recipeText}</Text>
          {recipes.recipe.map((line, index) => (
            <Text key={index} style={styles.textRecipe}>
              - {line}
            </Text>
          ))}
        </View>
        

      </View>
        <View style={styles.containerHistory}>
          <Text style={styles.titleHistory}>{history}</Text>
          <Text>{recipes.text}</Text>
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
  } as TextStyle,
  containerRecipeAndComponent:{
    display:"flex",
    flexDirection:"row",
    top:30
  } as ViewStyle,
  containerHistory:{
    marginTop:40,
    marginHorizontal:6,
    borderTopWidth:1,
    borderTopColor:Colors.secondary.red,
  } as ViewStyle,
  titleHistory: {
   fontFamily: 'SpaceGrotesk-Regular',
   fontWeight: "bold",
   marginBottom:8,
   marginTop:6,
 } as TextStyle
});
export default Recipe;