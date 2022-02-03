import { FC, useState } from "react"
import { ItemList, SearchMovies, Wrapper } from "../../components"
import { WithAuth } from "../../hoc"

const AdminPage: FC = () => {

    return (
        <Wrapper>
            <SearchMovies />
            <ItemList data={items} />
        </Wrapper>
    )
}

export const Admin = WithAuth(AdminPage);

// ItemList lleva una prop pero no estoy segura como pasarla