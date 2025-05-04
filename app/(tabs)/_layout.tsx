
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
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
    <Stack.Screen name='HomeScreen' options={{title:'Home', styleNavigation}} />
    <Stack.Screen name='ListProductsScreen'options={{title:"Cocktails", styleNavigation}} />
    <Stack.Screen name="ProductScreen" />
   </Stack>
  );
}
