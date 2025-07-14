import { NavLinkStyled, Thumb, TextOverwrite } from "../listMoviesSt.styled";
import { Search } from "../search/Search";

export const SearchMovie = ({location, data, loading}) =>{

    return(
        <Thumb>
        <h1>Movies</h1>
        <Search />
            {loading ? <div>Loading...</div> : data.length !== 0 ? <ul>
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
            </ul> : <div>No movies by key word.</div>}
        </Thumb>
    )
}