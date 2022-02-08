import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../containers/tabs/home/home";
import { primaryColor, secondaryColor } from "../styles/authStyles";

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerLeft: () => null,
                    headerTitle: "The New York Times",
                    headerTitleStyle: { color: secondaryColor },
                    headerStyle: { backgroundColor: primaryColor, shadowColor: 'transparent' },
                }}
            />

        </Stack.Navigator>
    )
}

