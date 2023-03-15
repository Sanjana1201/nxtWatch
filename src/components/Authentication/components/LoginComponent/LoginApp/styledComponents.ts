import styled from 'styled-components'
// import { DarkModeColors,LightModeColors } from '../../../common/constants/colors'

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    height: 100vh;
    background-color: ${(props)=> props.theme.wrapper}
`

export const LoginDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction : column;
    padding: 15px;
    height: 300px;
    box-shadow: 0 0 20px #475569;
    background-color: ${(props)=> props.theme.backgroundLight};
`

export const CustomInputBox = styled.input`
    width: 90%;
    padding: 10px;
`

export const LoginFieldsContainer = styled.div`
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: ${props => props.theme.textLight}
`

export const LoginButton = styled.button`
    height: 30px;
    width: 100%;
    background-color: #3b82f6;
    color: #ffffff;
    border: 0;
    border-radius: 5px;
`

export const LoginCheckboxText = styled.p`
    color: ${props => props.theme.textDark}
`

export const ThemedInputBox = styled.input`
    
`