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
`
export const ProfileImg = styled.img`
    width: 40px;
`

export const CustomWhiteBgButton = styled.button<Props>`
    background-color: #ffffff;
    border: 1px solid ${props => props.MyColor? props.MyColor:"#ffffff"};
    color: ${props => props.MyColor? props.MyColor:"#ffffff"};;
    padding: 10px 10px;
    font-weight: 600;
    font-size: 14px;
`

export const ThemeButton = styled.button`
    background-color: #ffffff;
    border: 0;
    height: 30px;
    font-size: 30px;
`

export const NavlinksContainer = styled.div`
    min-width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`