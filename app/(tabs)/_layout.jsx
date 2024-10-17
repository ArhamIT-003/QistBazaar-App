import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#1235a9", // Color when focused
        tabBarActiveTintColor: "light",
        headerShown: false,
        tabBarLabelStyle: { fontSize: 14, color: "#000" },
        tabBarStyle: {
          height: 70, // Adjust the height to make the tab bigger
          backgroundColor: "white", // Optional: set the background color,
          borderTopWidth: 1,
          borderTopColor: "#000"
        },
        tabBarItemStyle: {
          paddingVertical: 8 // Adjust vertical padding for tab items
        },
        tabBarLabel: ({ focused }) =>
          <Text style={{ color: focused ? "#1235a9" : "#000" }}>
            {route.name === "index" ? "Home" : route.name}{" "}
            {/* Adjust the name as needed */}
          </Text>
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, focused }) =>
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={size + 5}
              color={focused ? "#1235a9" : "#000"}
            />
        }}
      />

      <Tabs.Screen
        name="Categories"
        options={{
          title: "Categories",
          tabBarIcon: ({ size, focused }) =>
            <AntDesign
              name={focused ? "appstore1" : "appstore-o"}
              size={size + 5}
              color={focused ? "#1235a9" : "#000"}
            />
        }}
      />

      <Tabs.Screen
        name="Search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused, size }) =>
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={size + 5}
              color={focused ? "#1235a9" : "#000"}
            />
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          title: "Account",
          tabBarIcon: ({ focused, size }) =>
            <MaterialCommunityIcons
              name={focused ? "account-circle" : "account-circle-outline"}
              size={size + 5}
              color={focused ? "#1235a9" : "#000"}
            />
        }}
      />
    </Tabs>
  );
}
