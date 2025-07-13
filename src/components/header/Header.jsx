import { NavLink, Outlet, useLocation } from "react-router-dom"
import { HeaderStyled, NavLinkStyled, InputThumb } from "./header.styled";
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
            <InputThumb>
                <input type="checkbox" name="" id="burger-menu" checked={checked} onChange={handleChange}/>
                <label htmlFor="burger-menu">
                  <span></span>
                </label>
                <div>                   
                <nav>
                  <ul>
                    <li><NavLinkStyled to="/">Home</NavLinkStyled></li>
                    {session && <li><NavLinkStyled to="favorite">Favorite</NavLinkStyled></li>}                 
                    {!session && <li><NavLinkStyled to="signin">Sign in</NavLinkStyled></li>}
                    {!session && <li><NavLinkStyled to="signup">Sign up</NavLinkStyled></li>}
                  </ul>
                </nav>               
              </div>  
            </InputThumb>             
                    
          </div>
          </HeaderStyled>
        <Outlet />
      </>
      
      
    );
}