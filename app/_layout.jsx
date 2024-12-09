// Importing global CSS
import "../global.css"
// import * as SplashScreen from 'expo-splash-screen';
import { Stack, Link } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import SplashScreen from "./components/SplashScreen";

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

  const [animationCompleted, setAnimationComplete] = useState(false);

  // Wait for fonts and animation to complete before rendering the stack
  if (!fontsLoaded || !animationCompleted) {
    return (
      <SplashScreen
        isVisible={!animationCompleted}
        onFinish={() => setAnimationComplete(true)} // State updated only when animation finishes
      />
    );
  }

  // Render the main app after splash screen and fonts are ready
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding_2" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding_3" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;