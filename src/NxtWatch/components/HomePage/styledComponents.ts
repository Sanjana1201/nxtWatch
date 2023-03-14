import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const VideoListContainer = styled.div`
    margin-top: 50px;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
`

export const ContentWrapper = styled.div`
    display: flex;
    height: 90vh;
    justifyContent: stretch;
`

export const PageContentContainer = styled.div`
    overflow-y: auto;
    width: 100%;
    background-color: ${props =>props.theme.backgroundDark}
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`