import React from 'react';
import { StyleSheet, View } from 'react-native';
import { APP_COLORS } from '../APP_COLORS';
import { LAYOUT_BLANKS } from '../LAYOUT_BLANKS';

export const AppFormsContainer = props => {
    return(
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: LAYOUT_BLANKS.paddingHorizontal,
        paddingVertical: LAYOUT_BLANKS.paddingVertical,
        backgroundColor: APP_COLORS.WHITE
    }
})