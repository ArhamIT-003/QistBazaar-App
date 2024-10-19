import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../screens/HomeScreen';
import TabNavigation from '../tab/TabNavigation';
import AccountScreen from '../../screens/AccountScreen';
import CartDrawer from '../../components/Items/CartDrawer';

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false, drawerPosition: 'left' }}>
      <Drawer.Screen name="Tabs" component={TabNavigation} />
    </Drawer.Navigator>
  )
}

const RightDrawer = createDrawerNavigator();

export function DrawerNavigation2() {
  return (
    <RightDrawer.Navigator id="RightDrawer"
      screenOptions={{ drawerPosition: 'right', headerShown: false }}
      drawerContent={() => <CartDrawer />} // Use custom drawer content

    >
      <RightDrawer.Screen name="HomeDrawer" component={DrawerNavigation} />
      <RightDrawer.Screen name="Home" component={HomeScreen} />
      <RightDrawer.Screen name="Account" component={AccountScreen} />
    </RightDrawer.Navigator>
  )
}


const SearchDrawer = createDrawerNavigator();

export function DrawerNavigation3() {
  return (
    <SearchDrawer.Navigator id="SearchDrawer"
      screenOptions={{ drawerPosition: 'right', headerShown: false }}
      // drawerContent={() => <CartDrawer />} // Use custom drawer content

    >
      <SearchDrawer.Screen name="RightDrawer" component={DrawerNavigation2} />
    </SearchDrawer.Navigator>
  )
}