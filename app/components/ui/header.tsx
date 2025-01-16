import { View, Text, Image, Pressable } from "react-native";
import { Bars3Icon } from "react-native-heroicons/outline";

interface HeaderProps {
  showDrawer?: boolean;
  setShowDrawer?: (show: boolean) => void;
  userName: string;
  userRole: string;
  userImage?: any;
}

export const Header = ({
  showDrawer,
  setShowDrawer,
  userName,
  userRole,
  userImage,
}: HeaderProps) => {
  return (
    <View className="absolute w-full justify-between flex-row top-8 left-4 z-10">
      <Pressable
        className="mt-1"
        onPress={() => setShowDrawer(!showDrawer)}
      >
        <Bars3Icon size={28} color="#ffffff" />
      </Pressable>
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
          source={userImage || require("../../../assets/images/ProfilePic.png")}
          className="h-11 w-11 mt-2 ml-2"
          resizeMode="contain"
        />
      </View>
    </View>
  );
};