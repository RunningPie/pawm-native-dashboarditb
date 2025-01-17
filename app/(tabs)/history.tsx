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
import { QuizCardVertical } from "../components/ui/cards";
import { LinearGradient } from "expo-linear-gradient";
import { courses, quizzes } from "../data/mockdata";
import React from "react";

const History = () => {
  const [ongoingQuizzes] = useState([
    {
      id: "1",
      course: "Berpikir Komputasional",
      title: "Basic Theoretical Python",
      length: 10,
      icon: CertificateLight,
      progress: 20,
      image: require("../../assets/images/computational-thinking.png"),
    },
    {
      id: "2",
      course: "Matematika I",
      title: "Basic Theoretical Matrix",
      length: 20,
      icon: RootLight,
      progress: 20,
      image: require("../../assets/images/math.png"),
    },
    {
      id: "3",
      course: "Kimia I",
      title: "Basic Theoretical Chemistry",
      length: 20,
      icon: FlaskLight,
      progress: 20,
      image: require("../../assets/images/kimia.png"),
    },
    {
      id: "4",
      course: "Fisika I",
      title: "Basic Theoretical Physics",
      length: 20,
      icon: AtomLight,
      progress: 20,
      image: require("../../assets/images/fisika.png"),
    },
  ]);

  return (
    <LinearGradient colors={["#0A2D41", "#2E5C76"]} className="flex-1">
      <View className="flex-row items-center mt-4 px-4 mb-20">
        <Text className="text-2xl font-karla-bold ml-2 text-white">
          History
        </Text>
      </View>

      <View className="absolute ml-44 z-10 mt-20">
        <Image
          source={require("../../assets/images/ProfilePic.png")}
          className="w-32 h-32 absolute rounded-full"
        />
      </View>

      <View className="flex-1 mt-4 bg-white rounded-t-[40px]">
        <FlatList
          data={quizzes}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            padding: 16,
            paddingTop: 80,
          }}
          renderItem={({ item }) => {
            const relatedCourse = courses.find(
              (course) => course.id === item.courseId
            );

            return (
              <View className="mb-4">
                <QuizCardVertical
                  image={item.image}
                  id={item.id}
                  title={item.title}
                  subtitle={relatedCourse?.title || "Unknown Course"}
                  Icon={relatedCourse.icon}
                  length={item.length}
                  progress={item.progress}
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

export default History;
