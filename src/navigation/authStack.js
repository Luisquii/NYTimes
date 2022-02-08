import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../containers/auth/login';
import SignUp from '../containers/auth/signup';

const AuthStack = ({
    params,
}) => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: false,
                headerShown: false
            }}
            initialRouteName="Login"
        >
            <Stack.Screen
                name="Login"
                component={Login}
            />

            <Stack.Screen
                name="SignUp"
                component={SignUp}
            />
        </Stack.Navigator>
    )
};

export default AuthStack;
