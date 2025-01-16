import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useRouter } from "expo-router";
import { Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const router = useRouter(); // Initialize the router

  const handleLogin = () => {
    console.log("Login button pressed");
    // On successful login, navigate to the main app
    router.replace("../home"); // Navigate to the 'index' screen
  };

  const handleGoogleOAuth = () => {
    console.log("Google OAuth button pressed");
    // On successful OAuth, navigate to the main app
    router.replace("../home"); // Navigate to the 'index' screen
  };

  const handleSignup = () => {
    router.push("./register"); // Navigate to the 'register' screen
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

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

  return (
    <LinearGradient colors={["#0A2D41", "#2E5C76"]} className="flex-1">
      <Image
        source={require("../../assets/images/login-illustration.png")}
        className="w-full h-full absolute bottom-48"
        resizeMode="contain"
      />
      <SafeAreaView className="flex-1 justify-between px-6">
        {/* Header */}
        <View className="items-center pt-12">
          <Text className="text-white text-2xl font-karla-regular text-center">
            Welcome Aboard, <Text className="font-karla-bold">Students!</Text>
          </Text>
          {!isKeyboardVisible && (
            <Image
              source={require("../../assets/images/logo-3.png")}
              className="w-60 h-48 mt-4"
              resizeMode="contain"
            />
          )}
        </View>

        {/* username Input */}
        <View className="pb-12">
          <Text className="text-white font-karla-bold text-2xl py-4">
            Welcome!
          </Text>
          <View className="flex-row items-center bg-black/40 px-4 py-3 rounded-lg mb-4">
            <FontAwesome5
              name="user-alt"
              size={16}
              color="white"
              className="mr-2"
            />
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Username"
              placeholderTextColor="#ccc"
              keyboardType="default" // Use 'default' or 'email-address' if appropriate
              autoCapitalize="none"
              className="flex-1 text-white"
            />
          </View>
          {/* Password Input */}
          <View className="mb-6 flex-row items-center bg-black/40 px-4 py-3 rounded-lg">
            <FontAwesome5
              name="unlock"
              size={16}
              color="white"
              className="mr-2"
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#ccc"
              secureTextEntry
              autoCapitalize="none"
              className="flex-1 text-white"
            />
          </View>
          <Text className="text-lg font-bold text-white">
            Forgot Your Password?
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-primary py-3 rounded-lg mb-4 mt-4"
          >
            <Text className="text-center text-black text-lg font-karla-bold">
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleGoogleOAuth}
            className="flex-row items-center justify-center bg-white bg-opacity-10 py-3 rounded-lg mb-6"
          >
            <AntDesign name="google" size={24} color="black" />
            <Text className="text-black text-lg font-karla-bold ml-2">
              Sign in with Google
            </Text>
          </TouchableOpacity>
          {/* Signup Placeholder */}
          <View className="flex-row justify-center">
            <Text className="text-white text-base font-karla-regular">
              Don't have an account?{" "}
            </Text>
            {/* Navigation doesnt work when paired with nativewind + expo new architecture */}
            <TouchableOpacity onPress={handleSignup}>
              <Text
                style={{
                  color: "#4beaff",
                  fontSize: 16,
                  fontFamily: "Karla-Bold",
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Login;
