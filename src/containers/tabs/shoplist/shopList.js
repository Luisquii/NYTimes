import React, { useContext, useEffect, useState } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import LoadingSpinner from '../../../components/LoadingSpinner';
import { AuthContext } from '../../../navigation/authProvider';
import { primaryColor, secondaryColor } from '../../../styles/authStyles';
import { shoplistStyles } from '../../../styles/shoplistStyles';
import SavedBookContainer from '../../../components/savedBookContainer';

const ShopList = ({
    params,
}) => {

    const { shoppingBooks, _getShoppingList } = useContext(AuthContext);

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        retrieveList()
    }, [])

    const retrieveList = async () => {
        setLoading(true)
        await _getShoppingList()
        setLoading(false)
    }

    const renderItem = ({ item }) => {
        return <SavedBookContainer {...item} cbRefresh={() => retrieveList()} />
    }
    const renderEmtpy = () => {
        return (
            <View>
                <Text style={{ color: secondaryColor }}>No books added</Text>
            </View>
        )
    }

    if (loading) {
        return (
            <View style={{ backgroundColor: primaryColor, height: "100%" }}>
                <LoadingSpinner />
            </View>
        )
    }

    return (
        <FlatList
            data={shoppingBooks}
            renderItem={renderItem}
            keyExtractor={item => item.doc_id}
            ListEmptyComponent={renderEmtpy}
            contentContainerStyle={shoplistStyles.flatList}
            style={{ backgroundColor: primaryColor }}
            refreshControl={
                <RefreshControl refreshing={loading}
                    onRefresh={retrieveList} />
            }
        />
    )
};

export default ShopList;
