import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';

export default function Onboarding2() {
  return (
    <LinearGradient
      colors={['#0A2D41', '#2E5C76']} // Warna gradien
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1">
        {/* Header */}
        <View className="flex items-center mt-[-10px]">
          <Text className="text-white text-2xl font-karla_regular text-center">
            Welcome Aboard, <Text className="font-karla_bold">Students!</Text>
          </Text>
          <Image
            source={require("../../assets/images/logowithname.png")}
            className="w-46 h-20 mt-4"
            resizeMode="contain"
          />
        </View>

        {/* Illustration */}
        <View className="flex-1 items-center justify-start mt-[-30px]">
          <Image
            source={require("../../assets/images/photo3.png")}
            className="w-[730px] h-[525px]"
            resizeMode="contain"
          />
        </View>

        {/* Content */}
        <View className="items-center mb-8 px-4">
          <Text className="text-white text-2xl font-karla_bold text-center">
            Begin to <Text className="text-sky-400">Explore and Learn </Text>
          </Text>
          <Text className="text-white text-base font-karla text-center mt-2 italic">
            Start your academic journey, access essential tools, and achieve your goals with ease using ITB Dashboard
          </Text>
        </View>

        {/* Navigation */}
        <View className="flex-row justify-between items-center px-6 mb-6">
          {/* Skip Button */}
          <TouchableOpacity className="pl-6">
            <Text className="text-white text-xl font-karla_regular">
              Skip
            </Text>
          </TouchableOpacity>

          {/* Circle Button */}
          <TouchableOpacity className="w-10 h-10 rounded-full bg-[#0A2D41] flex items-center justify-center">
            <Image
              source={require("../../assets/images/arrowon.png")}
              className="w-5 h-5"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
