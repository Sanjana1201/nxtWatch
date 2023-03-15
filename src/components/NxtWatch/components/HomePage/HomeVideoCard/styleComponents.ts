import styled from 'styled-components'

export const PeriodDivSymbol = styled.div`
    width: 3px;
    height:3px;
    border: 2px solid #7e858e;
    border-radius: 3px;
    background-color: #7e858e;
    margin: 0 20px;
`

export const ViewsTimeDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const HomeVideoCard = styled.div`
    width: 280px;
    padding: 10px;
    color: ${props => props.theme.textDark};
    margin: 10px;
`

export const HomeVideoContent = styled.div`
    display: flex;
`

export const ThumbnailImage = styled.img`
    width: 40px;
    margin: 10px;
`
export const CardImage = styled.img`
    width: 280px;
`

export const CardsContent = styled.div`
    padding: 5px 0;
`