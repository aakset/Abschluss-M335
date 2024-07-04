import React, { useRef } from "react";
import { View, Text, Image, Pressable } from "react-native";
import ViewShot from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import EmojiImage from "../components/EmojiImage";
import CameraComponent from "../components/CameraComponent";

export default function Home() {
  const [emojiPage, setEmojiPage] = React.useState(true);
  const [selfiePage, setSelfiePage] = React.useState(false);
  const [resultPage, setResultPage] = React.useState(false);
  const [selectedEmoji, setSelectedEmoji] = React.useState(null);  
  const [selfieUri, setSelfieUri] = React.useState("");
  const viewShotRef = useRef();

  const emojiSources = {
    dropFace: require("../Emojis/dropFace.png"),
    lessSad: require("../Emojis/lessSad.png"),
    happy: require("../Emojis/happy.png"),
    happier: require("../Emojis/Happier.jpeg"),
  };

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

  const saveScreenshot = async () => {
    const uri = await viewShotRef.current.capture();
    const asset = await MediaLibrary.createAssetAsync(uri);
    await MediaLibrary.createAlbumAsync("Screenshots", asset, false);
    alert("Screenshot saved to your gallery!");
  };

  return (
    <View className="flex-1 items-center justify-center bg-[#00336E]">
      <Text className="text-white text-3xl font-bold text-center">SMILE</Text>
      {emojiPage && (
        <View>
          <View className="flex flex-row w-full justify-between items-center px-4 mt-10">
            <EmojiImage
              src={emojiSources.dropFace}
              onPress={() => completeStep1("dropFace")}
            />
            <EmojiImage
              src={emojiSources.lessSad}
              onPress={() => completeStep1("lessSad")}
            />
            <EmojiImage
              src={emojiSources.happy}
              onPress={() => completeStep1("happy")}
            />
            <EmojiImage
              src={emojiSources.happier}
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
        <ViewShot ref={viewShotRef} options={{ format: "jpg", quality: 0.9 }}>
          <View>
            
            <View className="flex justify-center items-center mb-2 mt-6">
              <EmojiImage src={emojiSources[selectedEmoji]} />
            </View>
            <View className="flex justify-center items-center mt-4">
              <Image source={{ uri: selfieUri }} className="w-80 h-80" />
            </View>
          </View>
        </ViewShot>
      )}
      {resultPage && (
        <Pressable
          onPress={saveScreenshot}
          className="mt-4 bg-blue-500 px-4 py-2 rounded"
        >
          <Text className="text-white text-xl">Save</Text>
        </Pressable>
      )}
    </View>
  );
}
