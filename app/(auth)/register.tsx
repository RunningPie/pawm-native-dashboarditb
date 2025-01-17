import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useRouter } from "expo-router";
import { Keyboard } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

import { createUser } from "../../lib/appwrite"

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const router = useRouter();

  const handleSignUp = () => {
    console.log("SignUp button pressed");

    try {
      createUser(username, email, password);

      router.push("/(auth)/login");
    } catch (error) {
      console.error("Failed to create user", error);
      Alert.alert("Error registering user", error.message);
    }

  };

  const handleGoogleOAuth = () => {
    console.log("Google OAuth button pressed");
    router.replace("../index");
  };

  const handleSignIn = () => {
    router.push("/(auth)/login");
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

  return (
    <LinearGradient colors={["#0A2D41", "#2E5C76"]} className="flex-1">
      <Text className="text-white text-2xl pt-4 font-karla-regular text-center">
        Welcome Aboard, <Text className="font-karla-bold">Students!</Text>
      </Text>
      {!isKeyboardVisible && (
        <Image
          source={require("../../assets/images/logowithname2.png")}
          className="w-full h-32"
          resizeMode="cover"
        />
      )}
      <SafeAreaView className="flex-1 justify-start px-6">
        {/* Header */}
        <View className="items-start mt-7">
          <Text className="text-white font-karla-bold text-2xl py-1">
            Sign Up
          </Text>
          <Text className="text-white font-karla-medium text-lg pb-4">
            Already have an account?{" "}
            <Text
              onPress={handleSignIn}
              className="font-karla-bold text-[#4beaff]"
            >
              Log in
            </Text>
          </Text>
        </View>

        {/* email Input */}
        <View className="">
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
              keyboardType="default"
              autoCapitalize="none"
              className="flex-1 text-white"
            />
          </View>
          <View className="mb-6 flex-row items-center bg-black/40 px-4 py-3 rounded-lg">
            <Entypo name="mail" size={20} color="white" className="mr-2" />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#ccc"
              secureTextEntry
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
              placeholder="Confirm Password"
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
            onPress={handleSignUp}
            className="bg-primary py-3 rounded-lg mb-4 mt-4"
          >
            <Text className="text-center text-white text-lg font-karla-bold">
              Create an Account
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
              Privacy Policy and Terms of Service apply
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Register;
