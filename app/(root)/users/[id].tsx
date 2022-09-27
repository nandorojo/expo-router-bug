import { Link, NativeStack } from "expo-router";
import { View } from "react-native";

export default function User({ route }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* This doesn't work. */}
      <NativeStack.Screen options={{ title: "User" }} />
      <Link href="/">{route.params?.id}</Link>
    </View>
  );
}
