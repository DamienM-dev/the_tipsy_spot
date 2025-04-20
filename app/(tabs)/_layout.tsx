
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import StackNavigator from '@/components/navigation/Navigators';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
   <StackNavigator />
  );
}
