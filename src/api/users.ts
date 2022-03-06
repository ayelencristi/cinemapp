import { AddUserType, User, Item } from "../types/models"
import { api } from "../utils"
import { mapToArray } from '../helpers'
import { mapToArrayFB } from "../helpers/mapToArray"

const getUsers = async (): Promise<User[]> => {
    const response = await api.get('/users.json')
    return mapToArray(response.data)
}

const addUser = async (payload: AddUserType) => {
    await api.post('/users.json', payload)
}

const getUser = async (idDB: string): Promise<User> => {
    const response = await api.get<User>(`/users/${idDB}.json`);
    return response.data;
};

const deleteUser = async (idDB: string | undefined) => {
    await api.delete(`/users/${idDB}.json`);
}

const getItems = async (): Promise<Item[]> => {
    const response = await api.get('items.json')
    return mapToArrayFB(response.data)
}

const addItem = async (payload: Item) => {
    await api.post('/items.jason', payload)
}

const deleteItem = async (idFB: string | undefined) => {
    await api.delete(`items/${idFB}.json`)
}


const getItem = async (idFB: string | undefined) => {
    const response = await api.get<Item>(`/items/${idFB}.json`)
    return response.data
}

export const usersApi = { getUsers, addUser, getUser, deleteUser, addItem, deleteItem, getItems, getItem }