import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import {DrawerNavigation3} from '../drawer/DrawerNavigation';

const Stack = createNativeStackNavigator();

export function StackNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="cart" component={DrawerNavigation3} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}
