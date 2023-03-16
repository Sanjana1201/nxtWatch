import styled from "styled-components";

export const InputBoxDiv = styled.div`
    margin: 40px 40px 0 40px;
`
export const InputBox = styled.input`
    padding: 6px;
    width: 300px;
    @media (max-width: 1095px) {
        width: auto;
    };
    background-color: ${props =>props.theme.backgroundDark};
    color: ${props=>props.theme.textDark};
`

export const SearchButton = styled.button`
    padding: 6px 20px;
`