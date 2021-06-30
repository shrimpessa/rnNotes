import React from 'react';
import { View, StyleSheet, Dimensions, Alert } from 'react-native';

import { AppTextInput } from './ui/AppTextInput';
import { AppButton } from './ui/AppButton';
import { AppMainTitle } from './ui/AppMainTitle';
import { AppFormsContainer } from './ui/AppFormsContainer';
import { LAYOUT_BLANKS } from './constants/LAYOUT_BLANKS';
import { AppCenteredContainer } from './ui/AppCenteredContainer';
import { TEXT_STUBS } from './constants/TEXT_STUBS';

export const SignInSignUpForm = ({ 
    formType, 
    isAuthorized, 
    onChangeUsername, 
    onChangePassword, 
    onChangeConfirmedPassword, 
    signHandler 
}) => {
    return (
        <AppFormsContainer>
            <AppMainTitle>{isAuthorized ? TEXT_STUBS.text_signIn : TEXT_STUBS.text_signUp }</AppMainTitle>
            <AppCenteredContainer>
                <AppTextInput
                    style={styles.inputs}
                    placeholder='Логин'
                    onChangeText={login => onChangeUsername(login)}
                    inputWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                />
                <AppTextInput
                    style={styles.inputs}
                    placeholder='Пароль'
                    onChangeText={password => onChangePassword(password)}
                    inputWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                />
                <AppTextInput
                    style={styles.inputs}
                    placeholder='Пароль еще раз'
                    onChangeText={confirmedPassword => onChangeConfirmedPassword(confirmedPassword)}
                    inputWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                />
            </AppCenteredContainer>
            <View style={styles.buttons}>
                <AppButton
                    onPress={() => signHandler()}
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