import React, { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { AuthContext } from '../../../navigation/authProvider';
import { authStyles, buttonColor, primaryColor, secondaryColor } from "../../../styles/authStyles"
const Profile = ({
    params,
}) => {
    const { user, logout } = useContext(AuthContext)

    return (
        <ScrollView
            style={{ height: "100%", backgroundColor: primaryColor }}
            contentContainerStyle={authStyles.centerScrollView}>
            <Text style={{ color: secondaryColor }}>{user.email}</Text>
            <Button
                title="Logout"
                titleStyle={{ color: secondaryColor, fontWeight: "bold" }}
                buttonStyle={{
                    borderRadius: 30,
                    width: "50%",
                    backgroundColor: buttonColor
                }}
                onPress={logout}
            />
        </ScrollView>
    )
};

export default Profile;
