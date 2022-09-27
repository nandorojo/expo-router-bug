import { Link, NativeStack } from "expo-router";
import { View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* This works */}
      <NativeStack.Screen options={{ title: "Home" }} />
      <Link href="/users/fernando">Open User</Link>
    </View>
  );
}
