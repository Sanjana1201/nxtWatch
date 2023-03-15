import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const VideoListContainer = styled.div`
    margin-top: 50px;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const ContentWrapper = styled.div`
    display: flex;
    height: 90vh;
    justify-content: stretch;
`

export const PageContentContainer = styled.div`
    overflow-y: auto;
    width: 85vw;
    background-color: ${props =>props.theme.backgroundDark};
    @media (max-width: 768px) {
        width: 100vw;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    margin: 10px;
`