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

const getUser = async (id: string): Promise<User> => {
    const response = await api.get<User>(`/users/${id}.json`);
    return response.data;
};

const deleteUser = async (id: string | undefined) => {
    const users = await getUsers()
    const findUser = users.find((user) => user.id === id)
    await api.delete(`/users/${findUser?.id}.json`);
}

export const usersApi = { getUsers, addUser, getUser, deleteUser }