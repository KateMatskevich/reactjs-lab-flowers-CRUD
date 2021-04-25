import axios from 'axios';

export const baseInstance = axios.create({
    baseURL: "https://reactlab-65854-default-rtdb.firebaseio.com"
});
