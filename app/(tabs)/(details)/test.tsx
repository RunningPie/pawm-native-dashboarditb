import { Text, View, FlatList, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { QuizCardVertical } from "~/app/components/ui/cards";
import { useRouter } from "expo-router";
import { SearchBar } from "~/app/components/ui/search-bar";
import { Header } from "~/app/components/ui/header";
import { tests, courses } from "~/app/data/mockdata";

const OngoingTest = () => {
  const router = useRouter();

  return (
    <LinearGradient colors={["#0A2D41", "#2E5C76"]} className="flex-1">
      <Header
        userName="Thalita Zahra Sutejo"
        userRole="STEI-K ITB"
        userImage={require("../../../assets/images/ProfilePic.png")}
      />
      <View className="p-6 mt-16 h-full">
        <View className="flex-row items-center mb-4">
          <Pressable onPress={() => router.back()}>
            <ArrowLeftIcon size={24} color="white" />
          </Pressable>
          <Text className="text-2xl font-karla-bold ml-2 text-white">
            Ongoing Test
          </Text>
        </View>
        <SearchBar
          containerStyle="relative mb-6"
          onChangeText={(text) => console.log(text)}
        />
        <FlatList
          data={tests}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const relatedCourse = courses.find(
              (course) => course.id === item.courseId
            );

            return (
              <View className="mb-4">
                <QuizCardVertical
                  image={relatedCourse.image}
                  id={item.id}
                  title={item.title}
                  subtitle={relatedCourse?.title || "Unknown Course"}
                  Icon={relatedCourse.icon}
                  length={item.length}
                  progress={relatedCourse.progress}
                />
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
};

export default OngoingTest;
