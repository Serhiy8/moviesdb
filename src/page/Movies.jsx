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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setParams(searchParams.get('query'));
        if(params !== ''){            
            setLoading(true)
            const fetchMoviesByQuery = async () => {
                try {
                    const data = await fetchMovies(url, {query: params});
                    if(data){
                    setMovies(data.results);
                    setLoading(false)
                }
                } catch (error) {
                    console.error(error)
                }finally{
                    setLoading(false)
                }
                
                
            }
            fetchMoviesByQuery();
        }
    }, [params, searchParams])


    return(
        <div className="container">
            <SearchMovie location={location} data={movies} loading={loading}/>
        </div>
    )
} 