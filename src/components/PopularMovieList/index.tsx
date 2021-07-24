// React
import type { FC, ReactElement } from 'react';

// Interface
import IPopularMovieList from './index.d';

// Components
import MovieCard from '../MovieCard'
import Slider from '../Slider'

const PopularMovieList: FC<IPopularMovieList> = ({
    movieList,
    total_pages,
    total_results,
    slider
}: IPopularMovieList): ReactElement<IPopularMovieList> => {

    const settings = {
        slidesToShow: 4,
        slidesToScroll: 4,
        spaceBetween: 30,
    };

    return(
        <>
            {movieList?.length > 0 && <>
                {slider ? <Slider gutters={5} settings={settings}>
                    {movieList?.map((movie) => (
                        <div key={movie.id} className="px-5">
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </Slider> : <div className="md:flex md:flex-wrap md:-mx-5">
                    {
                        movieList?.map((movie) => (
                            <div className="md:w-1/2 lg:w-1/4 md:px-5 md:mb-10" key={movie.id}>
                                <MovieCard movie={movie} />
                            </div>
                        ))
                    }
                </div>}
            </>}
        </>
    );
};

export default PopularMovieList;