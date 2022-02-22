import { FC } from "react"
import { Wrapper } from "../../components"
import { WithAuth } from "../../hoc";

const SeriesPage: FC = () => {
    return (
        <Wrapper></Wrapper>
    )
}

export const Series = WithAuth(SeriesPage);