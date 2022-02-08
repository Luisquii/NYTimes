import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { retrieveTopSellers } from '../../../cases/retrieveTopSellers';
import LoadingSpinner from '../../../components/LoadingSpinner';
import { AuthContext } from '../../../navigation/authProvider';
import { primaryColor } from '../../../styles/authStyles';
import Book from '../../../components/book';
import Showing from '../../../components/showing';

const Home = ({
    params,
}) => {

    const { _getCategories, categories } = useContext(AuthContext)

    // Show loading when retrieving categories
    const [loading, setLoading] = useState(true)

    // User selected category to display
    const [selectedCategory, setSelectedCategory] = useState([])

    // Top sellers of selected category
    // const [loadingBooks, setLoadingBooks] = useState(false)
    const [topSellers, setTopSellers] = useState([])

    useEffect(() => {
        _getCategories()
    }, [])

    useEffect(() => {
        if (categories.length > 0) {
            let randomNumber = Math.floor(Math.random() * (categories.length - 1 - 0 + 1) + 0)
            setSelectedCategory(categories[randomNumber])
        }
    }, [categories])

    useEffect(() => {
        selectedCategory !== [] && retrieveTopSellers(selectedCategory, setTopSellers, setLoading)
    }, [selectedCategory])

    const renderItem = ({ item }) => {
        return <Book {...item} />
    }
    if (loading) {
        return (
            <View style={{ backgroundColor: primaryColor, height: "100%" }}>
                <LoadingSpinner />
            </View>
        )
    }

    return (
        <View style={{ backgroundColor: primaryColor, height: "100%" }}>

            <Showing
                selectedCategory={selectedCategory}
                cbChangeCategory={(item) => setSelectedCategory(item)}
            />
            <FlatList
                data={topSellers.books}
                renderItem={renderItem}

                keyExtractor={item => item.rank}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
};

export default Home;
