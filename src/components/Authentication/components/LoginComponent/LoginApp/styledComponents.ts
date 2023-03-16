import styled from 'styled-components'

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
    padding: 40px 30px;
    margin: 10px;
    box-shadow: 0 0 20px #475569;
    background-color: ${(props)=> props.theme.backgroundLight};
`

export const CustomInputBox = styled.input`
    width: 90%;
    padding: 10px;
`

export const LoginFieldsContainer = styled.div`
    width: 350px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: ${props => props.theme.textLight};
    @media (max-width: 550px){
        width: auto;
    };
`

export const LoginButton = styled.button`
    height: 35px;
    width: 100%;
    background-color: #3b82f6;
    color: #ffffff;
    border: 0;
    border-radius: 5px;
    font-size: 15px;
    margin-top: 20px;
`

export const LoginCheckboxText = styled.p`
    color: ${props => props.theme.textDark}
    font-weight: 400;
`

export const ThemedInputBox = styled.input`
`

export const IconDiv = styled.div`
    margin: 20px 0 50px 0;
`
export const CustomCheckbox = styled.input`
    transform: scale(1.2);

`

export const Errorp = styled.p`
    color: red;
    font-weight:400;
    font-size: 13px;
`
export const ErrorWrapper = styled.div`
    width:100%;
`