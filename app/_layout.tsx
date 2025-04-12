//React native components
import { SafeAreaView, Text } from 'react-native';

// Expo component

import {useFonts} from 'expo-font'
import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';
import HomeScreen from '@/components/home/Home';
 




export default function RootLayout() {

  const[loaded, error] = useFonts({

    'textFonts':require('../assets/fonts/Manrope/Manrope-Regular.ttf')
  });

  useEffect(() => {
    if(loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [error,loaded])

  if(!loaded && !error) {
    return null
  }


  
   
  return (
    <SafeAreaView><HomeScreen /></SafeAreaView>
  )
}
