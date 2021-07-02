import axios from 'axios';

export default axios.create({
    baseURL: `http://10.102.109.29:3000/api`
})