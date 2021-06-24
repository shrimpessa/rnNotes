import React, { useState } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';

import { notesStore } from '../../store/notesStore';
import { AppText } from '../ui/AppText';
import { AppButton } from '../ui/AppButton';
import { AppTextInput } from '../ui/AppTextInput';

export const MainScreen = observer(({ navigation }) => {

	// addHero = () => {
	// 	setHeroList(list => [...list, { name, power, id: Math.random() }])
	// }

    return(
        <View>
            <AppText>MainScreen</AppText>
            <AppButton onPress={() => navigation.navigate('CreateNoteScreen')}>
                Добавить новую заметку
            </AppButton>
        </View>
    )
})