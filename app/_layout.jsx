// Importing global CSS
import "../global.css"
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf")
  });

  useEffect (() => {
    if (error) throw error;
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
    if (!fontsLoaded && !error) {
      return null;
    }
  }, [fontsLoaded, error]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />;
    </Stack>
  )
}

export default RootLayout;
