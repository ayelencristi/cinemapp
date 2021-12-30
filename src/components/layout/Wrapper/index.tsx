import { FC } from "react"
import { Header } from "../Header";
import { Main } from "../Main";
import { Footer } from "../Footer";

type Props = {
    id?: string,
    hideHeader?: boolean,
    hideFooter?: boolean
};

const Wrapper: FC<Props> = ({children, hideHeader, hideFooter}) => {
    return (
        <>
            { !hideHeader && <Header /> }

            <Main>
                { children }
            </Main>

            { !hideFooter && <Footer /> }
        </>
    )
}

export { Wrapper }