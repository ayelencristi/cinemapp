import { moviesApi } from "../../api/movies";

const useItems = () => {

    const getItems = async () => {
        const response = await moviesApi.getMovies()
    }

    return { getItems }
}

export { useItems }