import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import { primaryColor, secondaryColor } from "../styles/authStyles";
import ShopList from "../containers/tabs/shoplist/shopList";

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
        >
            <Stack.Screen
                name="ShopList"
                component={ShopList}
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

