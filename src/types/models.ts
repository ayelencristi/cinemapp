export type User = {
    id: string,
    name: string,
    lastname: string,
    email: string,
    password: string,
    birthdate: Date;
    sessionToken?: string
}

export type AddUserType = Omit<User, 'id'>;

export type Item = {
    poster_path?: string;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids?: number[];
    id: number;
    idDB?: string;
    original_title?: string;
    original_language?: string;
    title: string;
    backdrop_path?: string | null;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average: number;
    media_type?: string;
    watched?: string[]
};