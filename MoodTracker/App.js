import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./components/TabBar";
import { ImageProvider } from "./app/ImageContext";

export default function App() {
  return (
    <ImageProvider>
      <NavigationContainer>
        <TabBar />
        <StatusBar style="auto" />
      </NavigationContainer>
    </ImageProvider>
  );
}
