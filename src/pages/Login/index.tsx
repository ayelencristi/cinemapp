import { FC } from "react"
import { LoginForm, Title, Wrapper } from "../../components"

const Login: FC = () => {
    return (
        <Wrapper hideHeader hideFooter>
            {/* <Title /> */}
            <LoginForm />
        </Wrapper>
    )
}

export { Login } 