import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 px-4 py-2 bg-primary rounded text-white"
      >
        Create an account
      </Link>
    </View>
  );
};

export default SignIn;
