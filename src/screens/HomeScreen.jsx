import { useRoute } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
  const routes = useRoute();
  console.log("Navigation", routes)
  return (
    <View style={styles.container}>
        <Text>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  }
})