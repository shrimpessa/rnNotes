import { makeObservable, observable, computed, action } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import link from '../API_CONNECT';

class Users {
    allUsers = []
    // token = "iMKgFpyzcXGayz5hBaXQrwwIwZQXBGJLhwFXhaEa0tAuNujA0x4JjexqkUGeDJZ6"
    // token = ''

    constructor() {
        makeObservable(this, {
            allUsers: observable,
            isTokenExists: action,
            setToken: action,
            authorizeUser: action,
            logOut: action
        })
    }

    async isTokenExists() {
        try {
            // console.log('store: ' + await AsyncStorage.getItem('@token'))
            const result = await AsyncStorage.getItem('@token') === null
            return !result // false if not authorized
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async setToken(newToken) {
        try {
            await AsyncStorage.mergeItem('@token', newToken)
        } catch (error) {
            console.log(error)
        }
    }

    async authorizeUser(username, password) {
        try {
            const result = await link.post(`/Users/login`, {
                'username': username,
                'password': password
            })
            await AsyncStorage.mergeItem('@token', result.data.id)
            // console.log('!!!')
            // console.log(await AsyncStorage.getItem('@token'))
            // console.log('!!!')
        } catch (error) {
            console.log(error.message)
        }
    }

    // Получить список пользователей
    logOut() {
        // API_KEY = ''
        console.log('logout')
    }
}

export const usersStore = new Users();