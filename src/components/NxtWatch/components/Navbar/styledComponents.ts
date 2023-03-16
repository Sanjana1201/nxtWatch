import styled from 'styled-components'

interface Props{
    MyColor?: string
}

export const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
    height: 10vh;
    background-color: ${props => props.theme.wrapper}
`
export const ProfileImg = styled.img`
    width: 40px;
`

export const CustomWhiteBgButton = styled.button<Props>`
    background-color: #ffffff;
    border: 1px solid ${props => props.MyColor? props.MyColor:"#ffffff"};
    color: ${props => props.MyColor? props.MyColor:"#ffffff"};
    padding: 7px 16px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    background-color: ${props => props.theme.wrapper}
`

export const ThemeButton = styled.button`
    background-color: #ffffff;
    border: 0;
    height: 30px;
    font-size: 30px;
    background-color: ${props =>props.theme.wrapper}
`

export const NavlinksContainer = styled.div`
    min-width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DarkIcon = styled.i`
    color: #ffffff;
`