import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { View, Button, Text, Modal, ImageBackground } from "react-native";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <ImageBackground
    source={require("./assets/background.jpg")}
    style={{
      backgroundColor: "gold",
      flex: 1,
      justifyContent:"center",
      alignItems:"center"
    }}
    >
      <View 
      style={{
        backgroundColor: "#fff",
        height: 200,
        width: 200,
        borderRadius: 15
      }} >

        <Text>Hello world!</Text>

      </View>

    </ImageBackground>
  );
}
