import { makeObservable, observable, computed, action, flow } from 'mobx';
// "computed" - return the data that is based on the state in the store

class Notes {
    allNotes = []

    constructor() {
        makeObservable(this, {
            allNotes: observable,
            addNote: action,
            deleteNote: action,
            count: computed
        })
    }

    addNote(note) {
        this.allNotes = [...this.allNotes, { ...note, id: Math.random() }]
        console.log(note)
        console.log(this.allNotes)
    }

    deleteNote(id) {
        this.allNotes = this.allNotes.filter(note => note.id !== id)
    }

    get count() {
        return this.allNotes.length
    }
}

export const notesStore = new Notes();