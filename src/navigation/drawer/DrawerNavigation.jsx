import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from '../tab/TabNavigation';
import CartDrawer from '../../components/Items/CartDrawer';
import SearchDrawerLayout from '../../components/Items/SearchDrawer';
import HomeDrawer from '../../components/Items/HomeDrawer';

const Drawer = createDrawerNavigator();
const SearchDrawer = createDrawerNavigator();
const RightDrawer = createDrawerNavigator();
const CatDrawer = createDrawerNavigator();

export function DrawerNavigation() {
  return (
    <Drawer.Navigator
      id='HomeDrawer' 
      screenOptions={{ headerShown: false, drawerPosition: 'left' }}
      drawerContent={() => <HomeDrawer />}
    >
      <Drawer.Screen name="Tabs" component={TabNavigation} />
    </Drawer.Navigator>
  )
}


export function DrawerNavigation2() {
  return (
    <RightDrawer.Navigator id="RightDrawer"
      screenOptions={{ drawerPosition: 'right', headerShown: false }}
      drawerContent={() => <CartDrawer />}
    >
      <RightDrawer.Screen name="HomeDrawer" component={DrawerNavigation} />
    </RightDrawer.Navigator>
  )
}



export function DrawerNavigation3() {
  return (
    <SearchDrawer.Navigator id="SearchDrawer"
      screenOptions={{ drawerPosition: 'right', headerShown: false }}
      drawerContent={() => <SearchDrawerLayout />}>
      <SearchDrawer.Screen name="RightDrawer" component={DrawerNavigation2} />
    </SearchDrawer.Navigator>
  )
}



export function CategoriesDrawerNavigation() {
  return (
    <CatDrawer.Navigator 
      id='CatDrawer'
      screenOptions={{ drawerPosition: 'left', headerShown: false }}
    >
      <CatDrawer.Screen name='SearchDrawer' component={DrawerNavigation3} />
    </CatDrawer.Navigator>
  );
}
