import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

import { APP_COLORS } from '../components/APP_COLORS';
import { AppMainTitle } from './ui/AppMainTitle';
import { AppText } from './ui/AppText';
import { notesStore } from '../store/notesStore';
import { LAYOUT_BLANKS } from './LAYOUT_BLANKS';
import { AppButton } from './ui/AppButton';

export const Note = ({ route, navigation }) => {
    // Получить заметку по переданному id
    const thisNote = notesStore.getNoteByID(route.params.noteID)

    const removeNoteHandler = () => {
        Alert.alert(
            "Удаление заметки",
            "Вы точно хотите удалить эту заметку?",
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
            <View style={styles.titleContainer}>
                <AppMainTitle>{thisNote.map(note => note.noteName)}</AppMainTitle>
                <Icon name="create-outline" size={30} color={APP_COLORS.BROWN} />
            </View>
            <View style={styles.description}>
                <AppText style={{fontSize: 16, margin: LAYOUT_BLANKS.outerPadding}}>
                    {thisNote.map(note => note.noteText)}
                </AppText>
            </View>
            <AppButton onPress={() => removeNoteHandler()}>
                Удалить
            </AppButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        height: '100%',
        backgroundColor: APP_COLORS.LIGTH_YELLOW,
        paddingHorizontal: LAYOUT_BLANKS.innerPadding
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
	description: {
		marginTop: LAYOUT_BLANKS.outerPadding, 
		borderRadius: LAYOUT_BLANKS.borderRadius, 
		backgroundColor: APP_COLORS.WOODEN,
        marginBottom: LAYOUT_BLANKS.outerPadding
	}
})