import "../global.css";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import React from "react";
import {
  View,
  ActivityIndicator,
  Platform,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import GlobalProvider, { useGlobalContext } from "../context/GlobalProvider"; // Adjust path if necessary

const RootLayoutContent = () => {
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

  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!fontsLoaded || isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
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
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        style="light"
        translucent
        backgroundColor="transparent"
        hidden={Platform.OS === "android"}
      />
      {/* Wrap content with GlobalProvider */}
      <GlobalProvider>
        <RootLayoutContent />
      </GlobalProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
