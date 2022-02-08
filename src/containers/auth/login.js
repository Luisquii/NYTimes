import React, { useCallback, useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import LoginForm from '../../components/loginForm';
import { authStyles, primaryColor } from '../../styles/authStyles';

const Login = ({
    params,
    navigation
}) => {

    const handleCallback = useCallback(
        () => {
            navigation.navigate("SignUp")
        }, []
    )
    return (
        <SafeAreaView style={{ backgroundColor: primaryColor }}>
            <ScrollView
                style={{ height: "100%", backgroundColor: primaryColor }}
                contentContainerStyle={authStyles.centerScrollView}>
                <LoginForm cbMove={handleCallback} />
            </ScrollView>
        </SafeAreaView>
    )
};

export default Login;
