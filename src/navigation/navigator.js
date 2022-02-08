import React, { useContext, useState } from 'react';
import { Text, View, useColorScheme } from 'react-native';
import AuthStack from './authStack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './authProvider';
import AppTabs from './appTabs';
import LoadingSpinner from '../components/LoadingSpinner';

const Navigator = ({
    params,
}) => {
    const { user, isLogged } = useContext(AuthContext)
    const scheme = useColorScheme();

    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        const validateSession = async () => {
            await isLogged(setLoading)
        }
        validateSession()
    }, [])

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <LoadingSpinner />
            </View>
        )
    }

    return (
        <NavigationContainer >
            {
                !user ?
                    <AuthStack />
                    :
                    <AppTabs />
            }
        </NavigationContainer>
    )
};

export default Navigator;
