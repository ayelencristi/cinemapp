import { FC, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import { Item } from "../../../types"



type Props = {
    data?: Item[]
}

const MoviesList: FC<Props> = ({ data }) => {

    return (
        <div className="container">
            <div className="card-movies row">
                {data?.map(movie =>
                    <Card className="item" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={movie.poster_path} />
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>
                                {movie.vote_average}
                            </Card.Text>
                            <Card.Text>
                                {movie.vote_average}
                            </Card.Text>
                            <Button></Button>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>

    )
}

export { MoviesList }