import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Alert } from 'react-native';
import { observer } from 'mobx-react';

import { LAYOUT_BLANKS } from '../constants/LAYOUT_BLANKS';
import { APP_COLORS } from '../constants/APP_COLORS';
import { SignInSignUpForm } from '../SignInSignUpForm';

export const SignInSignUpScreen = observer(({ navigation }) => {

    const [isAuthorized, setIsAuthorized] = useState(false)

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

    const signHandler = () => {

    }
   
    return (
        <View style={{ backgroundColor: APP_COLORS.WHITE, height: '100%'}}>
            <SignUp 
                isAuthorized={isAuthorized} 
                onChangeUsername={onChangeUsername}
                onChangePassword={onChangePassword}
                onChangeConfirmedPassword={onChangeConfirmedPassword}
                signHandler={signHandler}
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