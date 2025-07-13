import { NavLinkStyled, Thumb, TextOverwrite } from "../listMoviesSt.styled";
import { Search } from "../search/Search";

export const SearchMovie = ({location, data}) =>{

    return(
        <Thumb>
        <h1>Movies</h1>
        <Search />
            <ul>
                {data.map(movie => <li key={movie.id}>
                    <NavLinkStyled to={`/movies/${movie.id}`} state={{from: location}}>
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