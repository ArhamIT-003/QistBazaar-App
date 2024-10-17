import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Feather, EvilIcons, AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { styles } from "./Header.styles";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { useDrawerStatus } from "@react-navigation/drawer";
export function Header() {
  const [text, setText] = useState("");
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === "open";

  function clearHandler() {
    setText("");
  }

  function openDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  function closeDrawer() {
    navigation.dispatch(DrawerActions.closeDrawer());
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#000"} />
      <View style={styles.wrapper}>
        <View>
          <Image
            source={require("../../assets/images/QB-logo.png")}
            style={{ width: 250, height: 80 }}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity style={styles.cartIcon}>
          <Feather name="shopping-bag" size={30} color="#1235a9" />
          <Text style={styles.itemsInCart}>0</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.search}>
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={isDrawerOpen ? closeDrawer : openDrawer}
        >
          <EvilIcons name="navicon" size={40} color="#1235a9" />
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>I'm Shopping for</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={"#000"}
            keyboardType={"default"}
            value={text}
            onChangeText={text => setText(text)}
          />

          {text.length > 0 &&
            <Pressable onPress={clearHandler}>
              <AntDesign name="close" size={24} color="#1235a9" />
            </Pressable>}
        </View>
      </View>
    </View>
  );
}

export function NewHeader() {
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === "open";
  function openDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  function closeDrawer() {
    navigation.dispatch(DrawerActions.closeDrawer());
  }

  console.log(isDrawerOpen);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#000"} />
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={isDrawerOpen ? closeDrawer : openDrawer}
        >
          <EvilIcons name="navicon" size={40} color="#1235a9" />
        </TouchableOpacity>
        <View>
          <Image
            source={require("../../assets/images/QB-logo.png")}
            style={{ width: 250, height: 80 }}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity style={styles.cartIcon}>
          <Feather name="shopping-bag" size={30} color="#1235a9" />
          <Text style={styles.itemsInCart}>0</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
