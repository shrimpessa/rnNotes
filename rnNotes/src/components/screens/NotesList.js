// Список всех заметок
import React, { useEffect, useState } from 'react';
import { observer, inject } from 'mobx-react';
import { 
    FlatList, 
    StyleSheet, 
    Dimensions, 
    View, 
    Alert
} from 'react-native';

import { AppListSeparator } from '../ui/AppListSeparator';
import { PressableText } from '../PressableText';
import { AppCenteredContainer } from '../ui/AppCenteredContainer';
import { NothingIsHere } from '../NothingIsHere';
import { AppLoader } from '../ui/AppLoader';

import { LAYOUT_BLANKS } from '../constants/LAYOUT_BLANKS';
import { TEXT_STUBS } from '../constants/TEXT_STUBS';
import { API_KEY } from '../../API_KEY';

export const NotesList = inject('notesStore')(observer(({ navigation, notesStore }) => {

    const [isLoad, setIsLoad] = useState(true)

    useEffect(() => {
        setIsLoad(false) // начало загрузки
        notesStore.getNotes()
        setIsLoad(true) // конец загрузки
    }, [])

    const removeNoteHandler = id => {
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
                    notesStore.deleteNote(id)
                },
              },
            ],
            { cancelable: false }
        );
    }

    const notesList = (
        <FlatList
            data={notesStore.allNotes}
            keyExtractor={(item) => item.id}
            style={styles.list}
            ItemSeparatorComponent={() => <AppListSeparator />}
            renderItem={({ item }) => (
                <PressableText
                    content={item.title}
                    description={item.body}
                    onPress={() => navigation.navigate('Note', {
						noteID: item.id,
					})}
                    onLongPress={() => removeNoteHandler(item.id)}        
                />
            )}
        />
    )
    
    const renderHandler = () => {
        if (notesStore.count == 0) {
            return <NothingIsHere />
        } else if (isLoad) {
            return <AppCenteredContainer style={{ height: '100%' }}>
                {notesList}
            </AppCenteredContainer>
        } else {
            return <AppLoader />
        }
    }

	return (
        <View style={{ height: '100%' }}>
            {renderHandler()}
        </View>
	);
}))

const styles = StyleSheet.create({
    list: {
        width: Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire, 
        paddingTop: LAYOUT_BLANKS.innerPadding, 
        paddingBottom: LAYOUT_BLANKS.innerPadding
    }
})