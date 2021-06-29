import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Alert } from 'react-native';
import { observer } from 'mobx-react';

import { CreateNoteScreen } from './CreateNoteScreen';
import { EditModal } from './EditModal';
import { APP_COLORS } from '../APP_COLORS';
import { CreateEditForm } from '../CreateEditForm';
import { text_createNote, text_editNote } from '../TEXT_STUBS';

export const CreateEditScreen =  observer(({ navigation }) => {

    const [isCreateNeeded, setIsCreateNeeded] = useState(false)

    const [noteName, setNoteName] = useState('')
	const [noteText, setNoteText] = useState('')

    const defineAction = () => {
        setIsCreateNeeded(true)
    }

    useEffect(() => {
        defineAction()
    }, [])

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
            {isCreateNeeded 
                ? <CreateEditForm screenTitle={text_createNote} />
                : <CreateEditForm screenTitle={text_editNote} />
            }
        </View>
    )
})