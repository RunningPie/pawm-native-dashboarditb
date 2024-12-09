import { StyleSheet, Text, View } from 'react-native'
import { Stack, Link } from "expo-router";
import React from 'react'

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="onboarding_1" options={{ headerShown: false }} />;
    </Stack>
  )
}

export default AuthLayout