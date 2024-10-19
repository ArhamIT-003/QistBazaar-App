import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StackNavigation } from './src/navigation/stack/StackNavigation';
import GlobalFont from 'react-native-global-font';
import WorkSans from './src/assets/Fonts/WorkSans-Medium.ttf'; // Adjust the path as necessary

export default function App() {
  useEffect(() => {
    GlobalFont.applyFont('Work Sans')
  }, [])
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}
