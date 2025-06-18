

import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { Slot, SplashScreen} from 'expo-router';




export default function Layout() {
  const [fontsLoaded] = useFonts({
    'Manrope-Regular': require('../assets/fonts/Manrope/Manrope-Regular.ttf'),
    'Manrope-Bold': require('../assets/fonts/Manrope/Manrope-Bold.ttf'),
    'SpaceGrotesk-Regular': require('../assets/fonts/SpaceGrotesk/SpaceGrotesk-Regular.ttf'),
    'SpaceGrotesk-Bold': require('../assets/fonts/SpaceGrotesk/SpaceGrotesk-Bold.ttf'),
  });
  
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) return null;

  
  return (
    <Slot/>
  );
}
