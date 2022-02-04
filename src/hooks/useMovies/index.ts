import { useState } from "react";
import { moviesApi } from "../../api/movies";
import { Item } from "../../types"

const useMovies = () => {

    const [movies, setMovies] = useState<Item[]>([])

    const getMovies = async () => {
        const response = await moviesApi.getMovies()
        setMovies(response)
    }

    const getMovie = (id: string) => { }


    return { movies, getMovies, getMovie }
}

export { useMovies }