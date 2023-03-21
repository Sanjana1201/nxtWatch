import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const VideoListContainer = styled.div`
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
`

export const ContentWrapper = styled.div`
    display: flex;
    height: 90vh;
    justify-content: stretch;
    @media (max-width: 1095px){
        height: auto;
    }
`

export const PageContentContainer = styled.div`
    overflow-y: auto;
    width: 85vw;
    background-color: ${props =>props.theme.backgroundDark};
    @media (max-width: 1095px) {
        width: 100vw;
        overflow-y: visible;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`

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
    border: 1px solid #7e858e;
`

export const SearchButton = styled.button`
    height: 29px;
    padding: 0 20px;
    opacity: 0.6;
    border: 1px solid #7e858e;
`