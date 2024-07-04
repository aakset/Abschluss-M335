import { CameraView, Camera } from "expo-camera";
import { useState, useRef, useEffect } from "react"; 
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import MaIcon from "react-native-vector-icons/MaterialIcons";
import MacIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator'

export default function App({setSelfieUri, onDone}) {
  const [facing, setFacing] = useState("front");
  const cameraRef = useRef(); 
  const [hasCameraPermission, setHasCameraPermission] = useState()
  const [styleButton, setStyleButton] = useState("")

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync()
      setHasCameraPermission(cameraPermission.status === "granted")
    })();
  }, []);

  if (hasCameraPermission === undefined){
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePicture = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options)
    if (facing === "front") {
      newPhoto = await manipulateAsync(
        newPhoto.localUri || newPhoto.uri,
          [
              { rotate: 180 },
              { flip: FlipType.Vertical },
          ],
          { compress: 1, format: SaveFormat.PNG }
      );
  }

    setSelfieUri(newPhoto.uri + "")    
    onDone()
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View className="flex-1 flex-col justify-center">
      <View className="flex justify-center items-center h-2/3">
        <CameraView
          className="w-72 h-72"
          facing={facing}
          ref={cameraRef} 
        >
          <View>
            <Text>
              <TouchableOpacity
                className="pl-2 pt-2"
                onPress={toggleCameraFacing}
              >
                <MaIcon name="flip-camera-ios" color="white" size={48} />
              </TouchableOpacity>
            </Text>
          </View>
        </CameraView>
      </View>
      <Pressable
        className={"flex justify-center items-center "}
        onPress={takePicture}
        onPressIn={() => setStyleButton(" shadow shadow-white")}
        onPressOut={() => setStyleButton("")}

      ><MacIcon name="circle-outline" color="white" className={styleButton} size={100} />
      </Pressable>
    </View>
  );
}
