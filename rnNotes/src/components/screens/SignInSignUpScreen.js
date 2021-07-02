import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { observer, inject } from 'mobx-react';

import { AppButton } from '../ui/AppButton';
import { AppAlert } from '../ui/AppAlert';

import { LAYOUT_BLANKS } from '../constants/LAYOUT_BLANKS';
import { APP_COLORS } from '../constants/APP_COLORS';
import { SignInSignUpForm } from '../SignInSignUpForm';

export const SignInSignUpScreen = inject('usersStore')(observer(({ navigation, route, usersStore }) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')

    const onChangeUsername = (username) => {
        setUsername(username)
    }

    const onChangeEmail = (email) => {
        setEmail(email)
    }

    const onChangePassword = (pass) => {
        setPassword(pass)
    }

    const onChangeConfirmedPassword = (pass) => {
        setConfirmedPassword(pass)
    }

    const authorizeHandler = () => {
        usersStore.authorizeUser(username, password, navigation)
    }
    
    const registrationHandler = () => {
        if (username === '' || email === '' || password === '') {
            AppAlert('Все поля должны быть заполнены!')
        } else if (password !== confirmedPassword) {
            AppAlert('Пароли не совпадают!')
        } else {
            usersStore.createUser(username, email, password, navigation)
        }
        // usersStore.createUser('user999', 'mailmail@gmail.com', '123', navigation)
    }

    const renderHandler = () => {
        // Проверка на авторизованность пользователя
        usersStore.isTokenExists()
        
        // Если авторизован, предложить сменить аккаунт
        if (usersStore.isAuthorized) {
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
            return <SignInSignUpForm 
                formType={route.params?.formType}
                onChangeUsername={onChangeUsername}
                onChangeEmail={onChangeEmail}
                onChangePassword={onChangePassword}
                onChangeConfirmedPassword={onChangeConfirmedPassword}
                authorizeHandler={authorizeHandler}
                registrationHandler={registrationHandler}
            />
        }
    }
   
    return (
        <View style={{ backgroundColor: APP_COLORS.WHITE, height: '100%'}}>
            {renderHandler()}
        </View>
    )
}))