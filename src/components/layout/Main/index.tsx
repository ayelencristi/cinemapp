import { FC } from "react"

const Main: FC = ({children}) => {
    return (
        <main className="global-container">
            { children }
        </main>
    )
}

export { Main }