import React, { useContext, useEffect, useState } from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { addData } from '../cases/addData';
import { primaryColor } from '../styles/authStyles';
import { homeStyles } from '../styles/homeStyles';
import { AuthContext } from '../navigation/authProvider';

const Book = (props, {
    params,
}) => {

    const { user } = useContext(AuthContext)
    const {
        author,
        description,
        book_image,
        title,
        buy_links
    } = props

    const [link, setLink] = useState(null)
    const [added, setAdded] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        buy_links.forEach(link => {
            link.name === "Amazon" && setLink(link.url)
        })
    }, [])

    const handleBuy = () => {
        Linking.openURL(link)
    }

    const addBook = async () => {
        setLoading(true)
        let data = {
            book: {
                ...props,
            },
            useremail: user.email,
            user_uid: user.uid

        }
        let response = await addData("shopping_cart", data)

        let done = response[0]
        let error = response[1]

        if (done) {
            setAdded(true)
            setLoading(false)
        }

        if (error) {
            setLoading(false)
        }
    }


    return (
        <View style={homeStyles.bookDescriptionContainer}>
            <TouchableOpacity
                onPress={handleBuy}
            >
                <Image
                    style={[homeStyles.bookImage]}
                    source={{ uri: book_image }}
                />
            </TouchableOpacity>

            <Text style={homeStyles.titleText} numberOfLines={2}>{title}</Text>

            <View style={homeStyles.addCartContainer}>
                <Text style={homeStyles.authorText}>{author}</Text>
                {
                    !added &&
                    <Button
                        title="Add"
                        buttonStyle={homeStyles.addButton}
                        titleStyle={{ fontWeight: 'bold', color: primaryColor, fontSize: 12 }}
                        icon={{
                            name: 'add-shopping-cart',
                            type: 'material-icons',
                            size: 20,
                            color: primaryColor,
                        }}
                        onPress={addBook}
                        loading={loading}
                        disabled={loading}
                    />
                }
            </View>
            <Text
                style={homeStyles.descriptionText}
                numberOfLines={3}
            >{description}</Text>
        </View>
    )
};

export default Book;
