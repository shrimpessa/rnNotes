import { notesStore } from "./notesStore";

export const getNotes = async () => {
    try {
        await notesStore.getNotes()
    } catch (error) {
        console.log(error.message)
    }
}

export const getNoteByID = (id) => {
    try {
        return notesStore.getNoteByID(id)
    } catch (error) {
        console.log(error.message)
    }
}