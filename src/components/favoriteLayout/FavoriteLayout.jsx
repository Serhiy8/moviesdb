import { useEffect, useState } from "react";
import { NavLinkStyled, Thumb, TextOverwrite } from "../listMoviesSt.styled";
import { getFromFavorite } from "../operations/supabaseService";

export const FavoriteLayout = ({location}) => {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchMovies = async () =>{
            const data = await getFromFavorite();
            if(data.length === 0){
                console.log("No movies in a favorite list!");
                return;
            }
            setMovies(data);
        }

        fetchMovies();
    }, [])

    return(
            <Thumb>
            <h1>Favorite Movies!</h1>
                {movies.length !== 0 ? <ul>
                    {movies.map(movie => <li key={movie.movie_id}>
                        <NavLinkStyled to={`movies/${movie.movie_id}`} state={{from: location}}>
                            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" />
                            <div>
                                <h2>{movie.title}</h2>
                                <TextOverwrite>{movie.overview}</TextOverwrite>
                                <p>{movie.vote_average}</p>
                            </div>
                        </NavLinkStyled>
                    </li>)}
                </ul> : <div>No movies in a list!</div>}
            </Thumb>
        )
}