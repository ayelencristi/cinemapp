import { FC } from "react"
import { Form } from "react-bootstrap"

const SearchMovies: FC = () => {
    return (
        <>
            <Form.Label>Search</Form.Label>
            <Form.Control
                type="searchMulti"
                id=""
            />
        </>
    )
}

export { SearchMovies }