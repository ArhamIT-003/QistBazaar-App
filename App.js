import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigation from './src/navigation/tab/TabNavigation';
import { StackNavigation } from './src/navigation/stack/StackNavigation';
import DrawerNavigation from './src/navigation/drawer/DrawerNavigation';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}
