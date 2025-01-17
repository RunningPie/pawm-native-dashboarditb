import React from "react";
import { Stack } from "expo-router";

export default function DetailsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="course/[id]" />
      <Stack.Screen name="quiz/[id]" /> 
      <Stack.Screen name="test/[id]" />
    </Stack>
  );
}