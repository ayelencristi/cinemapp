import { FC } from "react"
import { Wrapper } from "../../components"
import { UsersTable } from "../../components/parts"

const Users: FC = () => {
    return (
        <Wrapper>
            <UsersTable />
        </Wrapper>
    )
}

export { Users } 