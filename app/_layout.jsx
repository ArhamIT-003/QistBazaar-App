import React, { useContext } from "react";
import { useFonts } from "expo-font";
import { Drawer } from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StatusBar, View } from "react-native";
import { Header, NewHeader } from "../components/Items/Header";
import "react-native-reanimated";
import { usePathname } from "expo-router";
import ButtonContextProvider from "../context/Button-Context";
import CustomDrawer from "../components/Items/CustomDrawer";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf")
  });


  const route = usePathname(); // Access the current route

  // Wrap your header components with React.memo
  const MemoizedHeader = React.memo(Header);
  const MemoizedNewHeader = React.memo(NewHeader);

  // In your RootLayout
  useEffect(
    () => {
      if (loaded) {
        SplashScreen.hideAsync();
      }
    },
    [loaded]
  );

  if (!loaded) {
    return null;
  }


  return (
    <ButtonContextProvider>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle={"dark-content"} />
        <Drawer
          drawerContent={CustomDrawer}
          screenOptions={{
            header: () =>
              route === "/" ? <MemoizedHeader /> : <MemoizedNewHeader />
          }}
        />
      </View>
    </ButtonContextProvider>
  );
}
