import React, { useContext, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { ListItem, Overlay } from 'react-native-elements';
import { AuthContext } from '../../../navigation/authProvider';

const ListOverlay = (props, {
    params,
}) => {
    const { categories } = useContext(AuthContext)

    const renderItem = ({ item }) => {
        return (
            <ListItem
                bottomDivider
                onPress={() => {
                    props.cbChangeCategory(item)
                    props.closeOverlay()
                }}
            >
                <ListItem.Content>
                    <ListItem.Title>{item.display_name}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        )
    }
    return (
        <Overlay
            visible={true}
            onBackdropPress={props.closeOverlay}
            overlayStyle={{ backgroundColor: 'white', borderRadius: 10, width: "90%", maxHeight: "80%" }}
            backdropStyle={{ backgroundColor: "rgba(0,0,0, .9)" }}
        >
            <View>
                <FlatList
                    data={categories}
                    renderItem={renderItem}
                />
            </View>
        </Overlay>
    )
};

export default ListOverlay;
