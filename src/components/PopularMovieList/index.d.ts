import type { IMovie } from '../MovieCard'

export default interface IPopularMovieList {
    movieList: IMovie[];
    total_pages: number;
    total_results: number;
    slider?: boolean;
}