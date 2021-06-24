import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { APP_COLORS } from '../APP_COLORS';
import { LAYOUT_BLANKS } from '../LAYOUT_BLANKS';

export const AppMultilineTextInput = props => {
    const styles = StyleSheet.create({
        default: {
            borderStyle: 'solid',
            borderRadius: 3,
            fontSize: 14,
            borderWidth: LAYOUT_BLANKS.borderBottomWidth,
            padding: 10,
            borderColor: APP_COLORS.BROWN,
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
            multiline
        >
            {props.children}
        </TextInput>
    )
}