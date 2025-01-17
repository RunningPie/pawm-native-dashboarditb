import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Header } from "~/app/components/ui/header";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeftIcon } from "lucide-react-native";
import { useRouter } from "expo-router";
import { courses } from "~/app/data/mockdata";
import Progress from "~/app/components/ui/progress";
import { TimerReset } from "lucide-react-native";

import { getAllContent, signOut } from '../../../../lib/appwrite'
import useAppwrite from '../../../../lib/useAppwrite'
import { useGlobalContext } from "../../../../context/GlobalProvider";
import { formatISODate } from "~/lib/utils";

export default function CourseDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { user, isLoggedIn } = useGlobalContext();

  console.log("Current logged in user: ", user);

  // Fetch data using useAppwrite
  const { data: courses, isLoading: isLoadingCourses, refetch: refetchCourses } = useAppwrite(getAllContent, "courses");
  const { data: quizzes, isLoading: isLoadingQuizzes, refetch: refetchQuizzes } = useAppwrite(getAllContent, "quizzes");
  const { data: tests, isLoading: isLoadingTests, refetch: refetchTests } = useAppwrite(getAllContent, "tests");

  console.log("Available tests: ", tests);

  // Add a loading guard
  if (isLoadingCourses || !courses) {
    console.log("Courses are still loading or undefined.");
    return <ActivityIndicator size="large" />;
  }

  const course = courses.find((c) => c.$id === id);

  if (!course) {
    console.warn(`No course found with id: ${id}`);
    return <Text>No course found.</Text>;
  }

  console.log("Current course: ", course);

  const quizzesForCourse = quizzes?.filter((q) => q.parent_course?.$id === course.$id) || [];
  console.log("Current Quizzes: ", quizzesForCourse);

  const testsForCourse = tests?.filter((t) => t.parent_course?.$id === course.$id) || [];
  console.log("Current tests: ", testsForCourse);

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
        userName={user.username ? user.username : user.email}
        userRole={user.faculty ? user.faculty : "Student"}
        userImage={{uri: user.profile_picture}}
      />
      <View className="flex-row items-center mt-24 px-4">
        <Pressable onPress={() => router.back()}>
          <ArrowLeftIcon size={24} color="white" />
        </Pressable>
        <Text className="text-2xl font-karla-bold ml-2 text-white">
          {course.course_title}
        </Text>
      </View>
      <View className="flex-1 mt-3 p-1 px-3">
        <View className="mt-2 rounded-t-2xl bg-white h-full w-full">
          <View className="absolute bg-black/40 rounded-t-2xl w-full py-16 z-10"></View>
          <Image
            source={{uri: course.cover_image}}
            className="w-full h-32 mb-4 rounded-t-2xl z-0"
            resizeMode="cover"
          />
          <Text className="absolute pt-6 pl-6 mt-5 text-lg font-karla-regular text-teal-400 z-20">
            {course.semester}
          </Text>
          <Text className="absolute pt-6 pl-6 mt-12 text-2xl font-karla-bold text-white z-20">
            {course.course_title}
          </Text>
          <View className="p-6">
            {quizzesForCourse && quizzesForCourse.length > 0 ? (
              quizzesForCourse.map((quizItem) => (
                <View
                  key={quizItem.$id}
                  className="mb-3 p-6 rounded-xl  bg-primary-dark"
                >
                  <Text className="text-lg text-white font-karla-bold mb-2">
                    {quizItem.test_title}
                  </Text>
                  <Text className="text-sm text-white">
                    Start: {formatISODate(quizItem.start_date)}
                  </Text>
                  <Text className="text-sm text-white mb-4">
                    End: {formatISODate(quizItem.end_date)}
                  </Text>
                  <Progress
                    value={quizItem.progress}
                    className="w-full h-2 bg-orange-500/20"
                  />
                  <Text className="text-orange-500 text-lg mt-1">{`${quizItem.progress}%`}</Text>
                  <View className="flex-row justify-end gap-2">
                    <TimerReset size={18} color="white" className="mt-2" />
                    <Text className="font-karla-regular text-white text-right ">
                      {quizItem.test_duration} minutes
                    </Text>
                  </View>
                  <TouchableOpacity
                    className="py-2 mt-4 px-4 items-center bg-teal-400 rounded-full"
                    onPress={() => handleStartQuiz(quizItem.$id)}
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
            {testsForCourse && testsForCourse.length > 0 ? (
              testsForCourse.map((testItem) => (
                <View
                  key={testItem.$id}
                  className="mb-3 p-6 rounded-xl bg-primary-dark"
                >
                  <Text className="text-lg text-white font-karla-bold mb-2">
                    {testItem.test_title}
                  </Text>
                  <Text className="text-sm text-white">
                    Start: {formatISODate(testItem.start_date)}
                  </Text>
                  <Text className="text-sm text-white mb-4">
                    End: {formatISODate(testItem.end_date)}
                  </Text>
                  <Progress
                    value={testItem.progress}
                    className="w-full h-2 bg-orange-500/20 mb-2"
                  />
                  <Text className="text-orange-500 text-lg mt-1">{`${course.progress}%`}</Text>
                  <View className="flex-row items-center justify-end">
                    <TimerReset size={18} color="white" className="mr-2" />
                    <Text className="font-karla-regular ml-2 text-white">
                      {testItem.test_duration} minutes
                    </Text>
                  </View>
                  <TouchableOpacity
                    className="py-2 mt-4 px-4 items-center bg-teal-400 rounded-full"
                    onPress={() => handleStartTest(testItem.$id)}
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
