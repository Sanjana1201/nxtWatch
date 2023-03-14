import styled from "styled-components";

export const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props =>props.theme.headingContainer};
    margin-top: 10px;
`

export const HeadingIconHolder = styled.div`
    background-color: ${props => props.theme.headingIconContainer}
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;

`

export const HeadingText = styled.p`
    font-size:30px;
    font-weight: bold;
    padding-left: 25px;
    color: ${props=>props.theme.textDark}
`
