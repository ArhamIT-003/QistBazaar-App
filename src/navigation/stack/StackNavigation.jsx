import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import {CategoriesDrawerNavigation} from '../drawer/DrawerNavigation';

const Stack = createNativeStackNavigator();

export function StackNavigation() {

  return (
    <Stack.Navigator>
        <Stack.Screen name="nav" component={CategoriesDrawerNavigation} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}
