import { useState } from 'react'
import { usersApi } from '../../api'
import { Item } from '../../types'

const useItems = () => {

    const [itemsFB, setItemsFB] = useState<Item[]>()
    const [detail, setDetail] = useState<Item>()

    const addItem = async (datos: Item) => {
        await usersApi.addItem(datos);
        usersApi.getItems()
    }

    const getItems = async () => {
        const response = await usersApi.getItems()
        setItemsFB(response)
    }

    const deleteItem = async (idFB: string | undefined) => {
        await usersApi.deleteItem(idFB);
        getItems()
    }

    const getMoviesFilter = async () => {
        const response = await usersApi.getItems()
        const movies = response.filter((item) => item.media_type === 'movie')
        if (movies) {
            setItemsFB(movies)
        }
    }

    const getSeriesFilter = async () => {
        const response = await usersApi.getItems()
        const series = response.filter((item) => item.media_type === 'serie')
        if (series) {
            setItemsFB(series)
        }
    }

    const getDetail = async (idFB: string) => {
        const detail = await usersApi.getItem(idFB)
        setDetail(detail)
    }

    const itemExist = (id?: number) => {
        return itemsFB?.find((item) => item.id === id)
    }

    return { addItem, getItems, deleteItem, getMoviesFilter, getSeriesFilter, itemsFB, setItemsFB, itemExist, getDetail, detail, setDetail }
}

export { useItems }