import { makeObservable, observable, computed, action } from 'mobx';
import link from '../API_CONNECT';

class Notes {
    allNotes = []

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
    // получить список заметок
    async getNotes() {
        try {
            const response = await link.get(`/tasks`)
            this.allNotes = response.data // WARN [MobX] Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: Notes@3.allNotes
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }
    // добавить новую заметку
    async addNote(note) {
        try {
            // local store
            this.allNotes = [...this.allNotes, { ...note, id: Date.now() }]
            // back
            await link.post(`/tasks`, {
                'title': note.noteName,
                'body': note.noteText
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    // удалить заметку
    async deleteNote(id) {
        // local store
        this.allNotes = this.allNotes.filter(note => note.id !== id)
        // back
        try {
            await link.delete(`/tasks/${id}`)
        } catch (error) {
            console.log(error.message)
        }
    }
    // изменить заметку
    async patchNote(id, newNoteName, newNoteText) {
        try {
            // local store
            this.allNotes.map(note => {
                if (note.id === id) {
                    note.noteName = newNoteName,
                    note.noteText = newNoteText
                }
                return note
            })
            // back
            await link.patch(`/tasks`, {
                "title": newNoteName,
                "body": newNoteText,
                "id": id
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    // получить заметку по id
    getNoteByID(id) {
        const thisNote = this.allNotes.filter(note => {
            if (note.id === id) {
                return note
            }
        })
        return thisNote[0]
        // try {
        //     const response = await link.get(`/tasks/${id}`)
        //     return response.data
        // } catch (error) {
        //     console.log(error.message)
        // }
    }
    // получить количество заметок
    get count() {
        return this.allNotes.length
    }
}

export const notesStore = new Notes();