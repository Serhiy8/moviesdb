import { useEffect, useState } from "react"
import fetchMovies from "../operations/tmdbMovies";
import { NavLinkStyled, Thumb, TextOverwrite } from "../listMoviesSt.styled";
import { toast } from "react-toastify";
import { Search } from "../search/Search";

const url = "3/trending/movie/day";

export const MoviesTrendy = ({location}) =>{

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchPopularMovies =async () => {
            const data = await fetchMovies(url);
        if(!data){
            toast.error('Failed to download movies. Try downloading again.')
            return;
            }
        if(data.results.length === 0){
            toast.info('No movies in a list!')
        }
            setMovies(data.results)
        }
 
        fetchPopularMovies();
    }, [])

    return(
        <Thumb>
        <h1>Trendy movies</h1>
        <Search />
            <ul>
                {movies.map(movie => <li key={movie.id}>
                    <NavLinkStyled to={`movies/${movie.id}`} state={{from: location}}>
                        <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" />
                        <div>
                            <h2>{movie.title}</h2>
                            <TextOverwrite>{movie.overview}</TextOverwrite>
                            <p>Rating: {movie.vote_average}</p>
                        </div>
                    </NavLinkStyled>
                </li>)}
            </ul>
        </Thumb>
    )
}