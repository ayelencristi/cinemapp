import axios from 'axios'

const api = axios.create({
    baseURL: 'https://cinemapp-ada-default-rtdb.firebaseio.com/',
})


export { api } 