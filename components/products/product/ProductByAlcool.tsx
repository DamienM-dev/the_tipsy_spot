import { Colors } from "@/constants/Colors"
import { supabase } from "@/lib/supabase"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { Image, ImageStyle, ScrollView, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"

type alcoolCard = {
    id_recipes:number,
    name: string;
    image: string;
    alt: string;
}


const ProductByAlcool = () => {

    const router = useRouter()
    const[error, setError] = useState(null)
    const[alcoolsType, setAlcoolsType] = useState<alcoolCard[]>([])
    
    const{id_alcool} = useLocalSearchParams<{id_alcool?:string}>()
   
useEffect(() => {
    const fetchAlcoolCard = async() => {


        const{data:alcoolData, error} = await supabase
        .from('recipe_drinks')
        .select(`
            id_drinks,id_recipes,
            recipes (id_recipes,name, image, alt)`)
        .eq('id_drinks',Number(id_alcool))

        if(error) {
            console.error('une erreur est survenue lors du chargement des recettes',error)
            
        } else if(!id_alcool || isNaN(Number(id_alcool))) {
            console.warn("Paramètre id_alcool invalide :", id_alcool);
            return;
        
        }
        
        else {
            const parsedRecipe = alcoolData.map((fetchRecipe:any) => ({
                id_recipes:fetchRecipe.recipes?.id_recipes ?? "",
                name:fetchRecipe.recipes?.name ?? "" ,
                alt:fetchRecipe.recipes?.alt ?? "",
                image:fetchRecipe.recipes?.image ?? "",
            }))
          
            setAlcoolsType(parsedRecipe);
        }
    }
    fetchAlcoolCard()
},[id_alcool])


    
    return(
        <ScrollView style={styles.containerPrincipal}>
            <View>
            {
                
                alcoolsType.map((recipeByAlcool,index) => (
                    
                    <TouchableOpacity
                        key={index}
                        onPress={() => router.push({pathname:'/ProductScreen', params:{idRecipe:recipeByAlcool.id_recipes.toString()}})}
                        style={styles.containerCards}>
                        <View style={styles.containerText}>
                            <Text style={styles.textCards}>{recipeByAlcool.name}</Text>
                        </View>
                        <View style={styles.containerImage}>
                            <Image 
                                source={{uri:recipeByAlcool.image}}
                                style={styles.imageCards}/>
                        </View>
                    </TouchableOpacity>
                )
            )
        }
            </View>

        </ScrollView>
    )
}

const styles = ({
    containerPrincipal:{
        backgroundColor:Colors.primary.beige
    } as ViewStyle,
    containerCards:{
        height:320,
        backgroundColor:Colors.secondary.red,
        borderRadius:8,
        margin:8,
        display:"flex",
        flexDirection:"column-reverse",
        boxShadow:""
    } as ViewStyle,
    containerImage:{
        height:"70%",
    } as ViewStyle,
    containerText:{
        height:"30%",
        padding:10,
    } as ViewStyle,
    textCards:{
        color:Colors.primary.beige,
        fontSize:18,
        fontFamily:'SpaceGrotesk-Bold'

    } as TextStyle, 
    imageCards:{
        width:"100%",
        height:"100%",
        objectFit:"cover",
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    } as ImageStyle
})
export default ProductByAlcool