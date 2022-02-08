import React from "react"
import StackHome from "./StackHome";
import StackProfile from "./StackProfile";
import { Icon } from 'react-native-elements';
import { primaryColor, secondaryColor } from "../styles/authStyles"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, ViewBase } from "react-native";
import StackShopList from "./StackShopList";
const Tab = createBottomTabNavigator();

export default () => {

    return (
        <Tab.Navigator
            inactiveColor="gray"
            tabBarOptions={{
                activeTintColor: secondaryColor,
            }}
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: primaryColor
                },
                tabBarActiveBackgroundColor: primaryColor,
                tabBarInactiveBackgroundColor: primaryColor,
            }}
            initialRouteName='StackHome'
        >
            <Tab.Screen
                name="StackHome"
                component={StackHome}
                options={{
                    tabBarLabel: "Top Sellers",
                    tabBarIcon: ({ color }) => <Icon name='book' size={30} color={color} />,
                    header: () => null
                }}
            />

            <Tab.Screen
                name="StackShopList"
                component={StackShopList}
                options={{
                    tabBarLabel: "Shop List",
                    tabBarIcon: ({ color }) => <Icon name='shopping-cart' size={30} color={color} />,
                    header: () => null
                }}
            />

            <Tab.Screen
                name="StackProfile"
                component={StackProfile}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color }) => <Icon name='directions-run' size={30} color={color} />,
                    header: () => null
                }}
            />
        </Tab.Navigator>
    )
}