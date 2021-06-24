import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { observer } from 'mobx-react';

import { notesStore } from '../../store/notesStore';
import { AppMultilineTextInput } from '../ui/AppMultilineTextInput';
import { AppTextInput } from '../ui/AppTextInput';
import { AppButton } from '../ui/AppButton';

export const CreateNoteScreen =  observer(({ navigation }) => {

    const [noteName, setNoteName] = useState('');
	const [noteText, setNoteText] = useState('');

    return(
        <View>
            <Text>CreateNoteScreen</Text>
            <AppTextInput
				placeholder='Name'
				onChangeText={noteName => setNoteName(noteName)}
			/>
			<AppMultilineTextInput
				placeholder='Текст заметки'
				onChangeText={noteText => setNoteText(noteText)}
			/>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',}}>
                <AppButton
                    onPress={() => notesStore.addNote({ noteName, noteText })}
                >
                    Add
                </AppButton>
                <AppButton
                    onPress={() => navigation.navigate('NotesList')}
                >
                    View List            
                </AppButton>
            </View>
        </View>
    )
})