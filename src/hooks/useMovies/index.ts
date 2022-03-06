import { Search } from "material-ui-icons";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { searchMulti } from "../../api/moviesDB";
import { Item, Filter, Results } from "../../types"

const useMovies = () => {
    const params = new URLSearchParams(window.location.search)
    const page = parseInt(params.get("page")!) || 1
    const search = params.get("search") || undefined

    const [items, setItems] = useState<Results>()
    const [lastPage, setLastPage] = useState(1)

    const { push } = useHistory()

    useEffect(() => {
        searchMulti.getSearchMulti({ page, search }).then((response) => setItems(response))
    }, [page, search])

    useEffect(() => {
        searchMulti.getSearchMulti({ page, search }).then((response) => setLastPage(response.total_pages))
    }, [page, search])

    const setSearchParams = (input: string) => {
        params.set("search", input)
        push(`${window.location.pathname}?${params.toString()}`)
    }

    const setPageParams = (page: number) => {
        params.set("page", page.toString())
        push(`${window.location.pathname}?${params.toString()}`)
    }


    // const getTrailer = async (id: number | undefined, media_type: string) => {
    //     const response = await searchMulti.getTrailers(id, media_type)
    //     return response
    // }


    return { items, setItems, page, search, lastPage, setLastPage, setSearchParams, setPageParams }
}

export { useMovies }