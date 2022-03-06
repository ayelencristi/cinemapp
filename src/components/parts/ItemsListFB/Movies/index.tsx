import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { StarRating } from "../.."
import { useItems } from "../../../../hooks"

const MoviesListFilter = () => {

    const { itemsFB } = useItems()
    return (
        <div className="container">
            <div className="row">
                {itemsFB?.map(item =>
                    <Card className="col-md-3 mb-4 bg-transparent">
                        <Link to={`/details/${item.id}`} className="nav-link">
                            <Card.Img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} />
                            <Card.Body className="row">
                                <Card.Title>{item.title || item.name}</Card.Title>
                                <StarRating rating={item.vote_average}></StarRating>
                                <Card.Text>{item.vote_average}</Card.Text>
                                <Button variant="dark"></Button>
                            </Card.Body>
                        </Link>
                    </Card>)}
            </div>
        </div >
    )
}

export { MoviesListFilter }