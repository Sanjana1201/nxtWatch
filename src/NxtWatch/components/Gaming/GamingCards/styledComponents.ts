import styled from "styled-components";

export const GamingImage = styled.img`
    width: 250px;
`

export const GamingWrapper = styled.div`
    color : ${props => props.theme.textDark}
    margin: 30px 20px;
`

export const GamingText = styled.div`
    color: ${props=> props.theme.textDark}
`
export const GamingTextLite = styled.div`
    color: ${props => props.theme.cardLightText}
`
export const GamingContentWrapper = styled.div`
    padding: 10px 0;
`