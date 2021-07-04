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
    // Обновить список заметок
    setAllNotes(notes) {
        this.allNotes = notes
    }
    // Получить список заметок
    async getNotes() {
        try {
            const response = await link.get(`/tasks`, {
                headers: {
                    access_token: await AsyncStorage.getItem('@token')
                }
            })
            this.setAllNotes(response.data)
        } catch (error) {
            console.log('getNotes: ' + error)
            AppAlert(
                TEXT_STUBS.text_authorisation_error, 
                TEXT_STUBS.text_notLoggedUser
            )
        }
    }
    // Добавить новую заметку
    async addNote(note, navigation) {
        try {
            console.log(usersStore.isAuthorized)
            await link.post(`/tasks`, {
                'title': note.noteName,
                'body': note.noteText
            },
            {
                headers: {
                    access_token: await AsyncStorage.getItem('@token')
                }
            })
            this.getNotes() // получить обновленный список заметок
            AppAlert(
                TEXT_STUBS.text_noteAdded
            )
            navigation.navigate('MainScreen')
        } catch (error) {
            console.log('addNote: ' + error.message)
            AppAlert(
                TEXT_STUBS.text_authorisation_error, 
                TEXT_STUBS.text_notLoggedUser
            )
            navigation.navigate('MainScreen')
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
            AppAlert(
                TEXT_STUBS.text_deleteNote,
                TEXT_STUBS.text_noteDeleted
            )
        } catch (error) {
            console.log('deleteNote: ' + error.message)
            AppAlert(
                TEXT_STUBS.text_authorisation_error, 
                TEXT_STUBS.text_notLoggedUser
            )
        }
    }
    // Изменить заметку
    async patchNote(id, newNoteName, newNoteText, navigation) {
        try {
            await link.patch(`/tasks`, {
                "title": newNoteName,
                "body": newNoteText,
                "id": id
            },
            {
                headers: {
                    access_token: await AsyncStorage.getItem('@token')
                }
            })
            this.getNotes() // получить обновленный список заметок
            navigation.navigate('MainScreen')
            AppAlert(
                TEXT_STUBS.text_editNote,
                TEXT_STUBS.text_changesSaved
            )
        } catch (error) {
            console.log('patchNote: ' + error.message)
            AppAlert(
                TEXT_STUBS.text_authorisation_error, 
                TEXT_STUBS.text_notLoggedUser
            )
            navigation.navigate('MainScreen')
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
    // Получить количество заметок
    get count() {
        return this.allNotes.length
    }
}

export const notesStore = new Notes();