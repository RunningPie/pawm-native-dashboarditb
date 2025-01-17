import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Bars3Icon } from "react-native-heroicons/outline";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

interface HeaderProps {
  showDrawer?: boolean;
  setShowDrawer?: (show: boolean) => void;
  userName: string;
  userRole: string;
  userImage?: any;
  drawerContent?: React.ReactNode;
  style?: any;
}

export const Header = ({
  showDrawer,
  setShowDrawer,
  userName,
  userRole,
  userImage,
  drawerContent,
  style,
}: HeaderProps) => {
  const translateX = useSharedValue(-300);
  const opacity = useSharedValue(0);

  React.useEffect(() => {
    translateX.value = withTiming(showDrawer ? 0 : -300, { duration: 300 });
    opacity.value = withTiming(showDrawer ? 1 : 0, { duration: 300 });
  }, [showDrawer]);

  const drawerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    pointerEvents: opacity.value === 0 ? "none" : "auto",
  }));
  return (
    <>
      <View className={`absolute w-full justify-between flex-row top-8 mt-2 left-4 z-10 ${style}`}>
        {setShowDrawer && (
          <Pressable
            className="mt-1"
            onPress={() => setShowDrawer(!showDrawer)}
          >
            <Bars3Icon size={28} color="#ffffff" />
          </Pressable>
        )}
        <Image
          source={require("../../../assets/images/IconMini.png")}
          className="h-9 w-9 mr-20"
          resizeMode="contain"
        />
        <View className="flex-row mr-12 items-end text-right">
          <View className="flex-col">
            <Text className="text-white font-karla-bold text-xl">
              {userName}
            </Text>
            <Text className="text-white text-right font-karla-regular">
              {userRole}
            </Text>
          </View>
          <Image
            source={
              userImage || require("../../../assets/images/ProfilePic.png")
            }
            className="h-11 w-11 mt-2 ml-2"
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Drawer Overlay */}
      <Animated.View
        style={overlayStyle}
        className="absolute top-0 left-0 w-full h-full bg-black/50 z-20"
      >
        <Pressable
          onPress={() => setShowDrawer?.(false)}
          className="w-full h-full"
        >
          <Animated.View
            style={drawerStyle}
            className="absolute top-0 left-0 w-3/4 h-full shadow-xl z-30"
          >
            <LinearGradient
              colors={["#0A2D41", "#2E5C76"]}
              className="flex-col h-full p-6 pt-16"
            >
              {drawerContent}
            </LinearGradient>
          </Animated.View>
        </Pressable>
      </Animated.View>
    </>
  );
};
