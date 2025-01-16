import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronLeftIcon,
  PencilIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import { CalendarDaysIcon, EnvelopeIcon } from "react-native-heroicons/outline";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import { Keyboard } from "react-native";
import DateTimePickerModal from "@react-native-community/datetimepicker";
import { format } from "date-fns";


const ProfileCreation = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("Gender");
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const router = useRouter();

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

  const handleContinue = () => {
    // Handle the continue action, e.g., navigate to the next screen
    console.log("Continue button pressed");
    router.replace("/(tabs)/home");
  };

  const onChangeDob = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDob(selectedDate);
    }
  };

  return (
    <LinearGradient colors={["#0A2D41", "#2E5C76"]} className="flex-1">
      <SafeAreaView className="flex-1">
        {/* Header */}
        <View className="flex-row items-center px-4 pt-4">
          <TouchableOpacity onPress={() => router.back()} className="mr-4">
            <ChevronLeftIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="text-white font-karla-bold text-2xl">
            Fill Your Profile
          </Text>
        </View>

        {/* Profile Picture Placeholder */}
        {!isKeyboardVisible && (
          <View className="items-center mt-8">
            <View className="relative rounded-full w-32 h-32 bg-blue-400 justify-center items-center">
              {/* Placeholder for profile image */}
              <Image
                source={require("../../assets/images/profile_placeholder.png")} // Replace with your placeholder image
                className="w-full h-full rounded-full"
              />
              <TouchableOpacity
                className="absolute bottom-0 right-0 bg-green-500 p-2 rounded-full"
                onPress={() => console.log("Edit profile picture")}
              >
                <PencilIcon size={16} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Input Fields */}
        <View className="mt-8 px-4 gap-4">
          <TextInput
            value={fullName}
            onChangeText={setFullName}
            placeholder="Full Name"
            placeholderTextColor="#ccc"
            className="bg-gray-800 px-4 py-3 rounded-lg text-white"
          />
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            placeholderTextColor="#ccc"
            className="bg-gray-800 px-4 py-3 rounded-lg text-white"
          />
          <View className="flex-row items-center bg-gray-800 px-4 py-3 rounded-lg">
            <CalendarDaysIcon size={20} color="white" className="mr-2" />
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              className="flex-1"
            >
              <Text className="text-white ml-2">
                {dob ? format(dob, "dd/MM/yyyy") : "Select Date of Birth"}
              </Text>
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePickerModal
                value={dob}
                mode="date"
                display="default"
                onChange={onChangeDob}
              />
            )}
          </View>
          <View className="flex-row items-center bg-gray-800 px-4 py-1 rounded-lg">
            <EnvelopeIcon size={20} color="white" className="mr-2" />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#ccc"
              keyboardType="email-address"
              autoCapitalize="none"
              className="flex-1 text-white"
            />
          </View>
          <View className="flex-row items-center bg-gray-800 px-4 py-1 rounded-lg">
            {/* Replace with an appropriate country flag or dropdown */}
            <Text className="text-white mr-2">(+62)</Text>
            <TextInput
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="Phone Number"
              placeholderTextColor="#ccc"
              keyboardType="phone-pad"
              className="flex-1 text-white"
            />
          </View>
          <View
            className={`bg-gray-800 rounded-lg ${Platform.OS === "ios" ? "py-0" : "py-0"}`}
          >
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
              style={{ color: "#ccc" }}
              placeholder="Gender"
              dropdownIconColor={"#ccc"}
              mode="dropdown"
            >
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
          </View>
        </View>

        {/* Continue Button */}
        <View className="px-4 mt-8">
          <TouchableOpacity
            onPress={handleContinue}
            className="bg-primary py-3 rounded-lg flex-row justify-center items-center"
          >
            <Text className="text-center text-white text-lg font-karla-bold mr-2">
              Continue
            </Text>
            <ChevronRightIcon size={20} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ProfileCreation;
