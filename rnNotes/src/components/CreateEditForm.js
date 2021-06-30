import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import { AppFormsContainer } from './ui/AppFormsContainer';
import { AppCenteredContainer } from './ui/AppCenteredContainer';
import { AppMainTitle } from './ui/AppMainTitle';
import { AppTextInput } from './ui/AppTextInput';
import { AppMultilineTextInput } from './ui/AppMultilineTextInput';
import { AppButton } from './ui/AppButton';

import { LAYOUT_BLANKS } from './LAYOUT_BLANKS';
import { formType_edit } from './FORM_TYPES';
import { TEXT_STUBS } from './TEXT_STUBS';

export const CreateEditForm = ({ formType, onChangeName, onChangeText, saveHandler, noteName, noteText }) => {
    return (
        <AppFormsContainer>
            <AppMainTitle>
                {formType === formType_edit 
                    ? TEXT_STUBS.text_editNote 
                    : TEXT_STUBS.text_createNote
                }
            </AppMainTitle>
            <AppCenteredContainer>
                <AppTextInput
                    style={styles.inputs}
                    value={noteName}
                    placeholder='Заголовок'
                    onChangeText={noteName => onChangeName(noteName)}
                    inputWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                />
                <AppMultilineTextInput
                    style={styles.inputs}
                    value={noteText}
                    placeholder='Текст заметки'
                    onChangeText={noteText => onChangeText(noteText)}
                    inputWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                    inputHeight={Dimensions.get('window').height * 0.3}
                />
            </AppCenteredContainer>
            <View style={styles.buttons}>
                <AppButton
                    onPress={() => saveHandler()}
                    btnWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                >
                    {formType === formType_edit 
                        ? TEXT_STUBS.text_saveChanges 
                        : TEXT_STUBS.text_add
                    }
                </AppButton>
            </View>
        </AppFormsContainer>
    )
}

const styles = StyleSheet.create({
    inputs: {
        marginBottom: LAYOUT_BLANKS.innerPadding
    },
    buttons: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})