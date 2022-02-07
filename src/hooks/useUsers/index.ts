import { useContext } from "react"
import { usersApi } from "../../api"
import { UsersContext } from "../../context/Users"
import { AddUserType } from "../../types/models"

const useUsers = () => {

    const { updateUsers } = useContext(UsersContext)

    // const { currentUser, setCurrentUser } = useContext(AuthContext)

    const addUser = async (datos: AddUserType) => {
        await usersApi.addUser(datos)
        getUsers()
    }

    const getUsers = async () => {
        const response = await usersApi.getUsers()
        updateUsers(response)
    }

    const deleteUser = async (id: string) => {
        await usersApi.deleteUser(id);
        getUsers()
    }

    return { addUser, getUsers, deleteUser }
}


export { useUsers }