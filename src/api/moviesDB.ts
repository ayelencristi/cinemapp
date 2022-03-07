import { Item, Results, Filter } from '../types';
import { apiMovies } from '../utils';


const getSearchMulti = async ({ page, search }: Filter): Promise<Results> => {
    let response;
    if (search) {
        response = await apiMovies.get<Results>(`/search/multi?query=${search}&page=${page}`);
    } else {
        response = await apiMovies.get<Results>(`/movie/top_rated?page=${page}`);
    }
    return response.data
}

const getMovies = async ({ page }: Filter): Promise<Results> => {
    const response = await apiMovies.get(`'/movie/top_rated?page=${page}'`);
    return response.data
};


const getTrailers = async (id: number | undefined, media_type: string) => {
    let response
    if (media_type === "movie") {
        response = await apiMovies.get(`/movie/${id}/videos`)
    } else {
        response = await apiMovies.get(`/tv/${id}/videos`)
    }
    return response.data.results
}


export const searchMulti = { getMovies, getSearchMulti, getTrailers }; 