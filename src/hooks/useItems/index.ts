import { FC } from "react";
import { getMovies } from "../../api/movies";
import { ItemList } from "../../components";
import { Item } from "../../types"


const useItems = () => {


    const getItems = async () => {
        const response = await getMovies()

    }

    return { getItems }
}

export { useItems }