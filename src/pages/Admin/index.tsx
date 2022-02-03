import { FC, useEffect, useState } from "react"
import { ItemList, SearchMovies, Wrapper } from "../../components"
import { WithAuth } from "../../hoc"
import { useItems } from "../../hooks/useItems";
import { Item } from "../../types"


const AdminPage: FC = () => {

    const [items, setItems] = useState<Item[]>([]);

    const { getItems } = useItems()

    useEffect(() => {
        !items && setItems(getItems())
    }, [getItems])
    return (
        <Wrapper>
            <SearchMovies />
            <ItemList data={items} />
        </Wrapper>
    )
}

export const Admin = WithAuth(AdminPage);