import { FC } from "react"
import { LoginForm, Wrapper } from "../../components"
import { WithAuth } from "../../hoc"

const LoginPage: FC = () => {
    return (
        <Wrapper hideHeader hideFooter>
            <LoginForm />
        </Wrapper>
    )
}

export const Login = WithAuth(LoginPage)  