import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

import { APP_COLORS } from '../components/APP_COLORS';
import { AppMainTitle } from './ui/AppMainTitle';
import { AppText } from './ui/AppText';
import { LAYOUT_BLANKS } from './LAYOUT_BLANKS';
import { AppButton } from './ui/AppButton';
import { EditModal } from './EditModal';
import { TitleContainer } from './ui/TitleContainer';

import { notesStore } from '../store/notesStore';
import { getNoteByID } from '../store/notesActions';

export const Note = ({ route, navigation }) => {

    const [isModalVisible, setIsModalVisible] = useState(false)

    useEffect(() => {
        getNoteByID(route.params.noteID)
    }, [])

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
            <TitleContainer>
                <AppMainTitle>{getNoteByID(route.params.noteID).title}</AppMainTitle>
                <Icon 
                    name="create-outline" 
                    size={30} 
                    color={APP_COLORS.BROWN} 
                    onPress={() => setIsModalVisible(true)}
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

            <EditModal 
                noteID={route.params.noteID}
                value={getNoteByID()}
                isModalVisible={isModalVisible} 
                onCancel={() => setIsModalVisible(false)}
            />
        </View>
    )
}

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