import { FC, useEffect } from "react"
import { MoviesList, Wrapper, SearchMovies } from "../../components"
import { WithAuth } from "../../hoc"
import { useAuth } from "../../hooks";
import { useMovies } from "../../hooks/useMovies";


const AdminPage: FC = () => {

    const { movies, getMovies } = useMovies()

    useEffect(() => {

        !movies && getMovies()
    }, [getMovies])
    return (
        <Wrapper>
            <SearchMovies />
            <MoviesList data={movies} />
        </Wrapper>
    )
}

export const Admin = WithAuth(AdminPage);