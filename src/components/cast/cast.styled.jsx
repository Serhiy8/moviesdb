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
    & li {
        width: calc(50% - 10px);
        display: flex;
        flex-direction: column;
        gap: 8px;
        & img {
            box-shadow: 0 0 5px white, 0 0 10px white;
        }
    }
`

export {List, Thumb}