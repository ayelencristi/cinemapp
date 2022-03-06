import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { searchMulti } from "../../api/moviesDB";
import { Item, Filter, Results } from "../../types"
import { apiMovies } from "../../utils";

const useMovies = () => {
    const params = new URLSearchParams(window.location.search)
    const page = parseInt(params.get("page")!) || 1
    const search = params.get("search") || undefined

    const [items, setItems] = useState<Results>()
    const [lastPage, setLastPage] = useState(1)

    const { push } = useHistory()


    const getMultiMovies = async ({ page, search }: Filter): Promise<Results> => {
        let response
        if (search) {
            response = await searchMulti.getSearchMulti({ page, search })
        } else {
            response = await searchMulti.getMovies({ page, search })
        }
        setItems(response)
        return response
    }

    const setSearchParams = (input: string) => {
        params.set("search", input)
        push(`${window.location.pathname}?${params.toString()}`)
    }

    const setPageParams = (page: number) => {
        params.set("page", page.toString())
        push(`${window.location.pathname}?${params.toString()}`)
    }


    const getTrailer = async (id: number | undefined) => {
        const response = await searchMulti.getTrailer(id)
        return response
    }


    return { items, setItems, page, search, lastPage, getMultiMovies, setLastPage, setSearchParams, setPageParams, getTrailer }
}

export { useMovies }