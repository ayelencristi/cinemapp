import { useState } from 'react'
import { usersApi } from '../../api'
import { Item } from '../../types'

const useItems = () => {

    const [items, setItems] = useState<Item[]>()

    const addItem = async (datos: Item) => {
        await usersApi.addItem(datos);
        usersApi.getItems()
    }

    const getItems = async () => {
        const response = await usersApi.getItems()
        setItems(response)
    }

    const deleteItem = async (idFB: string) => {
        await usersApi.deleteItem(idFB);
        getItems()
    }

    const getMoviesFilter = async () => {
        const response = await usersApi.getItems()
        const movies = response.filter((item) => item.media_type === 'movie')
        if (movies) {
            setItems(movies)
        }
    }

    const getSeriesFilter = async () => {
        const response = await usersApi.getItems()
        const series = response.filter((item) => item.media_type === 'serie')
        if (series) {
            setItems(series)
        }
    }

    return { addItem, getItems, deleteItem, getMoviesFilter, getSeriesFilter, items, setItems }
}

export { useItems }