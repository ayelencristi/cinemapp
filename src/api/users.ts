import { AddUserType, User } from "../types/models"
import { api } from "../utils"
import { mapToArray } from '../helpers'

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

export const usersApi = { getUsers, addUser, getUser, deleteUser }