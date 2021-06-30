import React from 'react';
import { View } from 'react-native';
import { APP_COLORS } from '../APP_COLORS';
import { LAYOUT_BLANKS } from '../LAYOUT_BLANKS';

export const AppListSeparator = () => {
    return (
        <View 
            style={{ 
                height: LAYOUT_BLANKS.outerPadding,
                backgroundColor: APP_COLORS.WHITE
            }}
        >       
        </View>
    )
}