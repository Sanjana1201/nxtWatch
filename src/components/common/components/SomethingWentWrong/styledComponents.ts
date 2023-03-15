import styled from 'styled-components';

export const CustomButton = styled.button`
    background-color: #4f46e5;
    color:white;
    padding: 10px;
    offset: 0;
    border: 0;
    border-radius: 5px;
`

export const LightColorText = styled.p`
    color: ${props => props.theme.textDark}
`

export const DarkColorText = styled.p`
    color: ${props => props.theme.textLight}
`