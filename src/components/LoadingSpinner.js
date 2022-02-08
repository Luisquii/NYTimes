import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { primaryColor, secondaryColor } from '../styles/authStyles';

const LoadingSpinner = ({
    params,
}) => {

    return (
        <ActivityIndicator size="large" animating={true} color={secondaryColor} style={{ flex: 1, alignSelf: "center" }} />
    )
};

export default LoadingSpinner;
