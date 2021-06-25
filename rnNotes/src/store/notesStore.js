import { makeObservable, observable, computed, action, flow } from 'mobx';
// "computed" - return the data that is based on the state in the store

class Notes {
    allNotes = []

    constructor() {
        makeObservable(this, {
            allNotes: observable,
            addNote: action,
            deleteNote: action,
            editNote: action,
            getNoteByID: action,
            count: computed
        })
    }

    addNote(note) {
        this.allNotes = [...this.allNotes, { ...note, id: Date.now() }]
    }

    deleteNote(id) {
        this.allNotes = this.allNotes.filter(note => note.id !== id)
    }

    editNote(id, newNoteName, newNoteText) {
        console.log(id)
        console.log(newNoteName)
        console.log(newNoteText)
        this.allNotes.map(note => {
            if (note.id === id) {
                note.noteName = newNoteName,
                note.noteText = newNoteText
            }
            return note
        })
        console.log(this.allNotes)
    }

    getNoteByID(id) {
        const thisNote = this.allNotes.filter(note => {
            if (note.id === id) {
                return note
            }
        })
        return thisNote
    }

    get count() {
        return this.allNotes.length
    }
}

export const notesStore = new Notes();