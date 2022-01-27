import { FC } from "react"
import { Wrapper } from "../../components"
import { UsersTable } from "../../components/parts"
import { WithAuth } from "../../hoc"

const UsersPage: FC = () => {
    return (
        <Wrapper>
            <UsersTable />
        </Wrapper>
    )
}

export const Users = WithAuth(UsersPage);