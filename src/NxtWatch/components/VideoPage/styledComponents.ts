import styled from "styled-components";

interface Props{
    fontColor?:boolean;
}

export const VideoDetailContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const VideoButtons = styled.button<Props>`
    border: 0;
    background-color: transparent;
    color: ${(props)=>{
        // console.log(props.fontColor);
        return props.fontColor? "blue":"black"
    }}
`