import React from 'react';
import { observer } from 'mobx-react';
import { FlatList } from 'react-native';

import { ListSeparator } from './ui/ListSeparator';
import { AppPressableText } from './ui/AppPressableText'
import { notesStore } from '../store/notesStore';

export const NotesList = observer(() => {

	return (
		<FlatList
            data={notesStore.allNotes}
            keyExtractor={(item) => item.id}
            style={{ width: '100%', marginTop: 20, paddingBottom: 10 }}
            ItemSeparatorComponent={() => <ListSeparator />}
            renderItem={({ item }) => (
                <AppPressableText
                    content={`Заголовок: ${item.noteName}`}
                    description={`Текст: ${item.noteText}`}
                    onLongPress={() => notesStore.deleteNote(item.id)}        
                />
            )}
        />
	);
})