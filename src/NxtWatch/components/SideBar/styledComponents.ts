import styled from 'styled-components'

interface Props{
    active?: boolean;
}

export const SidebarWrapper = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 230px;
    position: relative;
`

export const SidebarLinks = styled.div<Props>`
    height: 50px;
    padding: 10px 30px;
    background-color: ${props => props.active? "aliceblue": "white"}
`

export const CustomIcons = styled.i`
    padding: 10px;
`

export const CustomSocialIcons = styled.img`
    width: 50px;
    padding: 10px;
`