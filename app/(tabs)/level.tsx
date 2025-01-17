import {
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { useState } from "react";
import {
  CertificateLight,
  RootLight,
  FlaskLight,
  AtomLight,
} from "~/assets/icons";
import { Link } from "expo-router";
import { QuizCardVertical } from "../components/ui/cards";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { courses } from "../data/mockdata";

const Level = () => {
  const mathCourseProgress =
    courses.find((course) => course.title === "Matematika I")?.progress || 0;

  const compCourseProgress =
    courses.find((course) => course.title === "Berpikir Komputasional")
      ?.progress || 0;

  const [topQuizzes] = useState([
    {
      id: "1",
      course: "Matematika I",
      title: "Basic Theoretical Matrix",
      length: 10,
      progress: mathCourseProgress,
      icon: CertificateLight,
      image: require("../../assets/images/math.png"),
    },
  ]);

  const [topTests] = useState([
    {
      id: "1",
      course: "Berpikir Komputasional",
      title: "Test I Berpikir Komputasional",
      length: 10,
      icon: CertificateLight,
      progress: compCourseProgress,
      image: require("../../assets/images/computational-thinking.png"),
    },
  ]);

  const userLevel = 5;
  const levelProgress = 50;
  const renderHeader = () => (
    <>
      <View className="flex-row items-center mt-4 px-4 mb-20 z-0">
        <Text className="text-2xl font-karla-bold ml-2 text-white">
          History
        </Text>
      </View>
      <View className="absolute ml-44 z-10 mt-20">
        <Image
          source={require("../../assets/images/ProfilePic.png")} // Replace with your placeholder image
          className="w-32 h-32 absolute rounded-full z-10 "
        />
      </View>

      <View className="justify-start mt-4 px-4 bg-white   rounded-t-[40px]">
        <View className="flex-row items-center justify-center">
          <Text className="mt-20 font-karla-bold text-3xl">
            Thalita Zahra Sutejo
          </Text>
        </View>

        <View className="mt-4 text-left items-start">
          <Text className="text-3xl font-karla-bold text-black mb-2">
            My Level
          </Text>
        </View>
        <View className="flex-col items-center justify-center">
          <Text className="mb-2 font-karla-bold text-xl">Level 2</Text>
          <CircularProgress
            value={levelProgress}
            radius={60}
            activeStrokeColor="#10B981" // Teal-500
            inActiveStrokeColor="#374151" // Gray-700
            activeStrokeWidth={10}
            inActiveStrokeWidth={10}
            maxValue={100}
            title={`Level ${userLevel}`}
            titleColor="#ffffff"
            titleStyle={{
              fontWeight: "bold",
              fontSize: 1,
              fontFamily: "Karla-Bold",
            }}
            valueSuffix={""}
          />
          <Text className="mt-2 font-karla-bold text-xl">4 of 8 Task</Text>
        </View>
      </View>
    </>
  );

  const renderFooter = () => (
    <Link
      href={{
        pathname: "/home",
      }}
      asChild
    >
      <View className="bg-white w-full px-6">
        <TouchableOpacity className="py-2 mt-4 px-4 items-center bg-primary rounded-full mb-8">
          <Text className="text-white font-karla-semibold">Do More Quiz</Text>
        </TouchableOpacity>
      </View>
    </Link>
  );
  return (
    <LinearGradient
      colors={["#0A2D41", "#2E5C76"]}
      className="flex-1 h-full z-0"
    >
      <FlatList
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        data={[]}
        renderItem={null}
        ListEmptyComponent={
          <View className="bg-white p-6">
            <View>
              <Text className="font-karla-bold text-xl py-2">Top Quiz</Text>

              <FlatList
                data={topQuizzes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View className="mb-4">
                    <QuizCardVertical
                      image={item.image}
                      id={item.id}
                      title={item.title}
                      subtitle={item.course}
                      Icon={item.icon}
                      length={item.length}
                      progress={item.progress}
                    />
                  </View>
                )}
                showsVerticalScrollIndicator={false}
              />
              <Text className="font-karla-bold text-xl py-2">Top Test</Text>
              <FlatList
                data={topTests}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View className="mb-4">
                    <QuizCardVertical
                      image={item.image}
                      id={item.id}
                      title={item.title}
                      subtitle={item.course}
                      Icon={item.icon}
                      length={item.length}
                      progress={item.progress}
                    />
                  </View>
                )}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        }
      />
    </LinearGradient>
  );
};

export default Level;
