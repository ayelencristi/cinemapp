import { FC } from "react"
import { Wrapper } from "../../components"
import { WithAuth } from "../../hoc";

const SeriesPage: FC = () => {
    return (
        <Wrapper>Series</Wrapper>
    )
}

export const Series = WithAuth(SeriesPage);