import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import { AppFormsContainer } from './ui/AppFormsContainer';
import { AppCenteredContainer } from './ui/AppCenteredContainer';
import { AppMainTitle } from './ui/AppMainTitle';
import { AppTextInput } from './ui/AppTextInput';
import { AppMultilineTextInput } from './ui/AppMultilineTextInput';
import { AppButton } from './ui/AppButton';
import { LAYOUT_BLANKS } from './LAYOUT_BLANKS';

export const CreateEditForm = ({ screenTitle, setNoteName, setNoteText }) => {
    return (
        <AppFormsContainer>
            <AppMainTitle>{screenTitle}</AppMainTitle>
            <AppCenteredContainer>
                <AppTextInput
                    style={styles.inputs}
                    placeholder='Заголовок'
                    onChangeText={noteName => setNoteName(noteName)}
                    inputWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                />
                <AppMultilineTextInput
                    style={styles.inputs}
                    placeholder='Текст заметки'
                    onChangeText={noteText => setNoteText(noteText)}
                    inputWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                    inputHeight={Dimensions.get('window').height * 0.3}
                />
            </AppCenteredContainer>
            <View style={styles.buttons}>
                <AppButton
                    // onPress={() => noteSaveHandler(noteName, noteText)}
                    btnWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                >
                    Добавить
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