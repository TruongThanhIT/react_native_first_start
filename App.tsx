import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor:"red",
          flex: 2,
        }}
      ></View>
      <View
        style={{
          backgroundColor:"green",
          flex: 1,
        }}
      ></View>
      <View
        style={{
          backgroundColor:"blue",
          flex: 1,
        }}
      ></View>
    </View>
  );
}
