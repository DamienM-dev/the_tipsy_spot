
// SUPABASE
import { supabase } from "@/lib/supabase";

// REACT
import { useEffect, useState } from "react";

// REACT NATIVE
import { StyleSheet, Text, View } from "react-native";

// TYPE

type recipeDataType = {
    id: number,
    image: string,
    name: string,
    recipe: string[],
    is_favorite: boolean,
    alt:string
}

const Recipe = () => {

    const[error, setError] = useState(null)
    const[recipes, setRecipes] = useState<recipeDataType[]>([])

    useEffect(() => {
        const fetchRecipe = async() =>  {
            const{data:recipeData, error} = await supabase.from('recipes').select('id,image,name,recipe,is_favorite,alt');

            if(error) {
                console.error("Une erreur est survenue lors du chargement de la recette",error)
            } else {
                setRecipes(recipeData || []);
                setError(null);
            }
        }
        fetchRecipe();
    },[])
   
    return(
        <View style={styles.recipeContainer}>
        {
            recipes.map((recipe) => (
                <View >
                    {
                        recipe.recipe.map((lign) => (

                            <Text style={styles.textRecipe}> - {lign} </Text>
                        ))
                    }
                </View>
            ))
        }
        </View>

    )
}

const styles = StyleSheet.create({
    textRecipe:{
        marginTop:8,
    },
    recipeContainer: {
    }

})
export default Recipe;