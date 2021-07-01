// Экран для создания и редактирования заметки
import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { observer, inject } from 'mobx-react';

import { CreateEditForm } from '../CreateEditForm';

import { APP_COLORS } from '../constants/APP_COLORS';
import { TEXT_STUBS } from '../constants/TEXT_STUBS';
import { FORM_TYPES } from '../constants/FORM_TYPES';

export const CreateEditScreen = inject('notesStore')(observer(({ route, navigation, notesStore }) => {

    const [noteName, setNoteName] = useState('')
	const [noteText, setNoteText] = useState('')

    useEffect(() => {
        // если требуется редактирование, получаем поля по id заметки
        if (route.params.formType === FORM_TYPES.formType_edit) {
            setNoteName(notesStore.getNoteByID(route.params.noteID).title)
            setNoteText(notesStore.getNoteByID(route.params.noteID).body)
        }
    }, [])

    const onChangeName = (name) => {
        setNoteName(name)
    }

    const onChangeText = (text) => {
        setNoteText(text)
    }

    const saveHandler = () => {
        if (noteName.trim().length < 3) {
            Alert.alert(
                "Ошибка!", 
                `Минимальная длина заголовка 3 символа. Вы ввели ${
                    noteName.trim().length
                } символ(-ов).`
            )
        } else if (noteText.trim().length < 3) {
            Alert.alert(
                "Ошибка!", 
                `Минимальная длина текста заметки 3 символа. Вы ввели ${
                    noteText.trim().length
                } символ(-ов).`
            )
        } else {
            if (route.params.formType === FORM_TYPES.formType_create) {
                notesStore.addNote({ noteName, noteText })
                navigation.navigate('MainScreen')
                Alert.alert(
                    TEXT_STUBS.text_noteAdded
                )
            } else {
                notesStore.patchNote( route.params.noteID, noteName, noteText )
                navigation.navigate('MainScreen')
                Alert.alert(
                    TEXT_STUBS.text_changesSaved
                )
            }
            
        }
    }

    return (
        <View style={{ backgroundColor: APP_COLORS.WHITE, height: '100%'}}>
            <CreateEditForm 
                formType={route.params.formType}
                onChangeName={onChangeName} 
                onChangeText={onChangeText}
                saveHandler={saveHandler}
                noteName={noteName}
                noteText={noteText}
            />
        </View>
    )
}))