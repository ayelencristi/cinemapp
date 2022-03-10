import { FC } from "react"
import { Wrapper } from "../../components"
import { WithAuth } from "../../hoc";

const MoviesPage: FC = () => {
    return (
        <Wrapper>

        </Wrapper>
    )
}

export const Movies = WithAuth(MoviesPage);