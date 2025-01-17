import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import {
  RootLight,
  FlaskLight,
  CertificateLight,
  AtomLight,
} from "../../assets/icons";
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import { BookOpenIcon } from "react-native-heroicons/solid";
import Progress from "../components/ui/progress";
import { Pressable, Animated, Easing } from "react-native";
import { Bars3Icon } from "react-native-heroicons/outline";
import { Link, useRouter } from "expo-router";
import { IconProps, IconContainer } from "../components/ui/icon-container";
import { Header } from "../components/ui/header";

import { getAllContent, signOut } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'

const CourseCard = ({
  image,
  id,
  title,
  subtitle,
  test,
  quiz,
  icon,
}: {
  image: any;
  id: string;
  title: string;
  subtitle?: any;
  test: any;
  quiz: number;
  icon: React.ComponentType<IconProps>;
}) => {
  return (
    <View className="bg-white rounded-lg shadow-lg">
      <Link
        href={{
          pathname: "/(tabs)/course/[id]",
          params: { id: id },
        }}
        asChild
      >
        <TouchableOpacity className="mr-4 px-4 bg-white rounded-xl overflow-visible w-44 shadow-lg">
          <Image source={image} className="h-28 w-full" resizeMode="cover" />
          <View style={[styles.iconContainer, styles.mlCard]}>
            <LinearGradient
              colors={["#0A2D41", "#2E5C76"]}
              style={styles.gradient}
            >
              <IconContainer Icon={icon} />
            </LinearGradient>
          </View>
          <View className="p-2 flex flex-col">
            <Text className="text-orange-500 shadow-lg text-base font-karla-semibold">
              {subtitle}
            </Text>
            <Text className="text-black text-xl font-karla-bold">{title}</Text>
            <View>
              <View className="flex flex-row items-center">
                <BookOpenIcon size={25} color="orange" className="mr-2" />
                <Text className="text-orange-500 shadow-lg ml-2 mr-4 text-base font-karla-semibold">
                  {`${test} Test`}
                </Text>
                <BookOpenIcon size={25} color="orange" className="mr-2" />
                <Text className="text-orange-500 shadow-lg ml-2 text-base font-karla-semibold">
                  {`${quiz} Quiz`}
                </Text>
              </View>
              <Progress value={30} className="w-full h-2 mt-2 bg-orange-200" />;
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const QuizCard = ({
  image,
  title,
  subtitle,
}: {
  image: any;
  title: string;
  subtitle?: any;
}) => {
  return (
    <View className="bg-primary-dark shadow-lg rounded-lg">
      <TouchableOpacity className="mr-4 px-4  rounded-xl overflow-hidden w-44 shadow-lg">
        <Image source={image} className="h-28 w-full" resizeMode="cover" />
        <View className="p-2">
          <Text className="text-white shadow-lg font-karla-regular text-base">
            {subtitle}
          </Text>
          <Text className="text-white text-lg font-karla-bold">{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const PAGE_WIDTH = Dimensions.get("window").width;

export default function Home() {
  const { data: courses, isLoading: isLoadingCourses, refetch: refetchCourses } = useAppwrite(getAllContent, "courses");
  // const { data: quizzes, refetchQuizzes } = useAppwrite(getAllContent, "quizzes");
  // const { data: tests, refetchTests } = useAppwrite(getAllContent, "tests");

  console.log("Courses: ", courses);
  // console.log("Quizzes: ", quizzes);
  // console.log("Tests: ", tests);

  const [popularCourses, setPopularCourses] = useState([]);

  const router = useRouter();

  // Function to map course title to icon
  const getIconForCourse = (title) => {
    switch (title) {
      case "Berpikir Komputasional":
        return CertificateLight;
      case "Matematika I":
        return RootLight;
      case "Kimia I":
        return FlaskLight;
      case "Fisika I":
        return AtomLight;
      default:
        return CertificateLight; // Default icon if course title doesn't match
    }
  };
  
  // Map the queried courses to match the frontend structure
  useEffect(() => {
    if (courses && !isLoadingCourses) {
      const mappedCourses = courses.map((course) => ({
        id: course.$id, // Use the $id from the database response
        term: course.semester, // Map the semester to 'term'
        test: String(course.num_of_tests), // Convert num_of_tests to string
        quiz: course.num_of_quizzes, // Use num_of_quizzes directly
        title: course.course_title, // Use course_title as the title
        icon: getIconForCourse(course.course_title), // You can map icons as needed
        image: { uri: course.cover_image }, // Use the cover image URL from the database
      }));
      setPopularCourses(mappedCourses);
    }
  }, [courses, isLoadingCourses]);

  const [showDrawer, setShowDrawer] = useState(false);
  const drawerAnimation = useRef(new Animated.Value(-300)).current;

  const [ongoingQuizzes] = useState([
    {
      id: "1",
      course: "Berpikir Komputasional",
      title: "Basic Theoretical Python",
      length: 10,
      image: require("../../assets/images/computational-thinking.png"),
    },
    {
      id: "2",
      course: "Matematika I",
      title: "Basic Theoretical Matrix",
      length: 20,
      image: require("../../assets/images/math.png"),
    },
    {
      id: "3",
      course: "Kimia I",
      title: "Basic Theoretical Chemistry",
      length: 20,
      image: require("../../assets/images/kimia.png"),
    },
    {
      id: "4",
      course: "Fisika I",
      title: "Basic Theoretical Physics",
      length: 20,
      image: require("../../assets/images/fisika.png"),
    },
  ]);

  const [ongoingTests] = useState([
    {
      id: "1",
      course: "Berpikir Komputasional",
      title: "Test 1",
      length: 10,
      image: require("../../assets/images/computational-thinking.png"),
    },
    {
      id: "2",
      course: "Matematika I",
      title: "Test 1",
      length: 20,
      image: require("../../assets/images/math.png"),
    },
    {
      id: "3",
      course: "Kimia I",
      title: "Test 1",
      length: 20,
      image: require("../../assets/images/kimia.png"),
    },
    {
      id: "4",
      course: "Fisika I",
      title: "Test 1",
      length: 20,
      image: require("../../assets/images/fisika.png"),
    },
  ]);

  useEffect(() => {
    Animated.timing(drawerAnimation, {
      toValue: showDrawer ? 0 : -300,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [showDrawer]);

  return (
    <View className="flex-1">
      {/* Hamburger Menu */}

      {/* Drawer Overlay */}
      {showDrawer && (
        // Fullscreen overlay that closes the drawer on press outside
        <Pressable
          onPress={() => setShowDrawer(false)}
          className="absolute top-0 left-0 w-full h-full z-20"
        >
          {/* Drawer container */}
          <Animated.View
            style={[
              {
                position: "absolute",
                top: 0,
                left: 0,
                width: "75%",
                height: "100%",
                transform: [{ translateX: drawerAnimation }],
              },
            ]}
            className=" shadow-xl z-30"
          >
            <LinearGradient
              colors={["#0A2D41", "#2E5C76"]}
              className="flex-col h-full p-6"
            >
              <Text className="text-lg text-white font-karla-bold mb-4">
                Recent Search
              </Text>
              {popularCourses.map((course) => (
                <Link
                  key={course.id}
                  href={`/(auth)/profile`}
                  onPress={() => setShowDrawer(false)}
                >
                  <Text className="text-base text-white font-karla-regular mb-2">
                    {course.title}
                  </Text>
                </Link>
              ))}
            </LinearGradient>
          </Animated.View>
        </Pressable>
      )}

      <ScrollView className="flex-1 bg-white ">
        {/* Header */}
        <View className="flex-col mb-12">
          <LinearGradient
            colors={["#0A2D41", "#2E5C76"]}
            className="flex-col py-20 mb-6"
            style={styles.header}
          >
            <Header
              showDrawer={showDrawer}
              setShowDrawer={setShowDrawer}
              userName="Thalita Zahra Sutejo"
              userRole="STEI-K ITB"
              userImage={require("../../assets/images/ProfilePic.png")}
            />
            <Text className="text-2xl font-karla-bold text-white px-6">
              Welcome Back, Thalita!
            </Text>
            <Text className="text-sm font-karla-regular text-white px-6 pr-32">
              Yuk, latihan dan lancarkan kompetensimu di Mata Kuliah Tahap
              Persiapan Bersama!
            </Text>
            <View className="flex-row items-center bg-gray-100 rounded-lg mx-4 px-4 py-2 shadow-2xl absolute top-52">
              <MagnifyingGlassIcon size={25} color="black" className="mr-2" />
              <TextInput
                placeholder="Search for..."
                placeholderTextColor="#000000"
                className="flex-1 ml-2 font-karla-regular text-base text-black"
              />
            </View>
            <Image
              source={require("../../assets/images/home-illustration.png")}
              className="w-full ml-36 h-40 mt-24 absolute"
              resizeMode="contain"
            />
          </LinearGradient>
        </View>
        <View className="px-6">
          <Text style={styles.text}>Studies History</Text>
          <View style={styles.iconRow}>
            {/* Root Icon */}
            <View style={styles.iconContainer}>
              <LinearGradient
                colors={["#0A2D41", "#2E5C76"]}
                style={styles.gradient}
              >
                <RootLight size={44} color="white" />
              </LinearGradient>
            </View>

            {/* Flask Icon */}
            <View style={[styles.iconContainer, styles.ml6]}>
              <LinearGradient
                colors={["#0A2D41", "#2E5C76"]}
                style={styles.gradient}
              >
                <FlaskLight size={44} color="white" />
              </LinearGradient>
            </View>

            <View style={[styles.iconContainer, styles.ml12]}>
              <LinearGradient
                colors={["#0A2D41", "#2E5C76"]}
                style={styles.gradient}
              >
                <CertificateLight size={44} color="white" />
              </LinearGradient>
            </View>

            {/* Atom Icon */}
            <View style={[styles.iconContainer, styles.ml20]}>
              <LinearGradient
                colors={["#0A2D41", "#2E5C76"]}
                style={styles.gradient}
              >
                <AtomLight size={44} color="white" />
              </LinearGradient>
            </View>
            <ChevronRightIcon size={24} color="black" style={styles.chevron} />
          </View>

          {/* Popular Courses Carousel */}
          <View className="flex-row justify-between mb-3">
            <Text className="text-xl font-karla-semibold text-black mb-2">
              Popular Courses
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/(details)/course")}
            >
              <View className="flex-row items-center mb-2">
                <Text className="text-xl font-karla-semibold justify-center text-primary">
                  See All
                </Text>
                <ChevronRightIcon size={24} color="#468FE5" className="mb-2" />
              </View>
            </TouchableOpacity>
          </View>
          <View id="carousel-popular">
            <Carousel
              width={PAGE_WIDTH / 1.7} // Adjust fraction for how many cards per view (e.g., /2, /3, etc.)
              height={200}
              data={popularCourses}
              renderItem={({ item }) => (
                <View className="mx-2">
                  <CourseCard
                    image={item.image}
                    id={item.id}
                    title={item.title}
                    subtitle={item.term}
                    test={item.test}
                    quiz={item.quiz}
                    icon={item.icon}
                  />
                </View>
              )}
              style={{ width: PAGE_WIDTH }}
              autoPlay={false}
              loop={true}
            />
          </View>

          {/* Ongoing Quiz Carousel */}
          <View className="flex-row justify-between mt-4 mb-3">
            <Text className="text-xl font-karla-semibold text-black mb-2">
              Ongoing Quiz
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/(details)/quiz")}
            >
              <View className="flex-row items-center mb-2">
                <Text className="text-xl font-karla-semibold justify-center text-primary">
                  See All
                </Text>
                <ChevronRightIcon size={24} color="#468FE5" className="mb-2" />
              </View>
            </TouchableOpacity>
          </View>
          <View id="carousel-ongoing">
            <Carousel
              width={PAGE_WIDTH / 1.7}
              height={200}
              data={ongoingQuizzes}
              renderItem={({ item }) => (
                <View className="mx-2">
                  <QuizCard
                    image={item.image}
                    title={item.title}
                    subtitle={item.course}
                  />
                </View>
              )}
              style={{ width: PAGE_WIDTH }}
              autoPlay={false}
              loop={true}
            />
          </View>

          <View className="flex-row justify-between mb-3">
            <Text className="text-xl font-karla-semibold text-black mb-2">
              Ongoing Tests
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/(details)/test")}
            >
              <View className="flex-row items-center mb-2">
                <Text className="text-xl font-karla-semibold justify-center text-primary">
                  See All
                </Text>
                <ChevronRightIcon size={24} color="#468FE5" className="mb-2" />
              </View>
            </TouchableOpacity>
          </View>
          <View id="carousel-tests">
            <Carousel
              width={PAGE_WIDTH / 1.7}
              height={200}
              data={ongoingTests}
              renderItem={({ item }) => (
                <View className="mx-2">
                  <QuizCard
                    image={item.image}
                    title={item.title}
                    subtitle={item.course}
                  />
                </View>
              )}
              style={{ width: PAGE_WIDTH }}
              autoPlay={false}
              loop={true}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: "Karla-SemiBold",
    color: "black",
    marginBottom: 8,
  },
  header: {
    paddingTop: 70,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 24,
  },
  iconContainer: {
    width: 40,
    height: 40,
    position: "absolute",
  },
  gradient: {
    width: "100%",
    height: "100%",
    paddingRight: 2,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  ml6: {
    marginLeft: 24,
  },
  ml12: {
    marginLeft: 48,
  },
  ml20: {
    marginLeft: 72,
  },
  mlCard: {
    marginLeft: 170,
    marginTop: 80,
  },
  chevron: {
    position: "absolute",
    marginLeft: 110,
  },
});
