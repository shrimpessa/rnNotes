import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { APP_COLORS } from './constants/APP_COLORS'

export const NothingIsHere = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Пока что здесь ничего нет!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: APP_COLORS.WHITE
    },
    title: {
        padding: 10,
        fontSize: 18,
        color: APP_COLORS.BROWN,
        fontWeight: '600',
        marginBottom: 10
    },
})