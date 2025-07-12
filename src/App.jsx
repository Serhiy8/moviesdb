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

function App() {

  const session = useContext(SessionContext);
  
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home /> } />
        <Route path="favorite" element={session ? <Favorite /> : <Navigate to="/" />}/>
        <Route path="movies" element={<Movies />}/>
        <Route path="movies/:id" element={ <MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
        </Route> 
        <Route path="signup" element={<Signup/>}/>
        <Route path="signin" element={<Signin />}/>
      </Route>
    </Routes>
  );
}

export {App}
