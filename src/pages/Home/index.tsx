import { FC } from "react"
import { UserList, Wrapper } from "../../components"
import { WithAuth } from "../../hoc";

const HomePage: FC = () => {
    return (
        <Wrapper>
            <UserList />
        </Wrapper>
    )
}

export const Home = WithAuth(HomePage);