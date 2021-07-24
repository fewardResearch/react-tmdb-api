// React
import type { FC, ReactElement } from 'react';

// Interface
import IMovieCard, { IMovie } from './index.d';

// Utils
import { imagePath } from '../../utils/UI';

const MovieCard: FC<IMovieCard> = ({
    movie
}: IMovieCard): ReactElement<IMovieCard> => {    
    return(
        <div className="relative" movie-id={movie.id}>
            <div>
                <img src={imagePath(movie.poster_path)} alt={movie.overview} className="max-w-full mx-auto block" />
            </div>
            <div className="py-5">
                <h1 className="text-2xl font-semibold mb-2">{movie.title}</h1>
                {movie.overview.length > 0 && <p className="mb-5 text-gray-400 h-16 overflow-hidden leading-5">{movie.overview}</p>}
                <ul>
                    <li>
                        <strong>Original Title: </strong> <span>{movie.original_title}</span>
                    </li>
                    <li>
                        <strong>Language: </strong> <span>{movie.original_language}</span>
                    </li>
                    <li>
                        <strong>Vote Count:</strong> <span>{movie.vote_count}</span>
                    </li>
                    <li>
                        <strong>Release Date:</strong> <span>{movie.release_date}</span>
                    </li>
                </ul>
                <div className="absolute z-10 bg-red-600 text-white rounded-full text-lg top-5 right-5 px-2 py-1">{movie.vote_average}</div>
            </div>
        </div>
    );
};

export default MovieCard;

export type {
    IMovieCard,
    IMovie
}