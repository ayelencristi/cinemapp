import { FC } from "react"
import { LoginForm, Wrapper } from "../../components"

const Login: FC = () => {
    return (
        <Wrapper hideHeader hideFooter>
            <LoginForm />
        </Wrapper>
    )
}

export { Login } 