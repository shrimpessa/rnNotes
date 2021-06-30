import React from 'react';
import { View, StyleSheet } from 'react-native';
import { APP_COLORS } from '../APP_COLORS';

export const AppCenteredContainer = props => {
    return (
        <View style={{ ...styles.container, ...props.style }}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: APP_COLORS.WHITE,
        justifyContent: 'center',
        alignItems: 'center'
    }
})