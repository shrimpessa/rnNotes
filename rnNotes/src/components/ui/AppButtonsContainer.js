import React from 'react';
import { View, StyleSheet } from 'react-native';

export const AppButtonsContainer = props => (
    <View style={{ ...styles.buttons, ...props.style }}>{props.children}</View>
)

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})