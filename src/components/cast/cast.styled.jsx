import styled from "styled-components";

const Thumb = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
`

const List = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    @media (min-width: 768px){
        justify-content: center;
    }
    & li {
        width: calc(50% - 10px);
        display: flex;
        flex-direction: column;
        gap: 8px;
        & img {
            box-shadow: 0 0 5px white, 0 0 10px white;
        }
        @media (min-width: 768px){
            width: 150px;
            justify-content: space-between;
        }
    }
`

export {List, Thumb}