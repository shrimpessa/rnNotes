import { makeObservable, observable, computed, action } from 'mobx';
import link from '../API_CONNECT';

class Users {
    allUsers = []

    // constructor() {
    //     makeObservable(this, {
    //         allNotes: observable,
    //         getNotes: action,
    //     })
    // }
    // Получить список пользователей
    async getNotes() {
        try {
            const response = await link.get(`/tasks`)
            this.allNotes = response.data // WARN [MobX] Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: Notes@3.allNotes
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const usersStore = new Users();