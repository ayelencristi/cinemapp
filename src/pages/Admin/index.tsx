import { FC } from "react"
import { Wrapper } from "../../components"
import { WithAuth } from "../../hoc"

const AdminPage: FC = () => {
    return (
        <Wrapper>
            Admin
        </Wrapper>
    )
}

export const Admin = WithAuth(AdminPage);