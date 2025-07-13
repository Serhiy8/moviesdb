import styled from "styled-components";

const Thumb = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    & form > h2 {
        margin-bottom: 8px;
    }
    & form > p {
        margin-bottom: 8px;
    }

    & form > p > a{
        color: #00ffff;
        text-decoration: underline;
    }

    & form > div{
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    & form > div > input{
        border: none;
        border-bottom: 1px solid #00ffff;
        outline: none;
        padding: 6px 12px;
        background-color: #2a2a2a;
        color: #00ffff;
    }
    & form > div > button {
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

export {Thumb}