import { Item } from '../types';
import { apiMovies } from '../utils';


const getMovies = async (): Promise<Item[]> => {
    const response = await apiMovies.get('/movie/top_rated?');

    return response.data.results
};


export const moviesApi = { getMovies }; 