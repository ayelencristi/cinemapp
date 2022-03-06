import { Item, Results, Filter } from '../types';
import { apiMovies } from '../utils';


const getSearchMulti = async ({ page, search }: Filter): Promise<Results> => {
    const response = await apiMovies.get<Results>(`/search/multi?query=${search}&page=${page}`)
    return response.data
}

const getMovies = async ({ page }: Filter): Promise<Results> => {
    const response = await apiMovies.get(`'/movie/top_rated?page=${page}'`);
    return response.data
};


const getTrailer = async (id: number | undefined) => {
    const response = await apiMovies.get(`/movie/${id}/videos`)
    return response.data.results
}


export const searchMulti = { getMovies, getSearchMulti, getTrailer }; 