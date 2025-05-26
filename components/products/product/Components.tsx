import { Colors } from "@/constants/Colors";
import { supabase } from "@/lib/supabase";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

// TYPE
type DisplayComponent = {
  id_components: number;
  name: string;
  quantity_of: number;
  symbole: string;
};

const componentText = "Composants";

const Components = () => {
  const { idRecipe } = useLocalSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [components, setComponents] = useState<DisplayComponent[]>([]);

  useEffect(() => {
    const fetchComponents = async () => {
      const { data, error } = await supabase
        .from("recipe_components")
        .select(`
          quantity_of,
          components (id_components, name),
          quantity (symbole)
        `)
        .eq("id_recipes", Number(idRecipe));
       

      if (error) {
        console.error("Erreur de récupération des composants", error);
        setError(error);
        return;
      }

      const parsed = data.map((item: any) => ({
        id_components: item.components.id_components,
        name: item.components.name,
        quantity_of: item.quantity_of,
        symbole: item.quantity?.symbole ?? "",
      }));
      

      setComponents(parsed);
   
    };

    if (idRecipe) fetchComponents();
  }, [idRecipe]);

  return (
    <View style={styles.componantContainer}>
      <Text style={styles.componantTitle}>{componentText}</Text>
      <View style={styles.blockComponent}>
        {components.map((c) => (
          <Text key={c.id_components} style={styles.textBlockComponent}>
            - {c.quantity_of} {c.symbole} {c.name}
          </Text>
          
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blockComponent: {
    display: "flex",
    flexDirection: "column",
  } as ViewStyle,
  textBlockComponent: {
    marginTop: 5,
    fontWeight: "300",
  },
  componantContainer: {
    width: "30%",
    borderRightWidth: 1,
    borderRightColor: Colors.secondary.red,
    paddingHorizontal:8
  } as ViewStyle,
  componantTitle: {
    fontFamily: "SpaceGrotesk-Regular",
    fontWeight: "bold",
  } as ViewStyle,
});

export default Components;
