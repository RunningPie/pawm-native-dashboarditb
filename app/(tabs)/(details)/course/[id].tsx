import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Header } from "~/app/components/ui/header";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeftIcon } from "lucide-react-native";
import { useRouter } from "expo-router";
import { courses } from "~/app/data/mockdata";
import Progress from "~/app/components/ui/progress";
import { TimerReset } from "lucide-react-native";

export default function CourseDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <View style={styles.container}>
        <Text>Course not found</Text>
      </View>
    );
  }

  const handleStartQuiz = (quizId: string) => {
    router.push(`/quiz/questions/${quizId}`);
  };

  // Handler to navigate to Test Page
  const handleStartTest = (testId: string) => {
    router.push(`/test/${testId}`);
  };

  return (
    <LinearGradient colors={["#0A2D41", "#2E5C76"]} className="flex-1">
      <Header
        userName="Thalita Zahra Sutejo"
        userRole="STEI-K ITB"
        userImage={require("../../../../assets/images/ProfilePic.png")}
      />
      <View className="flex-row items-center mt-24 px-4">
        <Pressable onPress={() => router.back()}>
          <ArrowLeftIcon size={24} color="white" />
        </Pressable>
        <Text className="text-2xl font-karla-bold ml-2 text-white">
          {course.title}
        </Text>
      </View>
      <View className="flex-1 mt-3 p-1 px-3">
        <View className="mt-2 rounded-t-2xl bg-white h-full w-full">
          <View className="absolute bg-black/40 rounded-t-2xl w-full py-16 z-10"></View>
          <Image
            source={course.image}
            className="w-full h-32 mb-4 rounded-t-2xl z-0"
            resizeMode="cover"
          />
          <Text className="absolute pt-6 pl-6 mt-5 text-lg font-karla-regular text-teal-400 z-20">
            {course.term}
          </Text>
          <Text className="absolute pt-6 pl-6 mt-12 text-2xl font-karla-bold text-white z-20">
            {course.title}
          </Text>
          <View className="p-6">
            {course.quizzes && course.quizzes.length > 0 ? (
              course.quizzes.map((quizItem) => (
                <View
                  key={quizItem.id}
                  className="mb-3 p-6 rounded-xl  bg-primary-dark"
                >
                  <Text className="text-lg text-white font-karla-bold mb-2">
                    {quizItem.title}
                  </Text>
                  <Text className="text-sm text-white">
                    Start: {quizItem.startDate}
                  </Text>
                  <Text className="text-sm text-white mb-4">
                    End: {quizItem.endDate}
                  </Text>
                  <Progress
                    value={course.progress}
                    className="w-full h-2 bg-orange-500/20"
                  />
                  <Text className="text-orange-500 text-lg mt-1">{`${course.progress}%`}</Text>
                  <View className="flex-row justify-end gap-2">
                    <TimerReset size={18} color="white" className="mt-2" />
                    <Text className="font-karla-regular text-white text-right ">
                      {quizItem.length} minutes
                    </Text>
                  </View>
                  <TouchableOpacity
                    className="py-2 mt-4 px-4 items-center bg-teal-400 rounded-full"
                    onPress={() => handleStartQuiz(quizItem.id)}
                  >
                    <Text className="text-black font-karla-semibold">
                      Start Quiz
                    </Text>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <Text className="text-sm">No Quizzes assigned.</Text>
            )}
            {course.tests && course.tests.length > 0 ? (
              course.tests.map((testItem) => (
                <View
                  key={testItem.id}
                  className="mb-3 p-6 rounded-xl bg-primary-dark"
                >
                  <Text className="text-lg text-white font-karla-bold mb-2">
                    {testItem.title}
                  </Text>
                  <Text className="text-sm text-white">
                    Start: {testItem.startDate}
                  </Text>
                  <Text className="text-sm text-white mb-4">
                    End: {testItem.endDate}
                  </Text>
                  <Progress
                    value={course.progress}
                    className="w-full h-2 bg-orange-500/20 mb-2"
                  />
                  <Text className="text-orange-500 text-lg mt-1">{`${course.progress}%`}</Text>
                  <View className="flex-row items-center justify-end">
                    <TimerReset size={18} color="white" className="mr-2" />
                    <Text className="font-karla-regular ml-2 text-white">
                      {testItem.length} minutes
                    </Text>
                  </View>
                  <TouchableOpacity
                    className="py-2 mt-4 px-4 items-center bg-teal-400 rounded-full"
                    onPress={() => handleStartTest(testItem.id)}
                  >
                    <Text className="text-black font-karla-semibold">
                      Start Test
                    </Text>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <Text className="text-sm">No Tests assigned.</Text>
            )}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 12, padding: 4, paddingHorizontal: 12 },
});
