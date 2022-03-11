import { FC, useContext, useEffect } from "react"
import { Button, Table } from "react-bootstrap"
import { UsersContext } from "../../../context/Users";
import { useUsers } from "../../../hooks"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons"


const UsersTable: FC = () => {

    const { getUsers, deleteUser } = useUsers();
    const { users } = useContext(UsersContext)

    const handleClick = (idDB: string) => {
        deleteUser(idDB)
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <div className="container">
            <Table className="mt-3" variant="dark" striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(user => (
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                            <td>
                                <Button variant="dark" size="sm" onClick={() => handleClick(user.idDB)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export { UsersTable }
