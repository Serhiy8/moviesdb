import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 0;
  z-index: 999;
  background-color: #151515;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & nav {
    display: flex;
    gap: 12px;
  }
`

const NavContainerStyled = styled.div`
  display: flex;
  gap: 20px;
  transition: .5s;
  position: fixed;
    left: 0;
    right: 0;
    background-color: #151515;
    padding-top: 300px;
    z-index: -1;
    flex-direction: column;
    text-align: center;
    left: -100vw;
    right: 100vw;
    & ul {
      display: flex;
      gap: 12px;
      flex-direction: column;
    }
`

const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
`

const LabelStyled = styled.label`
    display: none;

    @media (max-width: 784px){
        position: relative;
        display: block;
        height: 25px;
        width: 30px;
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
`

const InputStyled = styled.input`
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
    &:checked ~ div {
      left: 0;
      right: 0;
    }
`



export {HeaderStyled, NavContainerStyled, NavLinkStyled, LabelStyled, InputStyled, HeaderContainer}