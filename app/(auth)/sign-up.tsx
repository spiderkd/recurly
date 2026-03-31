import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 px-4 py-2 bg-primary rounded text-white"
      >
        Already have an account? Sign in
      </Link>
    </View>
  );
};

export default SignUp;
