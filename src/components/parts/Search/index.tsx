import { FC } from "react"
import { Form } from "react-bootstrap"

type Props = {
    handleChange: (search: string) => void
}

const SearchMovies: FC<Props> = ({ handleChange }) => {
    return (
        <div className="container">
            <Form.Label>Search</Form.Label>
            <Form.Control type="text" onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}

export { SearchMovies }