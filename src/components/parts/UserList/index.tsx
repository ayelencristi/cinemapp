import { FC } from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuth, useItems } from "../../../hooks"
import { StarRating } from "../Rating"

const UserList: FC = () => {

    const { deleteItem, itemExist, itemsFB, addItemViewed, itemsViewed, deleteItemViewed } = useItems();
    const { currentUser } = useAuth()

    return (
        <div className="container">
            <div className="row">
                {itemsFB?.map((item) =>
                    <Card className="col-md-3 mb-4 bg-transparent">
                        <Link to={`/details/${item.idFB}`} className="nav-link">
                            <Card.Img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} className="img-responsive" />
                        </Link>
                        <Card.Body className="row">
                            <Card.Title>{item.title || item.name}</Card.Title>
                            <StarRating rating={item.vote_average}></StarRating>
                            <Card.Text>{item.vote_average}</Card.Text>
                            {currentUser?.role === 'admin' && itemExist(item.id) && (
                                <Button variant="danger" onClick={() => deleteItem(item.id)}> ELIMINAR </Button>
                            )}
                            {currentUser?.role === "user" && !itemsViewed(currentUser, item.id) &&
                                <Button variant="primary" onClick={() => addItemViewed(currentUser, item.id)}>VISTA</Button>}
                            {currentUser?.role === "user" && itemsViewed(currentUser, item.id) &&
                                <Button variant="dark" onClick={() => deleteItemViewed(currentUser, item.id)}>NO LA VI</Button>}
                        </Card.Body>
                    </Card>)}
            </div>
        </div >
    )

}

export { UserList }