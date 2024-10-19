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
import { DrawerActions, useNavigation, useRoute } from "@react-navigation/native";
import { useDrawerStatus } from "@react-navigation/drawer";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import AntDesignicon from "react-native-vector-icons/AntDesign";
export function Header() {
  const [text, setText] = useState("");
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === "open";
  const route = useRoute();

  function clearHandler() {
    setText("");
  }

  function openDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  function closeDrawer() {
    navigation.dispatch(DrawerActions.closeDrawer());
  }

  if(route.name === "Home"){
    return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#000"} />
      <View style={styles.wrapper}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("../../assets/images/QB-logo.png")}
            style={{ width: 250, height: 80 }}
            resizeMode="contain"
          />
        </Pressable>
        <TouchableOpacity style={styles.cartIcon} onPress={() => navigation.getParent('RightDrawer').openDrawer()}
        >
          <FeatherIcon name="shopping-bag" size={30} color="#1235a9" />
          <Text style={styles.itemsInCart}>0</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.search}>
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={isDrawerOpen ? closeDrawer : openDrawer}
        >
          <EvilIcon name="navicon" size={40} color="#1235a9" />
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
            <Pressable android_ripple={{ color: "#ddd" }} onPress={clearHandler}>
              <AntDesignicon name="close" size={24} color="#1235a9" />
            </Pressable>}
        </View>
      </View>
    </View>
  );
  }
  else{
    
  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#000"} />
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={isDrawerOpen ? closeDrawer : openDrawer}
        >
          <EvilIcon name="navicon" size={40} color="#1235a9" />
        </TouchableOpacity>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("../../assets/images/QB-logo.png")}
            style={{ width: 250, height: 80 }}
            resizeMode="contain"
          />
        </Pressable>
        <TouchableOpacity style={styles.cartIcon} onPress={() => navigation.getParent('RightDrawer').openDrawer()}a>
          <FeatherIcon name="shopping-bag" size={30} color="#1235a9" />
          <Text style={styles.itemsInCart}>0</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
  }
  
}



