import { useEffect, useState } from 'react'
import { usersApi } from '../../api'
import { Item, User } from '../../types'
import { api } from '../../utils'
import { useUsers } from '../useUsers'

const useItems = () => {

    const [itemsFB, setItemsFB] = useState<Item[]>()
    const [detail, setDetail] = useState<Item>()

    const { getUsers } = useUsers()

    useEffect(() => {
        if (!itemsFB) getItems()
    }, [itemsFB])

    const addItem = async (datos: Item) => {
        await usersApi.addItem(datos);
        getItems()
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

    const getDetail = async (idFB: string) => {
        const detail = await usersApi.getItem(idFB)
        setDetail(detail.data)
    }

    const itemExist = (id?: number) => {
        return itemsFB?.find((item) => item.id === id)
    }

    const addItemViewed = async (currentUser: Partial<User>, item: number) => {
        const itemsViewed = currentUser.viewed || [];
        itemsViewed.push(item)
        await api.patch(`/users/${currentUser.idDB}.json`, { viewed: itemsViewed })
        getUsers()
    }

    const deleteItemViewed = async (currentUser: Partial<User>, item: number) => {
        const itemsViewed = currentUser.viewed?.filter((i) => i !== item)
        await api.patch(`/users/${currentUser.idDB}.json`, { viewed: itemsViewed })
        getUsers()
    }

    const itemsViewed = (currentUser: Partial<User>, id: number) => {
        const itemViewed = currentUser.viewed?.find((item) => item === id)
        return itemViewed
    }



    return { addItem, getItems, deleteItem, itemsFB, setItemsFB, itemExist, getDetail, detail, setDetail, addItemViewed, itemsViewed, deleteItemViewed, seriesFilter, moviesFilter }
}

export { useItems }