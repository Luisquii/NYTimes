import React, { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { Avatar, Button, ListItem } from 'react-native-elements';
import { deleteDocument } from '../cases/deleteDocument';
import { primaryColor, secondaryColor } from '../styles/authStyles';
import { shoplistStyles } from '../styles/shoplistStyles';

const SavedBookContainer = (props, {
    params,
}) => {

    const {
        title,
        book_image,
        author
    } = props.doc_data.book

    const [loading, setLoading] = useState(false)

    const removeBook = async () => {
        let response = await deleteDocument("shopping_cart", props.doc_id)
        let done = response[0]
        let error = response[1]

        if (done) {
            setLoading(false)
            props.cbRefresh()
        }
        if (error) {
            Alert.alert("Error", "Unable to delete book")
        }
    }

    return (
        <ListItem
            bottomDivider
            containerStyle={{
                backgroundColor: primaryColor
            }}
        >
            <Avatar rounded source={{ uri: book_image }} />

            <ListItem.Content>
                <ListItem.Title style={{ color: secondaryColor }}>{title}</ListItem.Title>
                <Text style={shoplistStyles.author}>{author}</Text>
                <Button
                    title="Remove"
                    titleStyle={{ color: primaryColor }}
                    containerStyle={{ alignSelf: "flex-end" }}
                    buttonStyle={shoplistStyles.removeButton}
                    onPress={removeBook}
                    loading={loading}
                    disabled={loading}
                />
            </ListItem.Content>
        </ListItem>
    )
};

export default SavedBookContainer;
