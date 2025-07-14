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
    box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
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
    border: 1px solid #ffffff;
    border-radius: 8px;
    color: #ffffff;

    &.active {
      color: #00ffff;
      border-color: #00ffff;
    }

  }
`
const FavoriteBtn = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  cursor: pointer;
  color: ${({ $addtofavorite }) => ($addtofavorite ? '#00ffff' : '#ffffff')};

  & svg {
    fill: ${({ $addtofavorite }) => ($addtofavorite ? '#00ffff' : '#ffffff')};
    transition: fill 0.3s ease;
  }

  transition: color 0.3s ease, border-color 0.3s ease;
`

export { Thumb, CardThumb,TextThumb, SpanStyled, List, FavoriteBtn };