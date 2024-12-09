import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import { Redirect, router } from "expo-router";


export default function Onboarding2() {
  return (
    <LinearGradient
      colors={['#0A2D41', '#2E5C76']} // Warna gradien
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1 mt-5">
        {/* Header */}
        <View className="flex items-center mt-[-10px]">
          <Text className="text-white text-2xl font-karla_regular text-center">
            Welcome Aboard, <Text className="font-karla_bold">Students!</Text>
          </Text>
          <Image
            source={require("../assets/images/logowithname.png")}
            className="w-46 h-20 mt-4"
            resizeMode="contain"
          />
        </View>

        {/* Illustration */}
        <View className="flex-1 items-center justify-start mt-[-30px]">
          <Image
            source={require("../assets/images/photo2.png")}
            className="w-[700px] h-[500px]"
            resizeMode="contain"
          />
        </View>

        {/* Content */}
        <View className="items-center mb-8 px-4">
          <Text className="text-white text-2xl font-karla_bold text-center">
            Start your <Text className="text-pink-400">Journey</Text>
          </Text>
          <Text className="text-white text-base font-karla text-center mt-2 italic">
            Navigate your path, access resources, and achieve success with ITB Dashboard
          </Text>
        </View>

        {/* Navigation */}
        <View className="flex-row justify-between items-center px-6 mb-6">
          {/* Skip Button */}
          <TouchableOpacity
            className="pl-6"
            onPress={() => {router.push('/login')}}
          >
            <Text className="text-white text-xl font-karla_regular">
              Skip
            </Text>
          </TouchableOpacity>

          {/* Circle Button */}
          <TouchableOpacity
            className="w-10 h-10 rounded-full bg-[#0A2D41] flex items-center justify-center"
            onPress={() => {router.push('/onboarding_3')}}
          >
            <Image
              source={require("../assets/images/arrowon.png")}
              className="w-5 h-5"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
