import { Ionicons } from "@expo/vector-icons";
import { View, Pressable } from "react";
import { StyleSheet } from "react-native";

export default function IconButton({ name, color, onPress, size }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={name} color={color} size={size} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75
  },
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2
  }
});
