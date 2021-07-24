// React
import { useEffect } from 'react';
import type { FC, ReactElement } from 'react';

// Redux
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setPopularMovies } from '../../features/popularMovies';

// Types
import { Types, Product } from '../../types/enum'

// Utils
import { endpoint } from '../../utils/request';
import { getData } from '../../utils/request';

// Components
import MovieCard from '../MovieCard';
import PopularMovieList from '../PopularMovieList';

const Movies: FC = (): ReactElement => {
    const dispatch = useAppDispatch();

    const searchMovieList = useAppSelector((state) => state.search.value);
    const popularMovieList = useAppSelector((state) => state.popularMovies);

    useEffect(() => {
        getData(endpoint({
            type: Types.movies,
            name: Product.popular,
            page: 1
        })).then(data => dispatch(setPopularMovies(data)));
    }, [dispatch]);

    return(
        <>
            <PopularMovieList 
                movieList={popularMovieList.value[0]?.results} 
                total_pages={popularMovieList.value[0]?.total_pages}
                total_results={popularMovieList.value[0]?.total_results} 
                slider
                />

            <div className="md:flex md:flex-wrap md:-mx-5">
                {
                    searchMovieList.length > 0 && searchMovieList[0].results.map((movie) => (
                        <div className="md:w-1/2 lg:w-1/4 md:px-5 md:mb-10" key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Movies;