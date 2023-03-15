import styled from 'styled-components'

export const NxtWatchVideoContent = styled.div`
    padding:0 20px;
    color: ${props => props.theme.textDark}
`

export const NxtWatchVideoCardsWrapper = styled.div`
    display: flex;
    margin: 10px;
    flex-direction: row;
    @media (max-width: 771px){
        flex-direction: column;
        align-items: center;
    }
`

export const ThumbnailImage = styled.img`
    max-width: 300px;
`
export const ViewsDiv = styled.div`
    display: flex;
    align-items: center;
`