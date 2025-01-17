import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BookOpenIcon } from "react-native-heroicons/solid";
import Progress from "./progress";
import { IconProps, IconContainer } from "./icon-container";
import { TimerReset } from "lucide-react-native";
import { useRouter, Link } from "expo-router";

export const CourseCardVertical = ({
  image,
  title,
  subtitle,
  test,
  quiz,
  icon: Icon,
  id,
  progress,
}: {
  image: any;
  title: string;
  subtitle?: any;
  test?: any;
  quiz?: number;
  icon: React.ComponentType<IconProps>;
  id: string;
  progress: number;
}) => {
  const router = useRouter();
  return (
    <Link
      href={{
        pathname: "/(tabs)/(details)/course/[id]",
        params: { id: id },
      }}
      asChild
    >
      <TouchableOpacity className="bg-white rounded-lg shadow-lg flex-row">
        <View className="w-32 h-full">
          <Image
            source={image}
            className="h-40 w-full rounded-l-lg"
            resizeMode="cover"
          />
          <View className="border-radius-full absolute bottom-8 left-[275%]">
            <LinearGradient
              colors={["#0A2D41", "#2E5C76"]}
              className="w-10 h-10 rounded-full justify-center items-center border-radius-full"
              style={styles.verticalgradient}
            >
              {Icon && <Icon size={20} color="white" />}
            </LinearGradient>
          </View>
        </View>
        <View className="p-4 flex-1">
          <Text className="text-orange-500 text-base font-karla-semibold">
            {subtitle}
          </Text>
          <Text className="text-black text-xl font-karla-bold">{title}</Text>
          <View className="mt-2">
            <View className="flex flex-row items-center mb-1">
              <BookOpenIcon size={20} color="orange" />
              <Text className="text-orange-500 ml-1 text-sm font-karla-semibold">
                {`${test} Test`}
              </Text>
              <BookOpenIcon size={20} color="orange" className="ml-2" />
              <Text className="text-orange-500 ml-1 text-sm font-karla-semibold">
                {`${quiz} Quiz`}
              </Text>
            </View>
            <Progress value={progress} className="w-2/3 h-2 bg-orange-200" />
            <Text className="text-orange-500 text-xs mt-1">{progress}%</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export const QuizCardVertical = ({
  image,
  id,
  title,
  subtitle,
  length,
  Icon,
  progress,
}: {
  image: any;
  id: string;
  title: string;
  length: any;
  subtitle?: any;
  Icon: React.ComponentType<IconProps>;
  progress: number;
}) => {
  return (
    <Link
      href={{
        pathname: "/(tabs)/(details)/quiz/[id]",
        params: { id: id },
      }}
      asChild
    >
      <TouchableOpacity className="bg-white rounded-lg shadow-lg flex-row">
        <View className="w-32 h-full">
          <Image
            source={image}
            className="h-40 w-full rounded-l-lg"
            resizeMode="cover"
          />
          <View className="border-radius-full absolute bottom-8 left-[275%]">
            <LinearGradient
              colors={["#0A2D41", "#2E5C76"]}
              className="w-10 h-10 rounded-full justify-center items-center border-radius-full"
              style={styles.verticalgradient}
            >
              {Icon && <Icon size={20} color="white" />}
            </LinearGradient>
          </View>
        </View>
        <View className="p-4 flex-1">
          <Text className="text-orange-500 text-base font-karla-semibold">
            {subtitle}
          </Text>
          <Text className="text-black text-xl font-karla-bold">{title}</Text>
          <View className="mt-2">
            <Progress value={progress} className="w-2/3 h-2 bg-orange-200" />
            <Text className="text-orange-500 text-xs mt-1">{`${progress}%`}</Text>
          </View>
          <View className="flex-row gap-2 mt-2">
            <TimerReset size={18} color="black" className="mt-3" />
            <Text className="text-black font-karla-medium ">
              {length} Minutes
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export const CourseCard = ({
  image,
  title,
  subtitle,
  test,
  quiz,
  icon,
}: {
  image: any;
  title: string;
  subtitle?: any;
  test?: any;
  quiz?: number;
  icon: React.ComponentType<IconProps>;
}) => {
  return (
    <View className="bg-white rounded-lg shadow-lg">
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
              <BookOpenIcon size={25} color="black" className="mr-2" />
              <Text className="text-orange-500 shadow-lg ml-2 mr-4 text-base font-karla-semibold">
                {`${test} Test`}
              </Text>
              <BookOpenIcon size={25} color="black" className="mr-2" />
              <Text className="text-orange-500 shadow-lg ml-2 text-base font-karla-semibold">
                {`${quiz} Quiz`}
              </Text>
            </View>
            <Progress value={30} className="w-full h-2 mt-2 bg-orange-200" />;
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const QuizCard = ({
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
          <Text className="text-orange-500 shadow-lg text-base">
            {subtitle}
          </Text>
          <Text className="text-white text-lg font-karla-bold">{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CourseCard;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: "Karla-SemiBold",
    color: "black",
    marginBottom: 8,
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
  verticalgradient: {
    width: "150%",
    height: "150%",
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
