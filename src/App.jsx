import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/header/Header';
import { Home } from './page/Home';
import { Signup } from './page/Signup';
import { Signin } from './page/Signin';
import { useContext } from 'react';
import { SessionContext } from './context/SessionContext';
import { Movies } from './page/Movies';
import MovieDetails from './page/MovieDetails';
import { Cast } from './components/cast/Cast';
import { Favorite } from './page/Favorite';
import { PrivateRoute } from './components/operations/PrivateRoute';

function App() {

  const session = useContext(SessionContext);
  
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home /> } />
        <Route element={<PrivateRoute />}>
          <Route path="favorite" element={<Favorite />}/>
          <Route path="favorite/movies/:id" element={ <MovieDetails />}>
            <Route path="cast" element={<Cast />}/>
          </Route>
        </Route>
        
        <Route path="movies" element={<Movies />}/>
        <Route path="movies/:id" element={ <MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
        </Route> 
        <Route path="signup" element={!session ? <Signup/>:<Navigate to='/'/>}/>
        <Route path="signin" element={!session ? <Signin />:<Navigate to='/'/>}/>
      </Route>
    </Routes>
  );
}

export {App}
