import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  View,
  Button,
  Text,
  Modal,
  ImageBackground,
  TextInput,
} from "react-native";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import AppLogoImage from "./src/components/AppLogoImage";
import WelcomeText from "./src/components/WelcomeText";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");
  console.log("User type: ", text);
  return (
    <ImageBackground
      source={require("./assets/background.jpg")}
      style={{
        backgroundColor: "gold",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppLogoImage />
      <WelcomeText />
      <TextInput
        style={{
          height: 40,
          width: "80%",
          borderRadius: 4,
          borderWidth: 1,
          borderColor: "grey",
        }}
        placeholder="Input here"
        keyboardType="default"
        //secureTextEntry={true}
        editable={true}
        // multiline={true}
        //Control the text
        value={text}
        onChangeText={setText}
      ></TextInput>
      <Text>My name is: {text}</Text>
    </ImageBackground>
  );
}
