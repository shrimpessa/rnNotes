import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { APP_COLORS } from '../constants/APP_COLORS';
import { LAYOUT_BLANKS } from '../constants/LAYOUT_BLANKS';

export const AppTextInput = props => {
    const styles = StyleSheet.create({
        default: {
            borderStyle: 'solid',
            fontSize: 14,
            borderBottomWidth: LAYOUT_BLANKS.borderBottomWidth,
            padding: LAYOUT_BLANKS.outerPadding,
            borderBottomColor: APP_COLORS.BROWN,
            width: props.inputWidth,
            height: props.inputHeight
        }
    })

    return (
        <TextInput         
            style={{ ...styles.default, ...props.style }}
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            maxLength={props.maxLength}
            autoCorrect={props.autoCorrect}
            autoCapitalize={props.autoCapitalize}
            keyboardType={props.keyboardType}
        >
            {props.children}
        </TextInput>
    )
}