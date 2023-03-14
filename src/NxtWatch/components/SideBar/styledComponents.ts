import { Link } from 'react-router-dom';
import styled from 'styled-components'

interface Props{
    active?: boolean;
}

export const SidebarWrapper = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 230px;
    position: relative;
    background-color: ${props => props.theme.wrapper}
`

export const SidebarLinks = styled.div<Props>`
    height: 50px;
    padding: 10px 30px;
    text-decoration: none;
    color: ${props => props.theme.textDark}
`

export const CustomIcons = styled.i`
    padding: 10px;
`

export const CustomSocialIcons = styled.img`
    width: 50px;
    padding: 10px;
`

export const CustomLink = styled(Link)`
    color:white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    &.hover{
        color: blue;
    };
    &.active{
        color: red;
    };
`

export const FooterDiv = styled.div`
    color: ${props => props.theme.textDark}
`