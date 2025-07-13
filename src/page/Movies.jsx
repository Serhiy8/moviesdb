import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import fetchMovies from "../components/operations/tmdbMovies";
import { SearchMovie } from "../components/moviesSearch/MoviesSearch";

const url = "3/search/movie";

export const Movies = () => {
    const location = useLocation()
    const [searchParams, _] = useSearchParams();
    const [params, setParams] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setParams(searchParams.get('query'));
        if(params !== ''){
            const fetchMoviesByQuery = async () =>{
                const data = await fetchMovies(url, {query: params});
                if(data){
                    setMovies(data.results)
                }
            }
            fetchMoviesByQuery();
        }
    }, [params, searchParams])


    return(
        <div className="container">
            <SearchMovie location={location} data={movies}/>
        </div>
    )
} 