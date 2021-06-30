// Экран для отображения отдельной заметки
import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

import { AppMainTitle } from '../ui/AppMainTitle';
import { AppText } from '../ui/AppText';
import { AppButton } from '../ui/AppButton';
import { TitleContainer } from '../ui/TitleContainer';

import { APP_COLORS } from '../APP_COLORS';
import { LAYOUT_BLANKS } from '../LAYOUT_BLANKS';
import { TEXT_STUBS } from '../TEXT_STUBS';
import { formType_edit } from '../FORM_TYPES';

import { notesStore } from '../../store/notesStore';
import { getNoteByID } from '../../store/notesActions';

export const Note = observer(({ route, navigation }) => {

    const removeNoteHandler = () => {
        Alert.alert(
            TEXT_STUBS.text_deleteNote,
            TEXT_STUBS.text_confirmDeletion,
            [
              {
                text: "Отменить",
                style: "cancel",
              },
              {
                text: "Удалить",                
                style: "destructive",
                onPress: () => {
                    navigation.navigate('MainScreen')
                    notesStore.deleteNote(route.params.noteID)
                },
              },
            ],
            { cancelable: false }
        );
    }

    return (
        <View style={styles.container}>
            <TitleContainer>
                <AppMainTitle>{getNoteByID(route.params.noteID).title}</AppMainTitle>
                <Icon 
                    name="create-outline" 
                    size={30} 
                    color={APP_COLORS.BROWN} 
                    onPress={() => navigation.navigate('CreateEdit', {
                        formType: formType_edit,
                        noteID: route.params.noteID
                    })}
                />
            </TitleContainer>
            <View style={styles.description}>
                <AppText style={{fontSize: 16, margin: LAYOUT_BLANKS.outerPadding}}>
                    {getNoteByID(route.params.noteID).body}
                </AppText>
            </View>
            <AppButton onPress={() => removeNoteHandler()}>
                Удалить
            </AppButton>
        </View>
    )
})

const styles = StyleSheet.create({
    container: { 
        height: '100%',
        backgroundColor: APP_COLORS.LIGTH_YELLOW,
        paddingHorizontal: LAYOUT_BLANKS.innerPadding
    },
	description: {
		marginTop: LAYOUT_BLANKS.outerPadding, 
		borderRadius: LAYOUT_BLANKS.borderRadius, 
		backgroundColor: APP_COLORS.WOODEN,
        marginBottom: LAYOUT_BLANKS.outerPadding
	}
})