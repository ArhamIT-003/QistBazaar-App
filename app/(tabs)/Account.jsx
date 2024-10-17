import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import InputText from "../../components/Items/Input";
export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text>Account Screens</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute"
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8
  }
});

