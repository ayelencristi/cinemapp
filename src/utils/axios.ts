import axios from 'axios'

const api = axios.create({
    baseURL: 'https://cinemapp-ada-default-rtdb.firebaseio.com/',
})


const apiMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '2925626944a8c97f3cdc608fb886f9cc'
    }
})

export { api, apiMovies } 