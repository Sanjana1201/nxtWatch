import styled from "styled-components";

export const VideoTitle = styled.p`
    font-size: 17px;
    margin-bottom: 20px;
`

export const VideoTime = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${props => props.theme.cardLightText};
`