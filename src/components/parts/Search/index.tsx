import { FC } from "react"
import { Form } from "react-bootstrap"

type Props = {
    handleChange: (search: string) => void
}

const SearchMovies: FC<Props> = ({ handleChange }) => {

    return (
        <div className="container">
            <div className="m-4">
                <Form.Control type="text" onChange={(e) => handleChange(e.target.value)} placeholder="Búsqueda" />
            </div>
        </div>
    )
}

export { SearchMovies }