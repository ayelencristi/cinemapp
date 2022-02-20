import { FC } from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Rating } from ".."
import { Item } from "../../../types"
import "./styless.css"



type Props = {
    data?: Item[]
}

const MoviesList: FC<Props> = ({ data }) => {

    return (
        <div className="container">
            <div className="row">
                {data?.map(movie =>
                    <Card className="col-md-3 mb-4 bg-transparent">
                        <Link to={`/details/${movie.id}`} className="nav-link">
                            <Card.Img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            <Card.Body className="row">
                                <Card.Title>{movie.title || movie.name}</Card.Title>
                                <Rating stars={movie.vote_average}></Rating>
                                <Card.Text>{movie.vote_average}</Card.Text>
                                <Button variant="primary"></Button>
                            </Card.Body>
                        </Link>
                    </Card>)}
            </div>
        </div >
    )

}

export { MoviesList }