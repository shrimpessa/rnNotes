import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { FlatList, StyleSheet, Dimensions, View } from 'react-native';

import { AppListSeparator } from './ui/AppListSeparator';
import { PressableText } from './PressableText'
import { notesStore } from '../store/notesStore';
import { LAYOUT_BLANKS } from './LAYOUT_BLANKS';
import { AppCenteredContainer } from '../components/ui/AppCenteredContainer';
import { NothingIsHere } from './NothingIsHere'

export const NotesList = observer(({ navigation }) => {

    const notesList = (
        <FlatList
            data={notesStore.allNotes}
            keyExtractor={(item) => item.id}
            style={styles.list}
            ItemSeparatorComponent={() => <AppListSeparator />}
            renderItem={({ item }) => (
                <PressableText
                    content={item.noteName}
                    description={item.noteText}
                    onPress={() => navigation.navigate('Note', {
						noteID: item.id,
					})}
                    onLongPress={() => notesStore.deleteNote(item.id)}        
                />
            )}
        />
    )

	return (
        <View style={{ height: '100%' }}>
        {notesStore.count 
            ? <AppCenteredContainer style={{ height: '100%' }}>
                {notesList}
            </AppCenteredContainer>
            : <NothingIsHere />
        }
        </View>
	);
})

const styles = StyleSheet.create({
    list: {
        width: Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire, 
        paddingTop: LAYOUT_BLANKS.innerPadding, 
        paddingBottom: LAYOUT_BLANKS.innerPadding
    }
})