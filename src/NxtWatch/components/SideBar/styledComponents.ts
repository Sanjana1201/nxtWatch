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
    width: 15vw;
    position: relative;
    background-color: ${props => props.theme.wrapper};
    @media (max-width: 1095px) {
        display: none;
    }
`

export const SidebarLinks = styled.div<Props>`
    padding: 6px 15px;
    text-decoration: none;
    font-size: 14px;
    color: ${props => props.theme.textDark}
`

export const CustomIcons = styled.i`
    padding: 10px;
    width: 30px;
    color:${props=>props.theme.iconColor};
`

export const CustomSocialIcons = styled.img`
    width: 30px;
    padding: 5px;
    cursor: pointer;
`

export const CustomLink = styled(Link)`
    color:white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    &.active{
        color: red;
    };
`

export const FooterDiv = styled.div`
    padding: 0 0 20px 20px;
    color: ${props => props.theme.textDark}
`

export const ContactUsDiv = styled.div`
    font-weight: 700;
`
export const ContactUsContent = styled.div`
    font-weight: 600;
`

export const SocialIconDiv = styled.div`
    margin: 20px 0;
`