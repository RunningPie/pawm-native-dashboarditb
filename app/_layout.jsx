import "../global.css";
import { Stack, Slot } from "expo-router";
import { useFonts } from "expo-font";
import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SplashScreen from "./components/SplashScreen";
import Onboarding from "./(auth)/onboarding";
import Login from "./(auth)/login";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RootLayout = () => {
  // Load fonts
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

  // State variables
  const [animationCompleted, setAnimationComplete] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(null);

  // Check if the app is launched for the first time
  useEffect(() => {
    const checkFirstVisit = async () => {
      try {
        const hasVisited = await AsyncStorage.getItem("hasVisited");
        setIsFirstVisit(hasVisited === null);
      } catch (error) {
        console.error("Error reading AsyncStorage:", error);
        setIsFirstVisit(false);
      }
    };
    checkFirstVisit();
  }, []);

  // Handle completion of Onboarding
  const resetOnboarding = async () => {
    try {
      await AsyncStorage.removeItem("hasVisited");
      setIsFirstVisit(true);
      console.log("Onboarding has been reset.");
    } catch (error) {
      console.error("Error resetting onboarding:", error);
    }
  };

  const handleOnboardingFinish = async () => {
    try {
      await AsyncStorage.setItem("hasVisited", "true");
      setAnimationComplete(true);
    } catch (error) {
      console.error("Error setting AsyncStorage:", error);
      setAnimationComplete(true); // Proceed even if there's an error
    }
  };

  // Handle completion of SplashScreen animation
  const handleSplashFinish = () => {
    setAnimationComplete(true);
  };

  // Determine what to render based on the state
  if (!fontsLoaded || isFirstVisit === null) {
    // While fonts are loading or checking first visit, show SplashScreen
    return (
      <SplashScreen
        isVisible={!animationCompleted}
        onFinish={handleSplashFinish}
      />
    );
  }

  if (isFirstVisit && !animationCompleted) {
    // If it's the first visit and animation not completed, show Onboarding
    return <Onboarding onFinish={handleOnboardingFinish} />;
  }

  if (isFirstVisit && animationCompleted) {
    return <Login />;
  }

  // Render the main app stack
  return (
    <GestureHandlerRootView style={{ flex: 1 }} screenOptions={{ headerShown: false }}>
      <Slot />

      {/* Development-Only Reset Button */}
      {/*
      {__DEV__ && (
        <TouchableOpacity
          className="absolute bottom-5 right-5 bg-red-500 p-3 rounded"
          onPress={async () => {
            try {
              await AsyncStorage.removeItem("hasVisited");
              setIsFirstVisit(true);
              console.log("Onboarding has been reset.");
            } catch (error) {
              console.error("Error resetting onboarding:", error);
            }
          }}
        >
          <Text className="text-white text-center">Reset Onboarding</Text>
        </TouchableOpacity>
      )}
        */}
    </GestureHandlerRootView>
  );
};

export default RootLayout;
