import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { Redirect } from "expo-router";
import { useRootNavigationState } from "expo-router";

export default function Home() {
  const rootNavigationState = useRootNavigationState();
  const isFullyLoaded = rootNavigationState?.key;

  if (!isFullyLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Redirect href="/(tabs)/home" />;
}