import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Native wind!
      </Text>
      <Link
        href="/onboarding"
        className="mt-4 px-4 py-2 bg-primary rounded text-white"
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 px-4 py-2 bg-primary rounded text-white"
      >
        Go to Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 px-4 py-2 bg-primary rounded text-white"
      >
        Go to Sign Up
      </Link>

      <Link
        href="/(tabs)/subscriptions/spotify"
        className="mt-4 px-4 py-2 bg-primary rounded text-white"
      >
        Go to Subscriptions
      </Link>
      <Link
        href={{
          pathname: "/(tabs)/subscriptions/[id]",
          params: { id: "spotify" },
        }}
        className="mt-4 px-4 py-2 bg-primary rounded text-white"
      >
        Go to Subscription Details
      </Link> 
    </View>
  );
}
