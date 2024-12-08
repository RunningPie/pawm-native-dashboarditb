import { ScrollView, Text, View, Image } from "react-native";
import { Link } from "expo-router";
// import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="h-full">
      {/* <LinearGradient
        colors={['#0A2D41', '#2E5C76']}
        style={{ flex: 1 }}
      > */}
        <ScrollView contentContainerStyle={{ height: '100%' }}>
          <View className="flex flex-row w-full justify-center items-center h-full px-4 py-10">
            <Image
              source={require('../assets/images/whitelogo.png')}
              style={{ width: 50, height: 50, marginHorizontal: 10, marginBottom: 10 }}
            />
            <Text className="text-4xl color-white font-pop_bold">ITB </Text>
            <Text className="text-4xl color-white font-pop_italic">Dashboard</Text>
          </View>
        </ScrollView>
      {/* </LinearGradient> */}
    </SafeAreaView>
  );
}
