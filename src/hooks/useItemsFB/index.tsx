import { useEffect, useState } from 'react'
import { usersApi } from '../../api'
import { Item, User } from '../../types'
import { api } from '../../utils'

const useItems = () => {

    const [itemsFB, setItemsFB] = useState<Item[]>()
    const [detail, setDetail] = useState<Item>()

    useEffect(() => {
        if (!itemsFB) getItems()
    }, [itemsFB])

    const addItem = async (datos: Item) => {
        await usersApi.addItem(datos);
        usersApi.getItems()
    }

    const getItems = async () => {
        const response = await usersApi.getItems()
        setItemsFB(response)
    }

    const deleteItem = async (id: number) => {
        await usersApi.deleteItem(id);
        getItems()
    }

    const moviesFilter = async () => {
        const response = await usersApi.getItems()
        const movies = response.filter((item) => item.media_type === 'movie')
        if (movies) {
            setItemsFB(movies)
        }
    }

    const seriesFilter = async () => {
        const response = await usersApi.getItems()
        const series = response.filter((item) => item.media_type === 'serie')
        if (series) {
            setItemsFB(series)
        }
    }

    const getDetail = async (id: string) => {
        const detail = await usersApi.getItem(id)
        setDetail(detail)
    }

    const itemExist = (id?: number) => {
        return itemsFB?.find((item) => item.id === id)
    }

    // const itemsViewed = (currentUser: Partial<User>, idFB?: string | undefined) => {
    //     const itemViewed = currentUser.viewed?.includes(idFB)
    // }



    return { addItem, getItems, deleteItem, moviesFilter, seriesFilter, itemsFB, setItemsFB, itemExist, getDetail, detail, setDetail }
}

export { useItems }