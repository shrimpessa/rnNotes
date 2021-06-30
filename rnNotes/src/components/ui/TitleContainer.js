import React from 'react';
import { View, StyleSheet } from 'react-native';

export const TitleContainer = props => (
    <View style={{ ...styles.titleContainer, ...props.style }}>{props.children}</View>
)

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})