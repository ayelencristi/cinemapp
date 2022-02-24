import { FC, useEffect } from "react"
import { Form } from "react-bootstrap"
import { useMovies } from "../../../hooks"

type Props = {
    handleChange: (search: string) => void
}

const SearchMovies: FC<Props> = ({ handleChange }) => {

    const { getMultiMovies, page, search } = useMovies()

    useEffect(() => {
        getMultiMovies({ page, search })
    }, [page, search])
    return (
        <div className="container">
            <Form.Label>Search</Form.Label>
            <Form.Control type="text" onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}

export { SearchMovies }