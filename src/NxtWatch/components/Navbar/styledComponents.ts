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
    cursor: pointer;
`

export const CustomWhiteBgButton = styled.button<Props>`
    background-color: #ffffff;
    border: 1px solid ${props => props.MyColor? props.MyColor:"#ffffff"};
    color: ${props => props.MyColor? props.MyColor:"#ffffff"};
    padding: 7px 16px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    background-color: ${props => props.theme.wrapper};
    cursor: pointer;
`

export const ThemeButton = styled.button`
    background-color: #ffffff;
    border: 0;
    height: 30px;
    font-size: 30px;
    background-color: ${props =>props.theme.wrapper};
    cursor: pointer;
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
export const PopUpContainer = styled.div`
    background-color: ${props => props.theme.wrapper};
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 8px 25px;
    color: ${props => props.theme.textDark};
    border-radius: 10px;
`
export const CancelButton = styled.button`
    background-color: ${props => props.theme.wrapper};
    padding: 8px 11px;
    font-weight: 500;
    color: ${props =>props.theme.textLight};
    offset: 0;
    border: 1px solid ${props => props.theme.cardLightText};
    border-radius: 2px;
`

export const ConfirmButton = styled.div`
    background-color: #3b82f6;
    color: #ffffff;
    padding: 8px 11px;
    font-weight: 400;
    offset: 0;
    border: 0;
    border-radius: 2px;
`

export const PopupButtonContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-around;
`