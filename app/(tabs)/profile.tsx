import {
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  ArrowLeftIcon,
  PencilIcon,
  UserRound,
  FileText,
  StarIcon,
  ChevronRight,
  MailIcon,
  CalendarDays,
} from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import React from "react";

const Profile = () => {
  const router = useRouter();
  return (
    <ScrollView className="">
      <LinearGradient
        colors={["#0A2D41", "#2E5C76"]}
        className="flex-1 h-full z-0"
      >
        <View className="flex-row items-center mt-4 px-4 mb-20 z-0">
          <Text className="text-2xl font-karla-bold ml-2 text-white">
            Profile
          </Text>
        </View>
        <View className="absolute ml-44 z-10 mt-20">
          <Image
            source={require("../../assets/images/ProfilePic.png")} // Replace with your placeholder image
            className="w-32 h-32 absolute rounded-full z-10 "
          />
          <TouchableOpacity
            className="absolute top-[80px] left-24 bg-green-500 p-2 rounded-full z-10"
            onPress={() => console.log("Edit profile picture")}
          >
            <PencilIcon size={16} color="white" />
          </TouchableOpacity>
        </View>

        <View className="justify-start mt-4 px-4 bg-white h-full  rounded-t-[40px]">
          <View className="flex-row items-center justify-center">
            <Text className="mt-20 font-karla-bold text-3xl">
              Thalita Zahra Sutejo
            </Text>
          </View>
          <View className="px-4 mt-8">
            <TouchableOpacity
              onPress={() => router.push("/(auth)/profile")}
              className="flex-row justify-between items-center py-4 border-b border-gray-200"
            >
              <View className="flex-row items-center">
                <PencilIcon size={24} color="black" className="mr-4" />
                <Text className="text-lg font-karla-regular ml-3">
                  Edit Profile
                </Text>
              </View>
              <ChevronRight size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/history")}
              className="flex-row justify-between items-center py-4 border-b border-gray-200"
            >
              <View className="flex-row items-center">
                <FileText size={24} color="black" className="mr-4" />
                <Text className="text-lg font-karla-regular ml-3">
                  My Activity
                </Text>
              </View>
              <ChevronRight size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/level")}
              className="flex-row justify-between items-center py-4 border-b border-gray-200"
            >
              <View className="flex-row items-center">
                <StarIcon size={24} color="black" className="mr-4" />
                <Text className="text-lg font-karla-regular ml-3">
                  My Level
                </Text>
              </View>
              <ChevronRight size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View className="mt-4 text-left items-start">
            <Text className="text-xl font-karla-bold text-black mb-2">
              Your Profile
            </Text>
            <View className="bg-primary-dark py-4 w-full items-start px-4 rounded-lg mb-2">
              <Text className="text-white font-karla-regular text-center">
                @thalitazahras
              </Text>
            </View>
            <View className="bg-primary-dark flex-row py-4 w-full items-start px-4 rounded-lg mb-2">
              <CalendarDays size={20} color="white" className="mr-2" />
              <Text className="text-white ml-2 font-karla-regular text-center">
                16/02/2006
              </Text>
            </View>
            <View className="bg-primary-dark flex-row py-4 w-full items-start px-4 rounded-lg mb-2">
              <MailIcon size={20} color="white" className="mr-2" />
              <Text className="text-white ml-2 font-karla-regular text-center">
                thalitazhr1601@gmail.com
              </Text>
            </View>
            <View className="bg-primary-dark py-4 w-full items-start px-4 rounded-lg mb-2">
              <Text className="text-white font-karla-regular text-center">
                085891777037
              </Text>
            </View>
            <View className="bg-primary-dark py-4 w-full items-start px-4 rounded-lg mb-2">
              <Text className="text-white font-karla-regular text-center">
                Female
              </Text>
            </View>
            <Text className="text-xl font-karla-bold text-black mb-2 mt-2">
              Schools
            </Text>
            <View className="bg-primary-dark py-4 w-full items-start px-4 rounded-lg mb-2">
              <Text className="text-white font-karla-regular text-center">
                Institut Teknologi Bandung
              </Text>
            </View>
            <View className="bg-primary-dark py-4 w-full items-start px-4 rounded-lg mb-4">
              <Text className="text-white font-karla-regular text-center">
                STEI-K
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Profile;
