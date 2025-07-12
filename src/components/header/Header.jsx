import { NavLink, Outlet, useLocation } from "react-router-dom"
import { HeaderStyled, NavContainerStyled, NavLinkStyled,  LabelStyled, InputStyled, HeaderContainer } from "./header.styled";
import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../context/SessionContext";

export const Header = () => {
  const [checked, setChecked] = useState(false)
  const session = useContext(SessionContext);
  const location = useLocation();

  useEffect(() => {
    setChecked(false)
  }, [location])

  const handleChange = () =>{
    setChecked(prev => !prev)
  }

    return (
      <>
        <HeaderStyled>
          <div className="container">
          <HeaderContainer>
            <nav>
                <NavLinkStyled to="/moviesdb">Home</NavLinkStyled>
                {session && <NavLinkStyled to="favorite">Favorite</NavLinkStyled>}
            </nav>
            <InputStyled type="checkbox" name="" id="burger-menu" checked={checked} onChange={handleChange}/>
            <LabelStyled htmlFor="burger-menu">
                <span></span>
            </LabelStyled>        
          <NavContainerStyled>
            <ul>
                <li><NavLinkStyled to="signin">Sign in</NavLinkStyled></li>
                <li><NavLinkStyled to="signup">Sign up</NavLinkStyled></li>
            </ul>               
          </NavContainerStyled>
          </HeaderContainer>
          </div>
        </HeaderStyled>
        <Outlet />
      </>
    );
}