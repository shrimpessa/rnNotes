import React from 'react';
import { observer } from 'mobx-react';

import { AppFormsContainer } from '../ui/AppFormsContainer';
import { AppMainTitle } from '../ui/AppMainTitle';
import { NotesList } from '../screens/NotesList';

export const MainScreen = observer(({ navigation }) => {

    return(
        <AppFormsContainer>
            <AppMainTitle>Главная</AppMainTitle>
            <NotesList navigation={navigation} />
        </AppFormsContainer>
    )
})