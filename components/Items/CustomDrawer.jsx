import { ButtonContext } from "@/context/Button-Context";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

export default function CustomDrawer() {
  const router = useRouter();

  return (
    <DrawerContentScrollView
      //   {...props}
      scrollEnabled={false}
      style={styles.drawer}
    >
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label={"Main Menu"}
        onPress={() => router.push("/")}
        labelStyle={styles.drawerLabel}
        inactiveBackgroundColor="#1235a9"
        inactiveTintColor="#fff"
        style={styles.main}
      />

      <DrawerItem
        label={"Home"}
        onPress={() => router.push("/")}
        labelStyle={styles.drawerLabel}
        inactiveTintColor="#000"
        style={styles.main}
      />
      <DrawerItem
        label={"Shop"}
        onPress={() => router.push("/Account")}
        labelStyle={styles.drawerLabel}
        inactiveTintColor="#000"
        style={styles.main}
      />
      <DrawerItem
        label={"Contact us"}
        onPress={() => router.push("/Contact-us")}
        labelStyle={styles.drawerLabel}
        inactiveTintColor="#000"
        style={styles.main}
      />
      <DrawerItem
        label={"Terms & Conditions"}
        onPress={() => router.replace("/")}
        labelStyle={styles.drawerLabel}
        inactiveTintColor="#000"
        style={styles.main}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    padding: 0
  },
  drawerLabel: {
    fontSize: 16,
    backgroundColor: "#12359",
    marginLeft: 0
  },
  main: {
    marginLeft: 0,
    width: 300,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 0,
    marginTop: 0
  }
});
