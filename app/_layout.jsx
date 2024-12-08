// Importing global CSS
import "../global.css"
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Text } from "react-native";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Karla-Bold": require("../assets/fonts/Karla/Karla-Bold.ttf"),
    "Karla-Regular": require("../assets/fonts/Karla/Karla-Regular.ttf"),
    "Karla-Medium": require("../assets/fonts/Karla/Karla-Medium.ttf"),
    "Karla-SemiBold": require("../assets/fonts/Karla/Karla-SemiBold.ttf"),
    "Karla-Light": require("../assets/fonts/Karla/Karla-Light.ttf"),
    "Karla-Italic": require("../assets/fonts/Karla/Karla-Italic.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-Italic": require("../assets/fonts/Poppins/Poppins-Italic.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />;
    </Stack>
  )
}

export default RootLayout;
