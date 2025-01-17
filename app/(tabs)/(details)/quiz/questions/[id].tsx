import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import { quizzes } from "../../../../data/mockdata";
import Progress from "~/app/components/ui/progress";
import { Header } from "~/app/components/ui/header";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import { TimerReset } from "lucide-react-native";
import { courses } from "~/app/data/mockdata";

import { handleUpdateScore } from "~/lib/appwrite";
import { useGlobalContext } from "~/context/GlobalProvider";

const QuizQuestionPage = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { user, isLoggedIn } = useGlobalContext();

  console.log("Current logged in user: ", user);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null); // For multiple-choice
  const [essayAnswer, setEssayAnswer] = useState(""); // For essay
  const [userAnswers, setUserAnswers] = useState<{
    [questionId: string]: number | string;
  }>({}); // Store all user answers
  const quizId = `${id.toString()}`;
  const quiz = quizzes.find((q) => q.id === quizId);

  // Find the current question
  const currentQuestion = quiz?.questions[currentQuestionIndex];

  // Handle going to the previous question
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      // Reset selected answer for the new question
      if (currentQuestion?.type === "multiple") {
        setSelectedAnswer(
          userAnswers[currentQuestion.id] !== undefined
            ? (userAnswers[currentQuestion.id] as number)
            : null
        );
      } else {
        setEssayAnswer(
          userAnswers[currentQuestion.id] !== undefined
            ? (userAnswers[currentQuestion.id] as string)
            : ""
        );
      }
    } else {
      router.back();
    }
  };

  const handleNext = useCallback(() => {
    if (!currentQuestion) return;

    // Save the current answer
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.id]:
        currentQuestion.type === "multiple" ? selectedAnswer : essayAnswer,
    }));

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Reset for the next question
      setSelectedAnswer(null);
      setEssayAnswer("");
    } else {
      // Handle quiz submission (last question)
      handleSubmit();
    }
  }, [currentQuestion, selectedAnswer, essayAnswer, currentQuestionIndex]);

  useEffect(() => {
    if (!currentQuestion) return;

    if (currentQuestion.type === "multiple") {
      setSelectedAnswer(
        userAnswers[currentQuestion.id] !== undefined
          ? (userAnswers[currentQuestion.id] as number)
          : null
      );
    } else {
      setEssayAnswer(
        userAnswers[currentQuestion.id] !== undefined
          ? (userAnswers[currentQuestion.id] as string)
          : ""
      );
    }
  }, [currentQuestion, userAnswers]);

  const handleSubmit = async () => {
    if (!quiz) return;
  
    // Calculate the score
    let score = 0;
  
    quiz.questions.forEach((question) => {
      const userAnswer = userAnswers[question.id];
  
      if (question.type === "multiple") {
        // Check if the selected answer matches the correct option index
        if (userAnswer === question.correctOptionIndex) {
          score += 1; // Add points for correct multiple-choice answers
        }
      } else if (question.type === "essay") {
        // Perform a strict comparison for essay answers
        if (
          typeof userAnswer === "string" &&
          userAnswer.trim() === question.answer.trim()
        ) {
          score += 1; // Add points for correct essay answers
        }
      }
    });
  
    // Optionally calculate a percentage score
    const totalQuestions = quiz.questions.length;
    const percentageScore = (score / totalQuestions) * 100;
  
    // Update related course progress (example logic, adjust as needed)
    const relatedCourse = courses.find((c) => c.id === quiz.courseId);
    if (relatedCourse) {
      relatedCourse.progress = Math.min(relatedCourse.progress + 10, 100);
    }

    try {
      // Frontend processing logic
      const userScore = percentageScore; // Assume you calculate the score here
      const documentId = id; // Retrieve the document ID from state or props
  
      console.log("User score calculated:", userScore);
  
      // Backend update logic
      await handleUpdateScore(documentId, userScore);
      console.log("Score successfully updated in backend!");
  
      // Optional: Show success message to user
      alert("Your score has been submitted successfully!");
    } catch (error) {
      console.error("Error during submission:", error.message);
      // Optional: Show error message to user
      alert("Failed to submit your score. Please try again.");
    }
  
    // Display the score
    Alert.alert(
      "Quiz Completed",
      `Your score is ${score}/${totalQuestions} (${percentageScore.toFixed(2)}%)`
    );
  
    // Navigate to the home page or another relevant page
    router.push("/(tabs)/home");
  };
  

  const renderQuestion = () => {
    if (!currentQuestion) {
      return <Text>No question found.</Text>;
    }

    return (
      <View className="p-4">
        <Text className="text-lg font-bold mb-4">
          {currentQuestion.question}
        </Text>

        {currentQuestion.type === "multiple" && (
          <View className="flex-row flex-wrap justify-between">
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                className={`p-3 rounded-lg bg-primary border  border-gray-400 w-full mb-2 ${
                  selectedAnswer === index
                    ? "bg-primary-dark border-blue-500"
                    : ""
                }`}
                onPress={() => setSelectedAnswer(index)}
              >
                <Text className="text-white font-karla-semibold">{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {currentQuestion.type === "essay" && (
          <TextInput
            className="border border-gray-400 p-3 rounded-lg"
            multiline
            value={essayAnswer}
            onChangeText={setEssayAnswer}
            placeholder="Enter your answer here..."
            onEndEditing={() => {
              if (currentQuestion) {
                setUserAnswers((prev) => ({
                  ...prev,
                  [currentQuestion.id]: essayAnswer,
                }));
              }
            }}
          />
        )}
      </View>
    );
  };

  if (!quiz) {
    return <Text>Quiz not found!</Text>;
  }

  const [drawerOpen, setDrawerOpen] = useState(false);
  const translateX = useSharedValue(-300);

  useEffect(() => {
    translateX.value = withTiming(drawerOpen ? 0 : -300, { duration: 300 });
  }, [drawerOpen]);

  const drawerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView className="flex-1 bg-white">
        <View className="bg-primary-dark w-full pt-40 bottom-6">
          <Header
            userName={user.username ? user.username : user.email}
            userRole={user.faculty ? user.faculty : "Student"}
            userImage={{uri: user.profile_picture}}
            style={"pt-12"}
          />
        </View>
        <View className="p-4">
          <View className="flex-row ml-3">
            <TouchableOpacity onPress={() => setDrawerOpen(!drawerOpen)}>
              <QuestionMarkCircleIcon size={25} color="black" />
            </TouchableOpacity>
            <Text className="text-lg font-karla-bold mb-4 ml-2">
              Question {currentQuestionIndex + 1} of {quiz.questions.length}
            </Text>
          </View>
          <View className="px-4">
            <Text className="font-karla-regular">{quiz.title}</Text>
            <Progress
              value={((currentQuestionIndex + 1) / quiz.questions.length) * 100}
              className="w-full h-2 mt-2 bg-orange-200"
            />
          </View>
          <View className="flex-row px-4 justify-end mt-2">
            <TimerReset size={18} color="black" className="mt-3" />
            <Text className="font-karla-regular ml-1 text-black">
              {quiz.length} minutes
            </Text>
          </View>
          {renderQuestion()}
        </View>
      </ScrollView>
      <View className="flex-row justify-between p-4 bg-white">
        <TouchableOpacity
          className="bg-primary-dark p-3 rounded-lg"
          onPress={handlePrevious}
        >
          <Text className="text-white">
            {currentQuestionIndex > 0 ? "Back" : "Cancel"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`bg-primary-dark p-3 rounded-lg ${
            (currentQuestion?.type === "multiple" && selectedAnswer === null) ||
            (currentQuestion?.type === "essay" && essayAnswer.trim() === "")
              ? "opacity-50"
              : ""
          }`}
          onPress={handleNext}
          disabled={
            (currentQuestion?.type === "multiple" && selectedAnswer === null) ||
            (currentQuestion?.type === "essay" && essayAnswer.trim() === "")
          }
        >
          <Text className="text-white">
            {currentQuestionIndex === quiz.questions.length - 1
              ? "Submit"
              : "Next"}
          </Text>
        </TouchableOpacity>
      </View>

      <Animated.View
        style={drawerStyle}
        className="absolute top-0 left-0 w-64 h-full bg-white p-4 shadow-xl z-50"
      >
        <View className="mt-16">
          <Text className="text-xl font-karla-bold mb-4">Quiz Progress</Text>
          <View className="flex-row flex-wrap">
            {quiz.questions.map((question, index) => {
              const isAnswered = userAnswers[question.id] !== undefined;
              return (
                <View
                  key={question.id}
                  className={`w-10 h-10 rounded m-2 justify-center items-center ${
                    isAnswered ? "bg-green-500" : "bg-primary-dark"
                  }`}
                >
                  <Text className="text-white text-md font-karla-bold">
                    {index + 1}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        <View className="mt-6">
          <TouchableOpacity
            onPress={() => setDrawerOpen(false)}
            className="bg-primary-dark p-3 rounded-lg"
          >
            <Text className="text-white text-center">Back</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </>
  );
};

export default QuizQuestionPage;
