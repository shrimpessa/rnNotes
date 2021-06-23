import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AppText } from '../ui/AppText';
import { AppButton } from '../ui/AppButton';

export const MainScreen = () => {

    const navigation = useNavigation()

    return(
        <View>
            <AppText>MainScreen</AppText>
            <AppButton onPress={() => navigation.navigate('CreateNoteScreen')}>
                Добавить новую заметку
            </AppButton>
        </View>
    )
}