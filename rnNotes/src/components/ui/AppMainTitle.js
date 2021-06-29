import React from 'react';
import { View, StyleSheet } from 'react-native';
import { APP_COLORS } from '../APP_COLORS';
import { LAYOUT_BLANKS } from '../LAYOUT_BLANKS';

import { AppText } from '../ui/AppText';

export const AppMainTitle = props => {
    return (
        <View style={styles.container}>
            <AppText style={styles.title}>
                {props.children}
            </AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: LAYOUT_BLANKS.outerPadding,
        marginTop: LAYOUT_BLANKS.outerPadding,
        alignItems: 'flex-start'
    },
    title: {
        color: APP_COLORS.BLACK,
        fontSize: 20,
        fontWeight: '500'
    }
})