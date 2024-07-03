import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import EmojiImage from "../components/EmojiImage";
export default function Home() {
  const [emojiPage, setEmojiPage] = React.useState(true);
  const [selfiePage, setSelfiePage] = React.useState(false);
  const [resutlPage, seetResultPage] = React.useState(false);

  const completeStep1 = () => {
    setEmojiPage(false);
    setSelfiePage(true);
  };
  
  const completeStep2 = () => {
    setSelfiePage(false);
    seetResultPage(true);
  };

  return (
    <View className="flex-1 items-center justify-center bg-[#00336E]">
      <Text className="text-white text-3xl font-bold text-center">SMILE</Text>
      {emojiPage && (
        <View>
          <View className=" flex flex-row w-full justify-between items-center px-4 mt-10 ">
            <EmojiImage
              src={require("../Emojis/dropFace.png")}
              onPress={() => console.log("laugh")}
            />
            <EmojiImage
              src={require("../Emojis/lessSad.png")}
              onPress={() => console.log("laugh")}
            />
            <EmojiImage
              src={require("../Emojis/happy.png")}
              onPress={() => console.log("sad")}
            />
            <EmojiImage
              src={require("../Emojis/Happier.jpeg")}
              onPress={() => console.log("cry")}
            />
          </View>
        </View>
      )}
    </View>
  );
}
