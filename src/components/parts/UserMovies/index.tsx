import { FC } from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuth, useItems } from "../../../hooks"
import { StarRating } from "../Rating"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"


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
                                <Button variant="secondary" onClick={() => addItemViewed(currentUser, item.id)}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></Button>}
                            {currentUser?.role === "user" && itemsViewed(currentUser, item.id) &&
                                <Button variant="secondary" onClick={() => deleteItemViewed(currentUser, item.id)}><FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon></Button>}
                        </Card.Body>
                    </Card>)}
            </div>
        </div >
    )

}

export { UserList }