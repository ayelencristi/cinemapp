import { FC } from "react"
import { MoviesItems, Wrapper } from "../../components"
import { WithAuth } from "../../hoc";

const MoviesPage: FC = () => {
    return (
        <Wrapper>
            <MoviesItems />
        </Wrapper>
    )
}

export const Movies = WithAuth(MoviesPage);