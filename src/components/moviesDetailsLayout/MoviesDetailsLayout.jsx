import { NavLink, Outlet} from 'react-router-dom';
import { Suspense, useContext, useEffect, useRef, useState } from 'react';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import BackLink from '../backLink/BackLink';
import { Thumb, CardThumb, TextThumb, SpanStyled, List, FavoriteBtn, CardTextThumb } from './moviesDetailsLayoutSt.styled';
import { SessionContext } from '../../context/SessionContext';
import { addToFavorite, getFromFavorite, deleteFromFavorite } from '../operations/supabaseService';

const MovieDetailsLayout = ({backLinkHref, handleBackClick, dataMovie, location}) => {

    const session = useContext(SessionContext);
    const [isOnFavorite, setIsOnFavorite] = useState(false);
    const [favoriteList, setFavoriteList] = useState([]);
    const [castPath, setCastPath] = useState(false);
    const ref = useRef(location.pathname);

    useEffect (() => {

      const fetchFavorite = async() => {
        const res = await getFromFavorite();
        if(res){
          setFavoriteList(res)
        }
      }
      fetchFavorite();
      setCastPath(false)
    }, [])

    useEffect(() => {
      if(favoriteList.length === 0 || !dataMovie){
        return;
      }
      const checked = favoriteList.some(el => Number(el.movie_id) === dataMovie.id);
      if(checked) {
        setIsOnFavorite(true)
      }
    }, [dataMovie, favoriteList])

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
              <CardTextThumb>
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
              </CardTextThumb>
              <List>
                <li>
                  <NavLink to={castPath ? `${ref.current}` : 'cast'} state={location.state} onClick={() => setCastPath(prev => !prev)}>
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