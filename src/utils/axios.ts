import axios from 'axios'

const api = axios.create({
    baseURL: 'https://cinemapp-ada-default-rtdb.firebaseio.com/',
})


const apiMovies = axios.create({
    baseURL: '',
    params: {
        api_key: ''
    }
})

export { api } 