import { FC } from "react"
import { AddUsers, Wrapper } from "../../components"
import { WithAuth } from "../../hoc"

const SingUpPage: FC = () => {
    return (
        <Wrapper hideHeader>
            <AddUsers />
        </Wrapper>
    )
}

export const SingUp = WithAuth(SingUpPage); 