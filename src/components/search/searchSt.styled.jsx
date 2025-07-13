import styled from "styled-components";

export const SearchThumb = styled.div`
    margin-bottom: 36px;
    & > form {
        display: flex;
        justify-content: center;
        gap: 8px;
        @media (min-width: 768px){
            justify-content: end;
        }
    }
    & > form > input {
        border: none;
        border-bottom: 1px solid #00ffff;
        outline: none;
        padding: 6px 12px;
        background-color: #2a2a2a;
        color: #00ffff;
    }
    & > form > button {
        align-self: center;
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
    }
`