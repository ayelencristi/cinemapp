import { FC } from "react"
import { DetailCard, Wrapper } from "../../components";
import { WithAuth } from "../../hoc";

const DetailsPage: FC = () => {
    return (
        <Wrapper>
            <DetailCard />
        </Wrapper>
    )
}

export const Details = WithAuth(DetailsPage);