import { StyleSheet, Text, TextInput, View } from "react-native";

export default function InputText({name, type}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>{name}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={"#000"}
        keyboardType={type}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: "#3e41ee",
    padding: 14,
    borderRadius: 30,
    position: "relative",
    margin: 20,
    justifyContent: "center"
  },
  text: {
    position: "absolute",
    top: -12,
    left: 40,
    fontSize: 14,
    zIndex: 10,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 8,
    color: "#1235a9",
    letterSpacing: 3
  },
  input: {
    borderWidth: 0, 
    height: 40, 
    paddingVertical: 0,
    marginLeft: 26
  }
});
