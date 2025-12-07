import { StyleSheet, View, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Image
          source={require("./assets/splash-icon.png")}
          style={styles.image1}
        />
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={styles.image2}
          blurRadius={2}
        />
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
