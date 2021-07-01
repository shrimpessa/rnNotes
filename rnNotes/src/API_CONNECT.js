import axios from 'axios';
import { API_KEY } from './API_KEY';
import { usersStore } from './store/usersStore';

export default axios.create({
    baseURL: `http://10.102.109.29:3000/api`,
    headers: {
        access_token: 'iMKgFpyzcXGayz5hBaXQrwwIwZQXBGJLhwFXhaEa0tAuNujA0x4JjexqkUGeDJZ6'
    }
})