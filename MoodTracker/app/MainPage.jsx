import React, { useContext } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { ImageContext } from "./ImageContext";

export default function MainPage() {
  const { images } = useContext(ImageContext);

  return (
    <View className="flex-1 items-center justify-center bg-[#00336E]">
      <Text className="text-white text-3xl font-bold mt-36 mb-4">Smiles and Cries</Text>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        {images.map((uri, index) => (
          <Image
            key={index}
            source={{ uri }}
            style={{ width: 300, height: 550, margin: 10 }}
          />
        ))}
      </ScrollView>
    </View>
  );
}
