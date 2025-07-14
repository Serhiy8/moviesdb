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
        border-bottom: 1px solid ${({theme}) => theme.colors.backgroundBtn};
        outline: none;
        padding: 6px 12px;
        background-color: ${({theme}) => theme.colors.btnBorder};
        color: ${({theme}) => theme.colors.backgroundBtn};
    }
    & > form > button {
        align-self: center;
        padding: 6px 12px;
        background: ${({theme}) => theme.colors.backgroundBtn};
        outline: none;
        border: 1px solid ${({theme}) => theme.colors.btnBorder};
        border-radius: 4px;
        cursor: pointer;

        &:hover,
        &:focus{
            background-color: ${({theme}) => theme.colors.btnHover};
            box-shadow: ${({theme}) => theme.colors.btnShadow};
        }
    }
`