import React from "react";
import { View, Text } from "react-native";

export default function About() {
  return (
    <View className="flex-1 items-center justify-center bg-[#00336E]">

      <Text className="text-white text-3xl mt-5 font-bold text-center">About Aakash</Text>

      <Text className="text-white text-lg w-5/6 text-center mt-5 p-3">
        Aakash is a dedicated student working in the IT field and also a
        passionate musician. With a keen interest in technology and music,
        Aakash balances both pursuits, continuously learning and growing in each
        domain. In IT, Aakash is involved in various projects, honing technical
        skills and problem-solving abilities. As a musician, Aakash expresses
        creativity through music, performing and possibly composing original
        pieces. This dual expertise reflects a unique blend of analytical and
        creative talents, making Aakash a versatile and dynamic individual.
      </Text>
    </View>
  );
}
