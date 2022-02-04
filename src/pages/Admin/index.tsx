import { FC, useEffect, useState } from "react"
import { SearchMovies, Wrapper } from "../../components"
import { MoviesList } from "../../components/parts";
import { WithAuth } from "../../hoc"
import { useMovies } from "../../hooks/useMovies";
import { Item } from "../../types"


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