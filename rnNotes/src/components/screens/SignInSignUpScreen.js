import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Alert } from 'react-native';
import { observer } from 'mobx-react';

import { LAYOUT_BLANKS } from '../constants/LAYOUT_BLANKS';
import { APP_COLORS } from '../constants/APP_COLORS';
import { SignUp } from '../SignUp';

export const SignInSignUpScreen = observer(({ navigation }) => {

    const [isAuthorized, setIsAuthorized] = useState(false)

    const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
   
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