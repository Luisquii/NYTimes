import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import { authStyles, errorColor, primaryColor, secondaryColor } from '../styles/authStyles';
import { Button, Input } from 'react-native-elements';
import { AuthContext } from '../navigation/authProvider';

const LoginForm = (props, {
    params,
}) => {
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState(null)
    const [pwd, setPwd] = useState(null)
    const [errorMsj, setErrorMsj] = useState(null)
    const [loading, setLoading] = useState(false)
    return (
        <View style={authStyles.card}>
            <Text style={authStyles.title}>Login</Text>
            {errorMsj && <Text style={{ color: errorColor, textAlign: "center" }}>{errorMsj}</Text>}

            <Input
                label="Email"
                labelStyle={{ color: primaryColor }}
                inputStyle={{ color: primaryColor }}
                placeholder='email@address.com'
                leftIcon={{ type: 'material-icons', name: 'email' }}
                value={email}
                onChangeText={(e) => setEmail(e)}
                keyboardType="email-address"
                autoCapitalize='none'
            />

            <Input
                label="Password"
                labelStyle={{ color: primaryColor }}
                inputStyle={{ color: primaryColor }}
                placeholder='*******'
                leftIcon={{ type: 'material-icons', name: 'lock' }}
                value={pwd}
                onChangeText={(p) => setPwd(p)}
                secureTextEntry
            />

            <Button
                title="Login"
                titleStyle={{ color: secondaryColor }}
                containerStyle={authStyles.button}
                icon={{ type: "font-awesome", name: "arrow-right", color: secondaryColor }}
                iconRight
                loading={loading}
                disabled={loading}
                onPress={() => login(email, pwd, setErrorMsj, setLoading)}
            />

            <Text
                onPress={props.cbMove}
                style={authStyles.moveWindowLabel}>No account? Sign-up now!</Text>
        </View>
    )
};

export default LoginForm;
