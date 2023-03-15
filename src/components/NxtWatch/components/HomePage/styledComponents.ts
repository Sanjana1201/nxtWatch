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