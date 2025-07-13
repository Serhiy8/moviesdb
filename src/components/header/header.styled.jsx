import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #151515;
  height: 65px;
  border-bottom: 1px solid #ffffff;
  @media(min-width: 768px){
    height: fit-content;
    padding: 8px 0;
  }
`

const InputThumb = styled.div`

  & input {
    display: none;

    &:checked ~ label::after {
      transform: rotate(45deg);
      bottom: 10px;
    }

    &:checked ~ label::before {
      transform: rotate(-45deg);
      top: 12px;
    }

    &:checked ~ label span {
      transform: rotate(-45deg);
      top: 12px;
    }
  }

    & label{
      display: none;
      margin-left: auto;

    @media (max-width: 768px){
        position: relative;
        display: block;
        height: 25px;
        width: 30px;
        top: 24px;
        right: 24px;
        z-index: 1;
    }
    &::before,
    &::after,
    span {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: white;
    transition: 0.3s;
    display: block;
    border-radius: 2px;
  }

  &::before{
    content: "";
    top: 0;
  }

  &::after{
    content: "";
    bottom: 0;
  }

  & span {
    top: 11px;
  }
}
  & > div {    
    position: absolute;
    top: 0;
    left: -100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    height: 100vh;
    background-color: #151515;
      @media(min-width: 768px){
        position: static;
        height: 100%;
        flex-direction: row;
        justify-content: space-between;
      }
  }
  & input:checked ~ div {
    left: 0;
  }

  & div > nav > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    font-size: 24px;
    font-weight: 700;
    @media (min-width: 768px){
      flex-direction: row;
    }
  }
`

const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  @media (min-width: 768px){
      padding: 6px 12px;
    }
`

const SignOutThumb = styled.div`
text-align: center;
@media (min-width: 768px){
  display: flex;
    align-items: center;
    gap: 24px;
}
& > button{
  align-self: center;
  margin-top: 16px;
  padding: 6px 12px;
  background: #00ffff;
  outline: none;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
  cursor: pointer;

  &:hover,
  &:focus{
    background-color: #00d4d4;
    box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff55;
  }
  @media (min-width: 768px){
    margin: 0;
}
  }
`

export {HeaderStyled, InputThumb, NavLinkStyled, SignOutThumb}
