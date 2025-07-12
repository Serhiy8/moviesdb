import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchMovies from '../components/operations/fetchMovies';
import MovieDetailsLayout from '../components/moviesDetailsLayout/MoviesDetailsLayout';


const URL = 'https://api.themoviedb.org/3/movie/';

const MovieDetails = () => {
  const [dataMovie, setDataMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const backLinkHref = location.state?.from ?? '/moviesdb';

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetchMovies(`${URL}${id}`);
        if (res) {
          setDataMovie(res);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [backLinkHref, id, location]);

  const handleBackClick = () => {
    navigate(backLinkHref);
  };

  return (
    <div className='container'>
      <MovieDetailsLayout backLinkHref={backLinkHref} handleBackClick={handleBackClick} dataMovie={dataMovie} location={location}/>
    </div>
  );
};

export default MovieDetails;
