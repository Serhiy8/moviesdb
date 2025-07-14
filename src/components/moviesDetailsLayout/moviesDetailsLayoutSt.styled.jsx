import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Thumb = styled.div`
  padding-top: 65px;
  padding-bottom: 32px;
`
const CardThumb = styled.div`
  & img {
    width: 100%;
    border-radius: 8px;
    box-shadow: ${({theme}) => theme.colors.btnShadow};
  }
  
  & > div > img {
    @media (min-width: 768px){
      width: 200px;
    }
  }
`
export const CardTextThumb = styled.div`
    @media (min-width: 768px){
      display: flex;
      gap: 20px;
    }
`

const TextThumb = styled.div`

  & h2{
    font-size: 32px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  & ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`

const SpanStyled = styled.span`
  font-weight: 700;
  font-style:italic;
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  font-size: 24px;
  & a {
    padding: 8px 16px;
    display: block;
    border: 1px solid ${({theme}) => theme.colors.white};
    border-radius: 8px;
    color: ${({theme}) => theme.colors.white};

    &.active,
    &:hover,
    &:focus {
      color: ${({theme}) => theme.colors.btnHover};
      border-color: ${({theme}) => theme.colors.btnHover};
    }

  }
`
const FavoriteBtn = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid ${({theme}) => theme.colors.white};
  border-radius: 8px;
  cursor: pointer;
  color: ${({ $addtofavorite, theme }) => ($addtofavorite ? theme.colors.backgroundBtn : theme.colors.white)};
  &:hover {
    border-color: ${({theme}) => theme.colors.btnHover};
  }
  & svg {
    fill: ${({ $addtofavorite, theme }) => ($addtofavorite ? theme.colors.backgroundBtn : theme.colors.white)};
    transition: fill 0.3s ease;
  }

  transition: color 0.3s ease, border-color 0.3s ease;
`

export { Thumb, CardThumb,TextThumb, SpanStyled, List, FavoriteBtn };