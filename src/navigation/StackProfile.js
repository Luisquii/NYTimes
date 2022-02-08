import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Profile from "../containers/tabs/profile/profile"


const Stack = createStackNavigator()

export default () => {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
        >
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>

    )
}
