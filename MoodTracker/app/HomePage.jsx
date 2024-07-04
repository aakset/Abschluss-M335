import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import EmojiImage from "../components/EmojiImage";
import CameraComponent from "../components/CameraComponent";

export default function Home() {
  const [emojiPage, setEmojiPage] = React.useState(true);
  const [selfiePage, setSelfiePage] = React.useState(false);
  const [resultPage, setResultPage] = React.useState(false);
  const [selectedEmoji, setSelectedEmoji] = React.useState(null);  
  const [selfieUri, setSelfieUri] = React.useState("");


  const completeStep1 = (emoji) => {
    setSelectedEmoji(emoji);
    setEmojiPage(false);
    setSelfiePage(true);
  };

  const completeStep2 = (uri) => {
    setSelfieUri(uri);
    setSelfiePage(false);
    setResultPage(true);
  };

  return (
    <View className="flex-1 items-center justify-center bg-[#00336E]">
      <Text className="text-white text-3xl font-bold text-center">SMILE</Text>
      {emojiPage && (
        <View>
          <View className="flex flex-row w-full justify-between items-center px-4 mt-10">
            <EmojiImage
              src={require("../Emojis/dropFace.png")}
              onPress={() => completeStep1("dropFace")}
            />
            <EmojiImage
              src={require("../Emojis/lessSad.png")}
              onPress={() => completeStep1("lessSad")}
            />
            <EmojiImage
              src={require("../Emojis/happy.png")}
              onPress={() => completeStep1("happy")}
            />
            <EmojiImage
              src={require("../Emojis/Happier.jpeg")}
              onPress={() => completeStep1("happier")}
            />
          </View>
        </View>
      )}
      {selfiePage && <CameraComponent setSelfieUri={setSelfieUri} onDone={() => {
        setResultPage(true);
        setSelfiePage(false);
      }} />}
      {resultPage && (
        <View> 
          <Text className="text-white text-3xl">Result Page</Text>
          <Text className="text-white text-xl">
            Selected Emoji: {selectedEmoji}
          </Text>
          <Image src={selfieUri} className="w-80 h-80" />
        </View>
      )}
    </View>
  );
}
