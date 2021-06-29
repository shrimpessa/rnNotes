import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Alert } from 'react-native';

import { notesStore } from '../store/usersStore';
import { AppTextInput } from './ui/AppTextInput';
import { AppButton } from './ui/AppButton';
import { AppMainTitle } from './ui/AppMainTitle';
import { AppFormsContainer } from './ui/AppFormsContainer';
import { LAYOUT_BLANKS } from './LAYOUT_BLANKS';
import { AppCenteredContainer } from './ui/AppCenteredContainer';
import { text_signIn, text_signUp } from './TEXT_STUBS';

export const SignUp = ({ isAuthorized, setLogin, setPassword, setConfirmedPassword, signUpHandler }) => {
    return (
        <AppFormsContainer>
            <AppMainTitle>{isAuthorized ? text_signIn : text_signUp }</AppMainTitle>
            <AppCenteredContainer>
                <AppTextInput
                    style={styles.inputs}
                    placeholder='Логин'
                    onChangeText={login => setLogin(login)}
                    inputWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                />
                <AppTextInput
                    style={styles.inputs}
                    placeholder='Пароль'
                    onChangeText={password => setPassword(password)}
                    inputWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                />
                <AppTextInput
                    style={styles.inputs}
                    placeholder='Пароль еще раз'
                    onChangeText={confirmedPassword => setConfirmedPassword(confirmedPassword)}
                    inputWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                />
            </AppCenteredContainer>
            <View style={styles.buttons}>
                <AppButton
                    onPress={() => signUpHandler()}
                    btnWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                >
                    Зарегистрироваться
                </AppButton>
            </View>
        </AppFormsContainer>
    )
}

const styles = StyleSheet.create({
    inputs: {
        marginBottom: LAYOUT_BLANKS.innerPadding
    },
    buttons: {
        alignItems: 'center'
    }
})