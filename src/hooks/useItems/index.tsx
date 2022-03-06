import { useState } from 'react'
import { usersApi } from '../../api'
import { Item } from '../../types'

const useItems = () => {

    const [items, setItems] = useState<Item[]>()
    const [detail, setDetail] = useState<Item>()

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

    const getDetail = async (idFB: string) => {
        const detail = await usersApi.getItem(idFB)
        setDetail(detail)
    }

    const itemExist = (id?: number) => {
        return items?.find((item) => item.id === id)
    }

    return { addItem, getItems, deleteItem, getMoviesFilter, getSeriesFilter, items, setItems, itemExist, getDetail, detail, setDetail }
}

export { useItems }