import { FC } from "react"
import { WithAuth } from "../../hoc";

const DetailsPage: FC = () => {
    return (
        <>Detalle</>
    )
}

export const Details = WithAuth(DetailsPage);