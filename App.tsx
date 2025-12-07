import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  Pressable,
} from "react-native";

export default function App() {
  const onButtonPress = () => Alert.alert("Button pressed!");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={onButtonPress}>
          <Image
            source={require("./assets/splash-icon.png")}
            style={styles.image1}
          />
        </TouchableOpacity>

        <Pressable onPress={onButtonPress}>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={styles.image2}
            blurRadius={2}
          />
        </Pressable>

        <Button title="Press on me" onPress={onButtonPress} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image1: {
    width: 200,
    height: 200,
  },
  image2: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
