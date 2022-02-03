import { FC, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import { Item } from "../../../types"



type Props = {
    data?: Item[]
}

const ItemList: FC<Props> = ({ data }) => {

    return (
        <div className="container">
            <div className="card-movies row">
                {data?.map(item =>
                    <Card className="item" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.poster_path} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.vote_average}
                            </Card.Text>
                            <Card.Text>
                                {item.vote_average}
                            </Card.Text>
                            <Button></Button>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>

    )
}

export { ItemList }