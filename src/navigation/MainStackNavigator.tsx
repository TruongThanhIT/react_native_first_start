import { createStackNavigator } from "@react-navigation/stack";
import TomatoScreen from "../components/screens/TomatoScreen";
import GoldScreen from "../components/screens/GoldScreen";
import PurpleScreen from "../components/screens/PurpleScreen";

const Stack = createStackNavigator()

function MainStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TomatoScreen" component={TomatoScreen} />
            <Stack.Screen name="GoldScreen" component={GoldScreen} />
            <Stack.Screen name="PurpleScreen" component={PurpleScreen} />
        </Stack.Navigator>
    )
}

export default MainStackNavigator