import { FC } from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Rating } from ".."
import { Results } from "../../../types"
import "./styless.css"



type Props = {
    data?: Results | undefined
}

const MoviesList: FC<Props> = ({ data }) => {

    return (
        <div className="container">
            <div className="row">
                {data?.results.map(item =>
                    <Card className="col-md-3 mb-4 bg-transparent">
                        <Link to={`/details/${item.id}`} className="nav-link">
                            <Card.Img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} />
                            <Card.Body className="row">
                                <Card.Title>{item.title || item.name}</Card.Title>
                                <Rating stars={item.vote_average}></Rating>
                                <Card.Text>{item.vote_average}</Card.Text>
                                <Button variant="primary"></Button>
                            </Card.Body>
                        </Link>
                    </Card>)}
            </div>
        </div >
    )

}

export { MoviesList }