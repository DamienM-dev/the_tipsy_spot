//React native components


// Expo component

import {useFonts} from 'expo-font'
import { useEffect } from 'react';
import { Slot, SplashScreen } from 'expo-router';
import HomeScreen from '@/components/home/Home';
import StackNavigator from '@/components/navigation/Navigators';

//REACT NAVIGATION




 




export default function Layout() {

  const[fontsLoaded] = useFonts({

    'textFonts':require('../assets/fonts/Manrope/Manrope-Regular.ttf'),
    'textTitle':require('../assets/fonts/SpaceGrotesk/SpaceGrotesk-Regular.ttf')
  });

  useEffect(() => {
    if(fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if(!fontsLoaded) {
    return null
  }
  
  return (
    <>
      <Slot />
    </>
  )
}
