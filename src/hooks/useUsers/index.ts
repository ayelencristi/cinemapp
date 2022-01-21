import { useContext } from "react"
import { usersApi } from "../../api"
import { AuthContext } from "../../context/Auth"
import { UsersContext } from "../../context/Users"
import { AddUserType } from "../../types/models"

const useUsers = () => {

    const { updateUsers } = useContext(UsersContext)

    const { currentUser, setCurrentUser } = useContext(AuthContext)

    const addUser = async (datos: AddUserType) => {
        await usersApi.addUser(datos)
        getUsers()
    }

    const getUsers = async () => {
        const response = await usersApi.getUsers()
        updateUsers(response)
    }

    const getUser = (id: string) => {

    }

    return { addUser, getUsers, getUser }
}


export { useUsers }