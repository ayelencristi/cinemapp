import { FC } from "react"
import { Card } from "react-bootstrap"
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
                    <Card className="bg-transparent text-center col-md-3">
                        <Link to={`/details/${movie.idDB}`} className="nav-link">
                            <Card.Img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            <Card.ImgOverlay className="info-card">
                                <Card.Title>{movie.title || movie.name}</Card.Title>
                                <Rating stars={movie.vote_average}></Rating>
                                <Card.Text>{movie.vote_average}</Card.Text>
                            </Card.ImgOverlay>
                        </Link>
                    </Card>
                )}
            </div>
        </div >
    )

}

export { MoviesList }