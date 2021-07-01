import { makeObservable, observable, computed, action } from 'mobx';
import link from '../API_CONNECT';
import { usersStore } from './usersStore';

class Notes {
    allNotes = []
    awf = undefined

    constructor() {
        makeObservable(this, {
            allNotes: observable,
            getNotes: action,
            addNote: action,
            deleteNote: action,
            patchNote: action,
            getNoteByID: action,
            count: computed
        })
    }
    // Получить список заметок
    async getNotes() {
        try {
            const response = await link.get(`/tasks`)
            this.allNotes = response.data // WARN [MobX] Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: Notes@3.allNotes
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }
    // Добавить новую заметку
    async addNote(note) {
        try {
            console.log(usersStore.token)
            console.log(note)
            // back
            await link.post(`/tasks`, {
                'title': note.noteName,
                'body': note.noteText
            })

            // получить обновленный список заметок
            this.getNotes()
        } catch (error) {
            console.log(error.message)
        }
    }
    // Удалить заметку
    async deleteNote(id) {
        // temporary store
        this.allNotes = this.allNotes.filter(note => note.id !== id)
        // back
        try {
            await link.delete(`/tasks/${id}`)
        } catch (error) {
            console.log(error.message)
        }
    }
    // Изменить заметку
    async patchNote(id, newNoteName, newNoteText) {
        try {
            // back
            await link.patch(`/tasks`, {
                "title": newNoteName,
                "body": newNoteText,
                "id": id
            })
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