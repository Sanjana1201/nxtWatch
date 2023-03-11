import styled from 'styled-components'
// import { DarkModeColors,LightModeColors } from '../../../common/constants/colors'

export const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    height: 100vh;
`

export const LoginDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction : column;
    padding: 15px;
    height: 300px;
    box-shadow: 0 0 20px #475569;
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
`

export const LoginButton = styled.button`
    height: 30px;
    width: 100%;
    background-color: #3b82f6;
    color: #ffffff;
    border: 0;
    border-radius: 5px;
`