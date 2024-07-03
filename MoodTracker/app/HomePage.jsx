import React from "react";
import { View, Text, Image } from "react-native";
import EmojiImage from "../components/EmojiImage";
export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-[#00336E]">
      <Text className="text-white text-3xl font-bold text-center">SMILE</Text>
      <View className=" flex flex-row w-full justify-between items-center px-4 mt-10 ">
        <EmojiImage src={require("../Emojis/dropFace.png")} onPress={() => console.log("laugh")} />
        <EmojiImage src={require("../Emojis/lessSad.png")} onPress={() => console.log("laugh")} />
        <EmojiImage src={require("../Emojis/happy.png")} onPress={() => console.log("sad")} />
        <EmojiImage src={require("../Emojis/Happier.jpeg")} onPress={() => console.log("cry")} />
      </View>
    </View>
  );
}
