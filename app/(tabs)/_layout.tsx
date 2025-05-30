
import React from 'react';

import { Stack } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  
  const styleNavigation = {
    headerBackTitleStyle:{
        fontFamily:"Manrope-Regular"
},
    headerTintColor:Colors.textColor.black,
    headerStyle:{
        borderBottomColor: Colors.secondary.red,
        borderBottomWidth:1
    }
 
}

  return (
   <Stack>
    <Stack.Screen name='HomeScreen' options={{
      headerShown:false,
      headerBackTitleStyle:{
        fontFamily:"Manrope-Regular"
},
    headerTintColor:Colors.textColor.black,
    }} />
    <Stack.Screen name='ListProductsScreen'options={{headerShown:false}} />
    
    <Stack.Screen name="ProductScreen" options={{headerShown:false}}/>
    <Stack.Screen name="GenreScreen" options={{headerShown:false}} />
    <Stack.Screen name="ProductsByAlcoolScreen" options={{headerShown:false}} />
   </Stack>
  );
}
