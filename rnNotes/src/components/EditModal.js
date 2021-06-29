import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, Modal, Alert, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

import { APP_COLORS } from './APP_COLORS';
import { AppButton } from './ui/AppButton';
import { AppTextInput } from './ui/AppTextInput';
import { LAYOUT_BLANKS } from './LAYOUT_BLANKS';
import { AppText } from './ui/AppText';
import { AppMainTitle } from './ui/AppMainTitle';
import { AppCenteredContainer } from './ui/AppCenteredContainer';
import { AppMultilineTextInput } from './ui/AppMultilineTextInput';
import { TitleContainer } from './ui/TitleContainer';
import { AppButtonsContainer } from './ui/AppButtonsContainer';

import { notesStore } from '../store/notesStore';
import { getNoteByID } from '../store/notesActions';

export const EditModal = ({ noteID, isModalVisible, value, onCancel }) => {

    const [editedNoteName, setEditedNoteName] = useState('')
	const [editedNoteText, setEditedNoteText] = useState('')

    useEffect(() => {
        const result = getNoteByID(noteID)
        setEditedNoteName(result.title)
        setEditedNoteText(result.body)
    }, [])

    const saveHandler = () => {
        if (editedNoteName.trim().length < 3) {
            Alert.alert(
                "Ошибка!", 
                `Минимальная длина заголовка 3 символа. Вы ввели ${
                    editedNoteName.trim().length
                } символ(-ов).`
            )
        } else if (editedNoteText.trim().length < 10) {
            Alert.alert(
                "Ошибка!", 
                `Минимальная длина текста заметки 10 символа. Вы ввели ${
                    editedNoteText.trim().length
                } символ(-ов).`
            )
        } else {
            notesStore.patchNote( noteID, editedNoteName, editedNoteText )
            onCancel()
        }
    }

    return(
        <Modal visible={isModalVisible} animationType='slide' >
            <View style={styles.modalContainer}>
                <TitleContainer style={styles.horizontalAlignment}>
                    <AppMainTitle>Редактор заметки</AppMainTitle>
                    <Icon 
                        name="close-circle-outline" 
                        size={30} 
                        color={APP_COLORS.BROWN} 
                        onPress={() => onCancel()}
                    />
                </TitleContainer>
                <AppCenteredContainer>
                    <AppTextInput
                        style={styles.inputs}
                        value={editedNoteName}
                        placeholder='Заголовок'
                        onChangeText={newNoteName => setEditedNoteName(newNoteName)}
                        inputWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                    />
                    <AppMultilineTextInput
                        style={styles.inputs}
                        value={editedNoteText}
                        placeholder='Текст заметки'
                        onChangeText={newNoteText => setEditedNoteText(newNoteText)}
                        inputWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                        inputHeight={Dimensions.get('window').height * 0.3}
                    />
                </AppCenteredContainer>
                <AppButtonsContainer style={styles.horizontalAlignment}>
                    <AppButton
                        onPress={() => saveHandler()}
                        btnWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthHalf}
                        color={APP_COLORS.LIGTH_YELLOW}
                    >
                        <AppText>
                            Сохранить
                        </AppText>
                    </AppButton>
                    <AppButton
                        onPress={() => onCancel()}
                        btnWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthHalf}
                        color={APP_COLORS.DANGER}
                    >
                        Отмена
                    </AppButton>
                </AppButtonsContainer>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1, // по высоте экрана
        justifyContent: 'center',
    },
    horizontalAlignment: {
        paddingHorizontal: LAYOUT_BLANKS.paddingHorizontal
    },
    inputs: {
        marginBottom: LAYOUT_BLANKS.innerPadding
    }
})