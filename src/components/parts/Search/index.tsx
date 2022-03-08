import { FC, useEffect } from "react"
import { Form } from "react-bootstrap"
import { useMovies } from "../../../hooks"

type Props = {
    handleChange: (search: string) => void
}

const SearchMovies: FC<Props> = ({ handleChange }) => {

    // const { getMultiMovies, page, search } = useMovies()

    // useEffect(() => {
    //     getMultiMovies({ page, search })
    // }, [page, search])
    return (
        <div className="container">
            <div className="m-4">
                <Form.Control type="text" onChange={(e) => handleChange(e.target.value)} placeholder="Búsqueda" />
            </div>
        </div>
    )
}

export { SearchMovies }