import { FC, useEffect } from "react"
import { Pagination } from "react-bootstrap";
import { MoviesList, Wrapper, SearchMovies, PaginationDiv } from "../../components"
import { WithAuth } from "../../hoc"
import { useMovies } from "../../hooks/useMovies";


const AdminPage: FC = () => {

    const { items, getMultiMovies, page, search, setSearchParams } = useMovies();

    useEffect(() => {
        getMultiMovies({ page, search })
    }, [page, search])

    return (
        <Wrapper>
            <SearchMovies handleChange={setSearchParams} />
            <MoviesList data={items} />
            <PaginationDiv />
        </Wrapper>
    )
}

export const Admin = WithAuth(AdminPage);