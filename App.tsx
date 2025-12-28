import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { View, Button, Text } from "react-native";
import { useState } from "react";

export default function App() {
  const [state, setState] = useState(20)
  const IncreaseValue = () => setState(prevState => prevState + 1)
  const DecreaseValue = () => setState(prevState => prevState - 1)
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column", // if column main justify content will be vertical, else for row
        justifyContent: "center", // for vertical
        alignItems: "center" // for horizontal
      }}>
     <Button title="Increase" onPress={IncreaseValue}/>
      <Text style = {{fontSize:40}}>
        {state}
      </Text>
     <Button title="Decrease" onPress={DecreaseValue}/>
    </View>
  );
}
