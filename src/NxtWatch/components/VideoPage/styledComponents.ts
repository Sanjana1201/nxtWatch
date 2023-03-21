import styled from "styled-components";

interface Props{
    fontColor?:boolean;
}

export const VideoDetailContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    color: ${props =>props.theme.textDark};
    margin-bottom: 40px;
`

export const VideoButtons = styled.button<Props>`
    border: 0;
    background-color: transparent;
    color: ${(props)=>{
        if(props.fontColor===undefined){
            return props.theme.cardLightText;
        }
        else{
            return props.fontColor===false? props.theme.cardLightText:"blue";
        }
    }};
    font-size: 15px;
    font-weight: 600;
`

export const VideoDetailsContent = styled.div`
    color: ${props=>props.theme.textDark};
`

export const ContentContainer = styled.div`
    margin: 20px;
`

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