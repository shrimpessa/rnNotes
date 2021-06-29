import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { 
    FlatList, 
    StyleSheet, 
    Dimensions, 
    View, 
    Alert
} from 'react-native';

import { AppListSeparator } from '../ui/AppListSeparator';
import { PressableText } from '../PressableText';
import { LAYOUT_BLANKS } from '../LAYOUT_BLANKS';
import { AppCenteredContainer } from '../ui/AppCenteredContainer';
import { NothingIsHere } from '../NothingIsHere';
import { AppLoader } from '../ui/AppLoader';

import { notesStore } from '../../store/notesStore';
import { getNotes } from '../../store/notesActions';

export const NotesList = observer(({ navigation }) => {

    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        setIsLoad(false) // начало загрузки
        getNotes()
        setIsLoad(true) // конец загрузки
    }, [])

    const removeNoteHandler = id => {
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
    // что рендерить:
    // 1. эран "ничего нет"
    // 2. список заметок
    // 3. индикатор загрузки
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
})

const styles = StyleSheet.create({
    list: {
        width: Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire, 
        paddingTop: LAYOUT_BLANKS.innerPadding, 
        paddingBottom: LAYOUT_BLANKS.innerPadding
    }
})