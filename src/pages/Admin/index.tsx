import { FC, useEffect } from "react"
import { Pagination } from "react-bootstrap";
import { MoviesList, Wrapper, SearchMovies, PaginationDiv } from "../../components"
import { WithAuth } from "../../hoc"
import { useMovies } from "../../hooks/useMovies";


const AdminPage: FC = () => {

    const { setSearchParams } = useMovies();

    // useEffect(() => {
    //     getMultiMovies({ page, search })
    // }, [page, search])

    return (
        <Wrapper>
            <SearchMovies handleChange={setSearchParams} />
            <MoviesList />
            <PaginationDiv />
        </Wrapper>
    )
}

export const Admin = WithAuth(AdminPage);