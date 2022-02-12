import { Item, Results, Filter } from '../types';
import { apiMovies } from '../utils';



const getMovies = async (): Promise<Item[]> => {
    const response = await apiMovies.get('/movie/top_rated?');

    return response.data.results
};

const getSearchMovies = async ({ page, search }: Filter): Promise<Results> => {
    const response = await apiMovies.get<Results>(`/search/multi=query=${search}&page=${page}`)
    return response.data
}

const getVideo = async (id: number | undefined) => {
    const response = await apiMovies.get(`/movie/${id}/videos`)
    return response.data.results
}


export const moviesApi = { getMovies, getSearchMovies, getVideo }; 