import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { observer } from 'mobx-react';

import { notesStore } from '../../store/notesStore';
import { AppMultilineTextInput } from '../ui/AppMultilineTextInput';
import { AppTextInput } from '../ui/AppTextInput';
import { AppButton } from '../ui/AppButton';
import { AppMainTitle } from '../ui/AppMainTitle';
import { AppFormsContainer } from '../ui/AppFormsContainer';
import { LAYOUT_BLANKS } from '../LAYOUT_BLANKS';
import { AppCenteredContainer } from '../ui/AppCenteredContainer';

export const CreateNoteScreen =  observer(({ navigation }) => {

    const [noteName, setNoteName] = useState('')
	const [noteText, setNoteText] = useState('')

    return(
        <AppFormsContainer>
            <AppMainTitle>Новая заметка</AppMainTitle>
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
                    onPress={() => notesStore.addNote({ noteName, noteText })}
                    btnWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthHalf}
                >
                    Добавить
                </AppButton>
                <AppButton
                    onPress={() => navigation.navigate('NotesList')}
                    btnWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthHalf}
                >
                    Посмотреть заметки          
                </AppButton>
            </View>
        </AppFormsContainer>
    )
})

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