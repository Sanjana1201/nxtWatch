import styled from "styled-components";

interface Props{
    fontColor?:boolean;
}

export const VideoDetailContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    color: ${props =>props.theme.textDark}
`

export const VideoButtons = styled.button<Props>`
    border: 0;
    background-color: transparent;
    color: ${(props)=>{
        if(props.fontColor===undefined){
            return props.theme.textDark;
        }
        else{
            return props.fontColor===false? props.theme.textDark:"blue";
        }
    }}
`

export const VideoDetailsContent = styled.div`
    color: ${props=>props.theme.textDark};
`

export const ContentContainer = styled.div`
    margin: 20px;
`