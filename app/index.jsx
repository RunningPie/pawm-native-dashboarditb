import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const checkNavigation = async () => {
      try {
        const hasVisited = await AsyncStorage.getItem("hasVisited");
        if (hasVisited === null) {
          // First visit; navigate to Onboarding
          router.replace("/(auth)/onboarding");
        } else {
          // Not first visit; navigate to Login
          router.replace("/(tabs)/home");
        }
      } catch (error) {
        console.error("Error during navigation check:", error);
        // Optionally, navigate to a fallback screen or handle the error
      }
    };

    checkNavigation();
  }, [router]);

  // Display a loading indicator while determining navigation
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Welcome Back Thalita!
      </Text>
    </View>
  );
};

export default Home;