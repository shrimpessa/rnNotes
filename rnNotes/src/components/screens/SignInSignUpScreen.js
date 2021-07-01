import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { observer, inject } from 'mobx-react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppButton } from '../ui/AppButton';
import { LAYOUT_BLANKS } from '../constants/LAYOUT_BLANKS';
import { APP_COLORS } from '../constants/APP_COLORS';
import { SignInSignUpForm } from '../SignInSignUpForm';
import { FORM_TYPES } from '../constants/FORM_TYPES';

export const SignInSignUpScreen = inject('usersStore', 'notesStore')(observer(({ navigation, usersStore, notesStore }) => {

    const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')

    const onChangeUsername = (username) => {
        setUsername(username)
        
    }

    const onChangePassword = (pass) => {
        setPassword(pass)
    }

    const onChangeConfirmedPassword = (pass) => {
        setConfirmedPassword(pass)
    }

    const renderHandler = () => {
        let isAuthorized = false
        // Проверка на авторизованность пользователя
        usersStore.isTokenExists().then((result) => {
            isAuthorized = result
        })
        
        // Если авторизован, предложить сменить аккаунт
        if (isAuthorized) {
            return (
                <View style={{ alignItems: 'center' }}>
                    <AppButton
                        onPress={() => usersStore.logOut()}
                        btnWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                    >
                        Сменить аккаунт
                    </AppButton>
                </View>
            )
        // Иначе предложить войти
        } else {
            usersStore.authorizeUser('user999', '123')
            
            return <SignInSignUpForm 
                formType={FORM_TYPES.formType_signUp}
                isAuthorized={isAuthorized} 
                onChangeUsername={onChangeUsername}
                onChangePassword={onChangePassword}
                onChangeConfirmedPassword={onChangeConfirmedPassword}
            />
        }
    }
   
    return (
        <View style={{ backgroundColor: APP_COLORS.WHITE, height: '100%'}}>
            {renderHandler()}
        </View>
    )
}))

const styles = StyleSheet.create({
    inputs: {
        marginBottom: LAYOUT_BLANKS.innerPadding
    },
    buttons: {
        alignItems: 'center'
    }
})