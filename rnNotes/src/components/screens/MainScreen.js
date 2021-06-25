import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { observer } from 'mobx-react';

import { AppButton } from '../ui/AppButton';
import { LAYOUT_BLANKS } from '../LAYOUT_BLANKS';
import { AppFormsContainer } from '../ui/AppFormsContainer';
import { AppCenteredContainer } from '../ui/AppCenteredContainer';
import { AppMainTitle } from '../ui/AppMainTitle';
import { NotesList } from '../NotesList'

export const MainScreen = observer(({ navigation }) => {

    return(
        <AppFormsContainer>
            <AppMainTitle>Главная</AppMainTitle>
            <AppCenteredContainer>
                {/* <AppButton 
                    onPress={() => navigation.navigate('CreateNoteScreen')}
                    btnWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                >
                    Добавить новую заметку
                </AppButton> */}
                <NotesList />
            </AppCenteredContainer>
        </AppFormsContainer>
    )
})