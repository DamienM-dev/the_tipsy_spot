// CONSTANT

import { Colors } from "@/constants/Colors"

//SUPABSE
import { supabase } from "@/lib/supabase"
//EXPO ROUTER
import { useLocalSearchParams } from "expo-router"
//REACT
import { useEffect, useState } from "react"

// REACT NATIVE

import { Image, ImageStyle, ScrollView, Text, TextStyle, View, ViewStyle } from "react-native"


//TYPE

type recipeByGenre = {
    id_recipes:number,
    image:string,
    name:string,
    alt:string,
    text:string,
}

type GeneralTypeInfo = {
  type: string;
  image_illustration: string;
  text: string;
};

const errorLoadingImage:string ="Désolé, une erreur est survenue pendant le chargement de l'image"
const cocktailType:string ="Les cocktails "

const ByGenreRecipes = () => {

    // Récupére l'id des recettes que j'ai passé en paramértre sur le composant ByGenre.tsx

    const {idGenre} = useLocalSearchParams();
    const[error, setError] = useState(null)

    const[recipes,setRecipes] = useState<recipeByGenre[] >([])
    const [generalInfo, setGeneralInfo] = useState<GeneralTypeInfo | null>(null);


    useEffect(() => {

        if(!idGenre) return;

        const fetchRecipe = async() => {
           const {data:recipesData, error} = await supabase
           .from('recipe_general_type')
           .select(`
            recipes(id_recipes,image,name, alt,text),
            general_type(type,image_illustration,text)
            `)
            .eq('id_general_type', Number(idGenre))
            
            if(error) {
                console.error("une erreur est survenue lors du chargement des recettes par genre", error)
                setError(error)
                return;
            } else {
                
                const parsedRecipe = recipesData.map((recipesDataFetch: any) => ({
                    id_recipes: recipesDataFetch.recipes.id_recipes,
                    image: recipesDataFetch.recipes.image,
                    name: recipesDataFetch.recipes.name,
                    alt: recipesDataFetch.recipes.alt,
                    text: recipesDataFetch.recipes.text,
                }))

          

                // Permet de récupérer le premier élément que je reçois sous la forme d'un objet

            setGeneralInfo({
            type: recipesData[0]?.general_type?.type ?? "",
            image_illustration: recipesData[0]?.general_type?.image_illustration ?? "",
            text: recipesData[0]?.general_type?.text ?? "",
            });


            setRecipes(parsedRecipe)
                
                
            }
        }
        fetchRecipe()
    },[idGenre])
    
    
    return(
        
        <ScrollView style={styles.containerGen}>



        <View>

                    <>
                <View>

                    {
                        generalInfo?.image_illustration ? 

                        <Image 
                        source={{uri:generalInfo.image_illustration}}
                        style={styles.imageHeader}
                        />
                        :
                        <Text>{errorLoadingImage}</Text>
                    }
                </View>
                    </>


                <View style={styles.containerText}>


                <View>
                    <Text style={styles.titleStyle}>{cocktailType}{generalInfo?.type}s</Text>
                    <Text style={styles.textStyle}>{generalInfo?.text}</Text>
                </View>
                    
        
           {
               recipes.map((recipe, index) => (
                   <>
            
                <View 
                    key={index}
                    style={styles.cardContainer}>
                    <View style={styles.imageContainer}>
                        <Image 
                            source={{uri:recipe.image}}
                            alt={recipe.alt}
                            style={styles.cardImage}
                        />
                    </View>
                    <View style={styles.cardContain}>
                        <View style={styles.cardContainText}>
                            <Text style={styles.cardTitle}>{recipe.name}</Text>
                            <Text style={styles.cardText}>{recipe.text}</Text>
                        </View>
                    </View>
                </View>
                </>
            ))
           }
                </View>
        </View>    
        </ScrollView>
    )
}

const styles = {
    containerGen: {
        width:"100%",
        height:"100%",
        backgroundColor:Colors.primary.beige
    } as ViewStyle,
    imageHeader: {
        width:"100%",
        height:400
    } as ImageStyle,
    containerText:{
        width:"100%",
        paddingHorizontal:6,
        marginTop:10,
    } as ViewStyle,
    titleStyle:{
        fontSize:25,
        fontFamily:"SpaceGrotesk-Regular",
        fontWeight:"bold",
        color:Colors.textColor.black,
        marginBottom:8,
    } as TextStyle,
    textStyle:{
        fontSize:15,
        fontFamily:"Manrope-Regular",
        color:Colors.textColor.black,
        marginBottom:12
    } as TextStyle,
    cardContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        width:"100%",
        height:130,
        marginBottom:30,
        borderWidth:1,
        borderColor:Colors.secondary.red,
        borderRadius:10
    } as ViewStyle,
    cardContainText:{
        marginBottom:30,
        height:"75%",
        overflow:"hidden",
        
    } as ViewStyle,
    imageContainer: {
        width:"30%",
        height:"100%",
    } as ViewStyle,
    cardImage:{
        width:"100%",
        height:"100%",
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
    } as ImageStyle,
    cardTitle:{
        fontSize:15,
        fontFamily:"SpaceGrotesk-Regular",
        fontWeight:"bold",
        color:Colors.textColor.black,
        marginTop:8,
        
    } as TextStyle,
    cardText:{
        fontSize:12,
        fontFamily:"Manrope-Regular",
        color:Colors.textColor.black,
        marginBottom:5,
    } as TextStyle,
    cardContain:{
        width:"70%",
        paddingHorizontal:10,
    } as ViewStyle,

}

export default ByGenreRecipes