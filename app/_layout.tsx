import "../global.css";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Onboarding from "./(auth)/onboarding";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

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
  const [isFirstVisit, setIsFirstVisit] = useState<boolean | null>(null);
  const [isCheckingFirstVisit, setIsCheckingFirstVisit] = useState(true);

  useEffect(() => {
    const checkFirstVisit = async () => {
      try {
        const hasVisited = await AsyncStorage.getItem("hasVisited");
        setIsFirstVisit(hasVisited === null);
      } catch (error) {
        console.error("Error reading AsyncStorage:", error);
        setIsFirstVisit(false);
      } finally {
        setIsCheckingFirstVisit(false);
      }
    };

    checkFirstVisit();
  }, []);

  const handleOnboardingComplete  = async () => {
    try {
      await AsyncStorage.setItem("hasVisited", "true");
      setIsFirstVisit(false);
    } catch (error) {
      console.error("Error setting AsyncStorage:", error);
    }
  };

  if (!fontsLoaded || isCheckingFirstVisit) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        style="light"
        translucent
        backgroundColor="transparent"
        hidden={Platform.OS === "android"}
      />
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarTranslucent: true,
          statusBarStyle: "light",
          headerStyle: {
            backgroundColor: "transparent",
          },
        }}
      >
        {isFirstVisit ? (
          <Stack.Screen
            name="(auth)/onboarding"
            options={{ presentation: "modal" }}
            initialParams={{ onFinish: handleOnboardingComplete  }}
          />
        ) : (
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        )}
      </Stack>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
