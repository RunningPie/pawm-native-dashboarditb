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
import { courses } from "~/app/data/mockdata";

const PopularCourses = () => {

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
          <Pressable onPress={() => router.push("/home")}>
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
                progress={item.progress}
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
