import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Thumb = styled.div`
margin: 0 auto;
text-align: center;
padding: 100px 0 35px 0;
max-width: 475px;
& h1 {
    margin-bottom: 36px;
}
& ul {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    @media (min-width: 768px){
        gap:20px;
        justify-content: center;
    }
} 
& ul > li {    
    box-shadow: ${({theme}) => theme.colors.cardBoxShadow};
    border-radius: 16px;
    width: calc(50% - 16px);
    @media (min-width: 768px){
        width: 200px;
    }
}
& ul > li:hover,
& ul > li:active {    
    box-shadow: ${({theme}) => theme.colors.cardBoxShadowHover};
    border-radius: 16px;
} 
    @media (min-width: 768px){
        max-width: 100%;
    }
`

export const NavLinkStyled = styled(NavLink)`
    display: block;
    color: ${({theme}) => theme.colors.white};
    & img {
        width: 100%;
        max-width: 475px;
        margin: 0 auto;
        border-radius: 16px 16px 0 0;
    @media (min-width: 768px){
        width: 200px;
        height: 300px;
    }
    }
    & div {
        display: flex;
        gap: 16px;
        flex-direction: column;
        padding: 24px 16px;
        border-top: 1px solid ${({theme}) => theme.colors.white};
    }
    & p+h2 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`
export const TextOverwrite = styled.p`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    @media (min-width: 768px){
        display: none;
    }
`