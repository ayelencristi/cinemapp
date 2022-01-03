import { FC, useContext, useEffect } from "react"
import { Table } from "react-bootstrap"
import { UsersContext } from "../../../context/Users";
import { useUsers } from "../../../hooks"


const UsersTable: FC = () => {

    const { getUsers } = useUsers();
    const { users } = useContext(UsersContext)

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
                    </tr>
                </thead>
                <tbody>
                    {users?.map(user => (
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export { UsersTable }
