import React from 'react';
import { View } from 'react-native';
import { APP_COLORS } from '../APP_COLORS';

export const ListSeparator = () => {
    return (
        <View 
            style={{ 
                height: 2,
                backgroundColor: APP_COLORS.WHITE
            }}
        >       
        </View>
    )
}