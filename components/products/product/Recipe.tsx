import { StyleSheet, Text, View } from "react-native";

const Recipe = () => {

    const recipeHard = 
    [
        {
            name:"Versez ½ tasse de mélange de glaçons ou un gros glaçon,"
        }, 
        {
            name:"Versez 30ml de gin," 
        }, 
        {
            name:"Ajoutez 30ml de vermouth rouge, " 
        },
        {
            name:"Complétez avec 30ml de Campari"
        },
        {
            name:"Vous pouvez mélanger légèrement les trois ingrédients à l’aide d’une cuillère à mélange / cuillère à cocktails"
        },

        {
            name:"Pour une expérience gustative au top, garnissez le tout avec une écorce d’orange"  
        },
        {
            name:"Vous n’avez plus qu’à déguster votre délicieux cocktail rafraîchissant."
        }    
    ]
    return(
        <>
    {
        recipeHard.map((recipeLine, index) => (

            

                <Text style={styles.textRecipe} key={index}>- {recipeLine.name}</Text>

        ))

    }

        </>
    )
}

const styles = StyleSheet.create({
    textRecipe:{
        marginTop:8
    }
})
export default Recipe;