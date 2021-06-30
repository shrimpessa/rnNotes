import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Alert } from 'react-native';
import { observer } from 'mobx-react';

import { notesStore } from '../../store/notesStore';
import { AppTextInput } from '../ui/AppTextInput';
import { AppButton } from '../ui/AppButton';
import { AppMainTitle } from '../ui/AppMainTitle';
import { AppFormsContainer } from '../ui/AppFormsContainer';
import { LAYOUT_BLANKS } from '../LAYOUT_BLANKS';
import { AppCenteredContainer } from '../ui/AppCenteredContainer';
import { APP_COLORS } from '../APP_COLORS';
import { text_signIn, text_signUp } from '../TEXT_STUBS';
import { SignUp } from '../SignUp';

export const SignInSignUpScreen =  observer(({ navigation }) => {

    const [isAuthorized, setIsAuthorized] = useState(false)

    const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
    
    

    const noteSaveHandler = (noteName, noteText) => {
        // if (noteName.trim().length < 3) {
        //     Alert.alert(
        //         "Ошибка!", 
        //         `Минимальная длина заголовка 3 символа. Вы ввели ${
        //             noteName.trim().length
        //         } символ(-ов).`
        //     )
        // } else if (noteText.trim().length < 10) {
        //     Alert.alert(
        //         "Ошибка!", 
        //         `Минимальная длина текста заметки 10 символа. Вы ввели ${
        //             noteText.trim().length
        //         } символ(-ов).`
        //     )
        // } else {
        //     notesStore.addNote({ noteName, noteText })
        //     Alert.alert(
        //         "Заметка добавлена!"
        //     )
        // }
    }

    return (
        <View style={{ backgroundColor: APP_COLORS.WHITE, height: '100%'}}>
            <SignUp 
                isAuthorized={isAuthorized} 
                // setLogin={setLogin(setLogin)}
            />
        </View>
    )
})

const styles = StyleSheet.create({
    inputs: {
        marginBottom: LAYOUT_BLANKS.innerPadding
    },
    buttons: {
        alignItems: 'center'
    }
})