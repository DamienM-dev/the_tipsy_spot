import { Tabs } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons'; 

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.secondary.red,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          
          borderTopColor: Colors.secondary.red,
          borderTopWidth: 1,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
  name="HomeScreen"
  options={{
    title: 'Accueil',
    tabBarIcon: ({ color, size }) => <Ionicons 
    name="home-outline" 
    color={color} 
    size={size} />,
  }}
/>
   
      <Tabs.Screen
        name="ProfileScreen"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => <Ionicons 
          name="person-outline" 
          color={color} 
          size={size} />,
        }}
      />
      {/* Icone exclue de a tab bar, il doit y avoir une meilleur méthode mais je n'arrive pas à trouver la quel */}
      <Tabs.Screen
      name="GenreScreen"
      options={{href:null}} 
      />
     
      <Tabs.Screen
      name="index"
      options={{href:null}} 
      />
      <Tabs.Screen
      name="ListProductsScreen"
      options={{href:null}} 
      />
      <Tabs.Screen
      name="ProductsByAlcoolScreen"
      options={{href:null}} 
      />
      <Tabs.Screen
      name="ProductScreen"
      options={{href:null}} 
      />
      {/* <Tabs.Screen
      name="HomeScreen"
      options={{href:null}} /> */}

      
    </Tabs>
    
  );
}

export default TabLayout