import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchMovies from '../components/operations/tmdbMovies';
import MovieDetailsLayout from '../components/moviesDetailsLayout/MoviesDetailsLayout';


const URL = 'https://api.themoviedb.org/3/movie/';

const MovieDetails = () => {
  const [dataMovie, setDataMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetchMovies(`${URL}${id}`);
        if (res) {
          setDataMovie(res);
          
        }
      } catch (error) {
        console.error(error);
      }finally{
        setLoading(false)
      }
    };
    fetchDetails();
  }, [backLinkHref, id, location]);

  const handleBackClick = () => {
    navigate(backLinkHref);
  };

  return (
    <div className='container'>
      { !loading ? <MovieDetailsLayout backLinkHref={backLinkHref} handleBackClick={handleBackClick} dataMovie={dataMovie} location={location}/> : <div>Loading...</div>}
    </div>
  );
};

export default MovieDetails;
