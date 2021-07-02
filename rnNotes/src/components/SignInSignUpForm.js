import React from 'react';
import { View, StyleSheet, Dimensions, Alert } from 'react-native';

import { AppTextInput } from './ui/AppTextInput';
import { AppButton } from './ui/AppButton';
import { AppMainTitle } from './ui/AppMainTitle';
import { AppFormsContainer } from './ui/AppFormsContainer';
import { LAYOUT_BLANKS } from './constants/LAYOUT_BLANKS';
import { AppCenteredContainer } from './ui/AppCenteredContainer';
import { TEXT_STUBS } from './constants/TEXT_STUBS';
import { FORM_TYPES } from './constants/FORM_TYPES';

export const SignInSignUpForm = ({ 
    formType,
    onChangeUsername, 
    onChangeEmail,
    onChangePassword, 
    onChangeConfirmedPassword, 
    authorizeHandler,
    registrationHandler
}) => {
    return (
        <AppFormsContainer>
            <AppMainTitle>{formType === FORM_TYPES.formType_signUp ? TEXT_STUBS.text_signUp : TEXT_STUBS.text_signIn }</AppMainTitle>
            <AppCenteredContainer>
                <AppTextInput
                    style={styles.inputs}
                    placeholder='Логин'
                    onChangeText={login => onChangeUsername(login)}
                    inputWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                />
                {formType === FORM_TYPES.formType_signUp 
                    ? <AppTextInput
                        style={styles.inputs}
                        placeholder='Почта'
                        onChangeText={
                            email => onChangeEmail(email)
                        }
                        inputWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                    />
                    : null
                }
                <AppTextInput
                    style={styles.inputs}
                    placeholder='Пароль'
                    onChangeText={password => onChangePassword(password)}
                    inputWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                />
                {formType === FORM_TYPES.formType_signUp 
                    ? <AppTextInput
                        style={styles.inputs}
                        placeholder='Пароль еще раз'
                        onChangeText={
                            confirmedPassword => onChangeConfirmedPassword(confirmedPassword)
                        }
                        inputWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                    />
                    : null
                }
            </AppCenteredContainer>
            <View style={styles.buttons}>
                {formType === FORM_TYPES.formType_signUp 
                    ? <AppButton
                        onPress={() => registrationHandler()}
                        btnWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                    >
                        {TEXT_STUBS.text_signUp}
                    </AppButton>
                    : <AppButton
                        onPress={() => authorizeHandler()}
                        btnWidth={Dimensions.get('window').width * LAYOUT_BLANKS.widthEntire}
                    >
                        {TEXT_STUBS.text_signIn}
                    </AppButton>
                }
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