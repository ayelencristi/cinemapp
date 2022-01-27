import { FC } from "react"
import { Wrapper } from "../../components"
import { WithAuth } from "../../hoc";

const HomePage: FC = () => {
    return (
        <Wrapper>

        </Wrapper>
    )
}

export const Home = WithAuth(HomePage);