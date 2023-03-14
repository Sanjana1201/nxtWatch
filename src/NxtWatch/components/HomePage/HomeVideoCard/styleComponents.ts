import styled from 'styled-components'

export const PeriodDivSymbol = styled.div`
    width: 3px;
    height:3px;
    border: 2px solid #7e858e;
    border-radius: 3px;
    background-color: #7e858e;
`

export const ViewsTimeDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const HomeVideoCard = styled.div`
    width: 250px;
    padding: 10px;
    color: ${props => props.theme.textDark}
`

export const HomeVideoContent = styled.div`
    display: flex;
`

export const ThumbnailImage = styled.img`
    width: 50px;
`
export const CardImage = styled.img`
    width: 250px;
`