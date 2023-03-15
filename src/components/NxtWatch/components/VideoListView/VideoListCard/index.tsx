import { formatDistanceToNow } from "date-fns";
import { PeriodDivSymbol, ViewsTimeDiv } from "../../HomePage/HomeVideoCard/styleComponents";
import { NxtWatchVideoContent,NxtWatchVideoCardsWrapper,ThumbnailImage, ViewsDiv } from "./styledComponents";
import {useTranslation} from 'react-i18next';

const NxtWatchVideoCard = (props:any) =>{

    const {t} = useTranslation();

    const {title,thumbnail_url,channel,view_count,published_at} = props.videoDetails;
    const {name} = channel; 
    return (
        <>
            <NxtWatchVideoCardsWrapper>
                <div>
                    <ThumbnailImage src = {thumbnail_url} alt = "Sehwag" />
                </div>
                <NxtWatchVideoContent>
                    <div>
                        <p>{title}</p>
                        <p>{name}</p>
                        <ViewsDiv>
                            {view_count} {t("views")} <PeriodDivSymbol></PeriodDivSymbol> {formatDistanceToNow(new Date(published_at))}
                        </ViewsDiv>
                    </div>
                </NxtWatchVideoContent>
            </NxtWatchVideoCardsWrapper>
        </>
    )
}

export default NxtWatchVideoCard;