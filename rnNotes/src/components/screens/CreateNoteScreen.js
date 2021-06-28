import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Alert } from 'react-native';
import { observer } from 'mobx-react';

import { notesStore } from '../../store/notesStore';
import { AppMultilineTextInput } from '../ui/AppMultilineTextInput';
import { AppTextInput } from '../ui/AppTextInput';
import { AppButton } from '../ui/AppButton';
import { AppMainTitle } from '../ui/AppMainTitle';
import { AppFormsContainer } from '../ui/AppFormsContainer';
import { LAYOUT_BLANKS } from '../LAYOUT_BLANKS';
import { AppCenteredContainer } from '../ui/AppCenteredContainer';
import { APP_COLORS } from '../APP_COLORS';

export const CreateNoteScreen =  observer(({ navigation }) => {

    const [noteName, setNoteName] = useState('')
	const [noteText, setNoteText] = useState('')

    const noteSaveHandler = (noteName, noteText) => {
        if (noteName.trim().length < 3) {
            Alert.alert(
                "Ошибка!", 
                `Минимальная длина заголовка 3 символа. Вы ввели ${
                    noteName.trim().length
                } символ(-ов).`
            )
        } else if (noteText.trim().length < 10) {
            Alert.alert(
                "Ошибка!", 
                `Минимальная длина текста заметки 10 символа. Вы ввели ${
                    noteText.trim().length
                } символ(-ов).`
            )
        } else {
            notesStore.addNote({ noteName, noteText })
            Alert.alert(
                "Заметка добавлена!"
            )
        }
    }

    return (
        <View style={{ backgroundColor: APP_COLORS.WHITE, height: '100%'}}>
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
                        onPress={() => noteSaveHandler(noteName, noteText)}
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
        </View>
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