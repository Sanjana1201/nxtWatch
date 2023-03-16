import styled from "styled-components";

export const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props =>props.theme.headingContainer};
    padding-left: 20px;
    padding: 10px 30px;
`

export const HeadingIconHolder = styled.div`
    background-color: ${props => {console.log(props.theme.headingIconContainer);return props.theme.headingIconContainer}};
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    color: #ff0000;

`

export const HeadingText = styled.p`
    font-size:30px;
    font-weight: bold;
    padding-left: 25px;
    color: ${props=>props.theme.textDark}
`
