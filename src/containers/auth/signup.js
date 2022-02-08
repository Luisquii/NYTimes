import React, { useCallback } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import SignUpForm from '../../components/signUpForm';
import { authStyles, primaryColor } from '../../styles/authStyles';

const SignUp = ({
    params,
    navigation
}) => {

    const handleCallback = useCallback(
        () => {
            navigation.navigate("Login")
        }, []
    )

    return (
        <SafeAreaView style={{ backgroundColor: primaryColor }}>
            <ScrollView
                style={{ height: "100%", primaryColor }}
                contentContainerStyle={authStyles.centerScrollView}>
                <SignUpForm cbMove={handleCallback} />
            </ScrollView>
        </SafeAreaView>
    )
};

export default SignUp;
