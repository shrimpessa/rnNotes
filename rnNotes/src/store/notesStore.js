import { makeObservable, observable, computed, action } from 'mobx';
import link from '../API_CONNECT';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TEXT_STUBS } from '../components/constants/TEXT_STUBS';
import { AppAlert } from '../components/ui/AppAlert';
import { usersStore } from './usersStore';

class Notes {
    allNotes = []

    constructor() {
        makeObservable(this, {
            allNotes: observable,
            setAllNotes: action,
            getNotes: action,
            addNote: action,
            deleteNote: action,
            patchNote: action,
            getNoteByID: action,
            count: computed
        })
    }

    setAllNotes(notes) {
        this.allNotes = notes
    }

    // Получить список заметок
    async getNotes() {
        try {
            await link.get(`/tasks`, {
                headers: {
                    access_token: await AsyncStorage.getItem('@token')
                }
            })
            .then(response => {
                console.log('res: ' + response.data)
                this.setAllNotes(response.data)})
            .catch(error => {
                console.log('message: ' + error.response.status)
                AppAlert(
                    TEXT_STUBS.text_authorisation_error, 
                    TEXT_STUBS.text_notLoggedUser
                )
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    // Добавить новую заметку
    async addNote(note, navigation) {
        try {
            console.log(usersStore.isAuthorized)
            !usersStore.isAuthorized 
                // сделать запрос, если пользователь авторизован
                ? await link.post(`/tasks`, {
                    'title': note.noteName,
                    'body': note.noteText
                },
                {
                    headers: {
                        access_token: await AsyncStorage.getItem('@token')
                    }
                })
                .then(
                    AppAlert(
                        TEXT_STUBS.text_noteAdded
                    ),
                    navigation.navigate('MainScreen')
                )
                // иначе перевести на главный экран (алерт об ошибке)
                : navigation.navigate('MainScreen')
            // получить обновленный список заметок
            this.getNotes()
        } catch (error) {
            console.log(error.message)
        }
    }
    // Удалить заметку
    async deleteNote(id) {
        this.allNotes = this.allNotes.filter(note => note.id !== id)
        try {
            await link.delete(`/tasks/${id}`, {
                headers: {
                    access_token: await AsyncStorage.getItem('@token')
                }
            })
            .catch(error => {
                console.log('message: ' + error.response.status)
                AppAlert(
                    TEXT_STUBS.text_authorisation_error, 
                    TEXT_STUBS.text_notLoggedUser
                )
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    // Изменить заметку
    async patchNote(id, newNoteName, newNoteText, navigation) {
        try {
            !usersStore.isAuthorized
                ? await link.patch(`/tasks`, {
                    "title": newNoteName,
                    "body": newNoteText,
                    "id": id
                },
                {
                    headers: {
                        access_token: await AsyncStorage.getItem('@token')
                    }
                })
                .then(
                    AppAlert(
                        TEXT_STUBS.text_editNote
                    ),
                    navigation.navigate('MainScreen')
                )
                : navigation.navigate('MainScreen')
            // получить обновленный список заметок
            this.getNotes()
        } catch (error) {
            console.log(error.message)
        }
    }
    // Получить заметку по id
    getNoteByID(id) {
        const thisNote = this.allNotes.filter(note => {
            if (note.id === id) {
                return note
            }
        })
        return thisNote[0]
    }
    // получить количество заметок
    get count() {
        return this.allNotes.length
    }
}

export const notesStore = new Notes();