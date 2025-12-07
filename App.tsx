import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Mia Hello RN world!</Text>
      <Text style={styles.bodyText} numberOfLines={3}>
        Replace the deprecated SafeAreaView:
        <Text
          style={styles.linkStyle}
          onPress={() => Alert.alert("Text pressed")}
        >
          Press here
        </Text>
        Replace instances of the SafeAreaView from react-native with the one
        from react-native-safe-area-context. You can typically use it in the
        same way, wrapping your content within it.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    textAlign: "center",
    color: "blue",
    fontSize: 50,
    fontWeight: "bold",
  },
  bodyText: {
    fontSize: 20,
    fontWeight: "ultralight",
    textAlign: "justify",
  },
  linkStyle: { color: "red", textDecorationLine: "underline" },
});
