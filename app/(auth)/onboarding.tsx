import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const onboardingSteps = [
  {
    title: "Find your",
    highlight: "Destination",
    description:
      "Explore resources, navigate your academic journey, and achieve your goals with ITB Dashboard",
    image: require("../../assets/images/photo1.png"),
  },
  {
    title: "Start your",
    highlight: "Journey",
    description:
      "Navigate your path, access resources, and achieve success with ITB Dashboard",
    image: require("../../assets/images/photo2.png"),
  },
  {
    title: "Begin to",
    highlight: "Explore and Learn",
    description:
      "Start your academic journey, access essential tools, and achieve your goals with ease using ITB Dashboard",
    image: require("../../assets/images/photo3.png"),
  },
];

const Onboarding = ({ onFinish }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onFinish();
    }
  };

  const handleSkip = () => {
    onFinish();
  };

  const { title, highlight, description, image } = onboardingSteps[currentStep];

  return (
    <LinearGradient colors={["#0A2D41", "#2E5C76"]} className="flex-1">
      <SafeAreaView className="flex-1">
        {/* Header */}
        <View className="items-center mt-10]">
          <Text className="text-white text-2xl font-karla-regular text-center">
            Welcome Aboard, <Text className="font-karla-bold">Students!</Text>
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
            source={image}
            className="w-[700px] h-[525px]"
            resizeMode="contain"
          />
        </View>

        {/* Content */}
        <View className="items-center mb-8 px-4">
          <View className="flex flex-row items-center justify-center">
            <Text className="flex text-white text-2xl gap-8 font-karla-bold text-center">
              {title}
            </Text>
            <Text className="text-[#4beaff] text-2xl font-karla font-bold mx-2">
              {highlight}
            </Text>
          </View>

          <Text className="text-white text-base font-karla text-center mt-2 italic">
            {description}
          </Text>
        </View>

        {/* Pagination Indicators */}
        <View className="flex-row justify-center mb-4">
          {onboardingSteps.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setCurrentStep(index)}
              className="mx-1"
            >
              <View
                className={`w-2.5 h-2.5 rounded-full ${
                  currentStep === index ? "bg-white" : "bg-white/30"
                }`}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Navigation */}
        <View className="flex-row justify-between items-center px-6 mb-6">
          {currentStep !== onboardingSteps.length - 1 && (
            <TouchableOpacity onPress={handleSkip}>
              <Text className="text-white text-lg font-karla-regular pl-6">
                Skip
              </Text>
            </TouchableOpacity>
          )}

          {currentStep !== onboardingSteps.length - 1 ? (
            <TouchableOpacity
              onPress={handleNext}
              className="w-10 h-10 rounded-full bg-[#0A2D41] items-center justify-center"
            >
              <Image
                source={require("../../assets/images/arrowon.png")}
                className="w-5 h-5"
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={handleNext}
              className="w-full py-2 items-center rounded-lg bg-primary"
            >
              <Text className="text-white text-center text-lg font-karla-bold">
                Get Started
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Onboarding;
