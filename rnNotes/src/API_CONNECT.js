import axios from 'axios';
import { API_KEY } from './API_KEY';

export default axios.create({
    baseURL: `http://10.102.109.29:3000/api`,
    headers: {
        access_token: API_KEY
    }
})