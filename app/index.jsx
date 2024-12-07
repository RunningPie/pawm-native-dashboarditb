import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-smregular">Edit app/index.jsx to edit this screen.</Text>
      <Link href="/login" style={{ color: "blue" }}>Go to Login</Link>
      <Link href="/detail/pengkom" style={{ color: "blue" }}>Go to Detail Pengkom</Link>
      <Link href="/quiz/pengkom" style={{ color: "blue" }}>Go to Quiz Pengkom</Link>
    </View>
  );
}
