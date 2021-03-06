import { FC } from "react"
import { Button, Card } from "react-bootstrap"
import { StarRating } from "../Rating"
import "./styless.css"
import { useItems, useMovies } from "../../../hooks"

const MoviesList: FC = () => {

    const { addItem, deleteItem, itemExist, itemsFB } = useItems()
    const { items } = useMovies()


    return (
        <div className="container">
            <div className="row">
                {items?.results.map((item) =>
                    <Card className="col-md-3 mb-4 bg-transparent">
                        <Card.Img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} className="img-responsive" />
                        <Card.Body className="row">
                            <Card.Title>{item.title || item.name}</Card.Title>
                            <StarRating rating={item.vote_average}></StarRating>
                            <Card.Text>{item.vote_average}</Card.Text>
                            {!itemExist(item.id) && (
                                <Button variant="dark" onClick={() => addItem(item)}> AGREGAR </Button>
                            )}
                            {itemExist(item.id) && (
                                <Button variant="danger" onClick={() => deleteItem(item.id)}> ELIMINAR </Button>
                            )}

                        </Card.Body>
                    </Card>)}
            </div>
        </div >
    )

}

export { MoviesList }