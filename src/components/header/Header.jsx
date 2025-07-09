import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/moviesdb">Movies</NavLink>
        <NavLink to="favorite">Fovorite</NavLink>
      </nav>
    </header>
  );
};
