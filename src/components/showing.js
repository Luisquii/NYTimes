import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { homeStyles } from '../styles/homeStyles';
import { Icon } from 'react-native-elements';
import { secondaryColor } from '../styles/authStyles';
import ListOverlay from '../containers/tabs/home/listOverlay';

const Showing = (props, {
    params,
}) => {

    const [showOverlay, setShowOverlay] = useState(false)
    return (
        <>
            <View style={homeStyles.container}>
                <View style={homeStyles.row}>
                    <Text
                        style={homeStyles.showingTitle}
                    >{props.selectedCategory.display_name}</Text>

                    <TouchableOpacity onPress={() => setShowOverlay(true)}>
                        <Icon
                            name='book-search-outline'
                            type='material-community'
                            size={30}
                            color={secondaryColor}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {
                showOverlay &&
                <ListOverlay
                    cbChangeCategory={(item) => { props.cbChangeCategory(item) }}
                    closeOverlay={() => setShowOverlay(false)} />
            }
        </>
    )
};

export default Showing;
