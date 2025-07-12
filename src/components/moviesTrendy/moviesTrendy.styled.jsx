import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Thumb = styled.div`
margin: 0 auto;
text-align: center;
max-width: 475px;
line-height: 1.5em;
letter-spacing: 2px;
& h1 {
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 34px;
}
& ul {
    display: flex;
    flex-direction: column;
    gap: 26px;
} 
& ul > li {    
    box-shadow: 0 0 10px white, 0 0 20px white;
    border-radius: 16px;
}
& ul > li:hover,
& ul > li:active {    
    box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
    border-radius: 16px;
}  
`

export const NavLinkStyled = styled(NavLink)`
    display: block;
    color: #ffffff;
    & img {
        width: 100%;
        max-width: 475px;
        margin: 0 auto;
        border-radius: 16px 16px 0 0;
    }
    & div {
        display: flex;
        gap: 16px;
        flex-direction: column;
        padding: 24px 16px;
        border-top: 1px solid #ffffff;
    }
    & h2 {
        font-size: 24px;
    }
    & p+h2 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`