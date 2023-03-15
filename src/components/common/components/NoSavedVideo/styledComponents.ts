import styled from "styled-components";

interface Props{
    topMargin: string;
}

export const CustomContainer = styled.div<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:100%;
    margin-top: ${props=> props.topMargin}
`

export const StyledImage = styled.img`
    width: auto;
    height: 40vh;
`