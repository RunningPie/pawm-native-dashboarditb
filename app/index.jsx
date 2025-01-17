import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { Redirect } from "expo-router";
import { useRootNavigationState } from "expo-router";
import { useGlobalContext } from "../context/GlobalProvider";

export default function Home() {
  const rootNavigationState = useRootNavigationState();
  const isFullyLoaded = rootNavigationState?.key;

  const { user, isLoggedIn } = useGlobalContext();

  if (!user || !isLoggedIn) return <Redirect href="/(auth)/onboarding" />;

  if (!isFullyLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Redirect href="/(tabs)/home" />;
}