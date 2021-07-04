import { makeObservable, observable, action } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import link from '../API_CONNECT';
import { AppAlert } from '../components/ui/AppAlert';
import { TEXT_STUBS } from '../components/constants/TEXT_STUBS';
import { notesStore } from './notesStore';

class Users {
    allUsers = []
    isAuthorized = false

    constructor() {
        makeObservable(this, {
            allUsers: observable,
            isAuthorized: observable,
            setIsAuthorized: action,
            isTokenExists: action,
            authorizeUser: action,
            logOut: action
        })
    }

    setIsAuthorized (bool) {
        this.isAuthorized = bool
    }

    async isTokenExists() {
        try {
            const result = await AsyncStorage.getItem('@token') === null
            this.setIsAuthorized(!result) // false if not authorized
        } catch (error) {
            console.log(error)
        }
    }
    // Авторизация пользователя
    async authorizeUser(username, password, navigation) {
        try {
            const result = await link.post(`/Users/login`, {
                'username': username,
                'password': password
            })
            await AsyncStorage.setItem('@token', result.data.id)
            this.setIsAuthorized(true) // подтвердить авторизацию
            notesStore.getNotes() // получить обновленный список заметок
            navigation.navigate('MainScreen')
            AppAlert(
                TEXT_STUBS.text_success,
                TEXT_STUBS.text_successfullAuthorization
            )
        } catch (error) {
            console.log('authorizeUser: ' + error.message)
            AppAlert(
                TEXT_STUBS.text_authorisation_error, 
                TEXT_STUBS.text_wrongPasswordOrUsername
            )
        }
    }
    // Создание нового пользователя
    async createUser(username, email, password, navigation) {
        try {
            await link.post(`/Users`, {
                'username': username,
                'email': email,
                'password': password
            })
            AppAlert(
                TEXT_STUBS.text_success,
                TEXT_STUBS.text_successCreateNewUser
            )
            navigation.navigate('SignIn')
        } catch (error) {
            console.log('createUser: ' + error.message)
            AppAlert(
                TEXT_STUBS.text_failure, 
                TEXT_STUBS.text_failureUserAlreadyExist
            )
        }
    }

    // Получить список пользователей
    async logOut() {
        await AsyncStorage.setItem('@token', '')
        this.setIsAuthorized(false)
    }
}

export const usersStore = new Users();