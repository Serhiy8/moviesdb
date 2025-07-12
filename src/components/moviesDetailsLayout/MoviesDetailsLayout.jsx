import { NavLink, Outlet} from 'react-router-dom';
import { Suspense, useContext, useEffect, useState } from 'react';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import BackLink from '../backLink/BackLink';
import { Thumb, CardThumb, TextThumb, SpanStyled, List, FavoriteBtn } from './moviesDetailsLayoutSt.styled';
import { SessionContext } from '../../context/SessionContext';
import { addToFavorite, getFromFavorite, deleteFromFavorite } from '../operations/authService';

const MovieDetailsLayout = ({backLinkHref, handleBackClick, dataMovie, location}) => {

    const session = useContext(SessionContext);
    const [isOnFavorite, setIsOnFavorite] = useState(false);
    const [favoriteList, setFavoriteList] = useState([])

    useEffect (() => {

      const fetchFavorite = async() => {
        const res = await getFromFavorite();
        if(res){
          setFavoriteList(res)
        }
      }
      fetchFavorite()
    }, [])

    useEffect(() => {
      if(favoriteList.length === 0 || !dataMovie){
        return;
      }
      const checked = favoriteList.some(el => Number(el.movie_id) === dataMovie.id);
      if(checked) {
        setIsOnFavorite(true)
      }
    }, [dataMovie, favoriteList, favoriteList.length])

    if (!dataMovie) {
            return <p>Loading...</p>;
    }

    const {id, poster_path, title, overview, vote_average} = dataMovie;

    const handlefavorite = async() => {
      if(!session){
        return;
      }

      const data = await getFromFavorite();

      if(data.length !== 0) {
        const checkIsOnList = data.some(el => Number(el.movie_id) === id);
        if(checkIsOnList) {
          console.log(String(id))
          await deleteFromFavorite(String(id))
          setIsOnFavorite(false)
          return;
        }  
      }
      
      await addToFavorite({
          user_id: session.user.id,
          movie_id: id,
          poster_path,
          title,
          overview,
          vote_average
        });
        setIsOnFavorite(true)
    }

    return (
      <Thumb>
        <BackLink to={backLinkHref} onClick={handleBackClick}>
          Back to movies
        </BackLink>
          {dataMovie && (
            <CardThumb>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${dataMovie.poster_path}`}
                  alt=""
                />
                <TextThumb>
                  <h2>{dataMovie.title}</h2>
                  <ul>
                    <li>
                      <p><SpanStyled>Vote average:</SpanStyled> {`${dataMovie.vote_average}`}</p>
                    </li>
                    <li>
                      <p>
                        <SpanStyled>Overview:</SpanStyled>
                        <br />
                        {dataMovie.overview}
                      </p>
                    </li>
                    <li>
                      <p>
                        <SpanStyled>Genres:</SpanStyled>
                        <br />
                        {dataMovie.genres.map((el) => el.name).join(" ")}
                      </p>
                    </li>
                  </ul>
                </TextThumb>
              </div>
              <List>
                <li>
                  <NavLink to="cast" state={location.state}>
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink to="reviews" state={location.state}>
                    Reviews
                  </NavLink>
                </li>
                <li>
                  <FavoriteBtn onClick={handlefavorite} $addtofavorite={isOnFavorite}>{!isOnFavorite ? <CiStar /> : <FaStar />}Favorite</FavoriteBtn>
                </li>
              </List>

              <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </Suspense>
            </CardThumb>
          )}
      </Thumb>
    );
}

export default MovieDetailsLayout;