import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreen from '../../screens/HomeScreen';
import AccountScreen from '../../screens/AccountScreen';
import { Header } from '../../components/UI/Header';
import TabIcon1 from "react-native-vector-icons/Ionicons"
import TabIcon2 from "react-native-vector-icons/AntDesign";
import TabIcon3 from "react-native-vector-icons/MaterialCommunityIcons"
import { useRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const route = useRoute();

  return (
    <Tab.Navigator screenOptions={() => ({
      tabBarActiveTintColor: "#1235a9", 
      tabBarActiveTintColor: "light",
      // headerShown: false,
      tabBarLabelStyle: { fontSize: 14, color: "#000" },
      tabBarStyle: {
        height: 70, 
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: "#000"
      },
      tabBarItemStyle: {
        paddingVertical: 8 
      },
      header: () => <Header />
    })}> 
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({focused, size}) => {
            return (
            <TabIcon1
            name={focused ? "home-sharp" : "home-outline"}
            size={size + 5}
            color={focused ? "#1235a9" : "#000"}/>
          )
          }
        }}/>
        <Tab.Screen name="Categories" component={AccountScreen} options={{
          tabBarIcon: ({focused, size}) => {
            return (
            <TabIcon2
            name={focused ? "appstore1" : "appstore-o"}
            size={size + 5}
            color={focused ? "#1235a9" : "#000"}/>
          )
          }
        }}/>
        <Tab.Screen name="Search" component={AccountScreen} options={{
          tabBarIcon: ({focused, size}) => {
            return (
            <TabIcon1
            name={focused ? "search" : "search-outline"}
            size={size + 5}
            color={focused ? "#1235a9" : "#000"}/>
          )
          }
        }}/>
        <Tab.Screen name="Login" component={AccountScreen} options={{
          tabBarIcon: ({focused, size}) => {
            return (
            <TabIcon3
            name={focused ? "account-circle" : "account-circle-outline"}
            size={size + 5}
            color={focused ? "#1235a9" : "#000"}/>
          )
          }
        }}/>
      </Tab.Navigator>
  )
}