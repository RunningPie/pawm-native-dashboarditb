import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { CourseCardVertical } from "~/app/components/ui/cards";
import { useRouter } from "expo-router";
import {
  CertificateLight,
  RootLight,
  FlaskLight,
  AtomLight,
} from "~/assets/icons";
import { SearchBar } from "~/app/components/ui/search-bar";
import { Header } from "~/app/components/ui/header";

const PopularCourses = () => {
  const [courses] = useState([
    {
      id: "1",
      term: "Semester 1",
      test: "0",
      quiz: 2,
      title: "Berpikir Komputasional",
      icon: CertificateLight,
      image: require("../../../assets/images/computational-thinking.png"),
    },
    {
      id: "2",
      term: "Semester 1",
      test: "1",
      quiz: 2,
      title: "Matematika I",
      icon: RootLight,
      image: require("../../../assets/images/math.png"),
    },
    {
      id: "3",
      term: "Semester 1",
      test: "1",
      quiz: 2,
      title: "Kimia I",
      icon: FlaskLight,
      image: require("../../../assets/images/kimia.png"),
    },
    {
      id: "4",
      term: "Semester 1",
      test: "1",
      quiz: 2,
      title: "Fisika I",
      icon: AtomLight,
      image: require("../../../assets/images/fisika.png"),
    },
  ]);

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
            Popular Courses
          </Text>
        </View>
        <SearchBar
          containerStyle="relative mb-6"
          onChangeText={(text) => console.log(text)}
        />
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="mb-4">
              <CourseCardVertical
                image={item.image}
                title={item.title}
                subtitle={item.term}
                test={item.test}
                quiz={item.quiz}
                icon={item.icon}
                id={item.id}
              />
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
};

export default PopularCourses;
