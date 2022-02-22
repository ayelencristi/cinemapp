import { FC, useEffect } from "react"
import { MoviesList, Wrapper, SearchMovies } from "../../components"
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
        </Wrapper>
    )
}

export const Admin = WithAuth(AdminPage);