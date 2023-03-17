import { formatDistanceToNow } from "date-fns";
import { PeriodDivSymbol} from "../../HomePage/HomeVideoCard/styleComponents";
import { NxtWatchVideoContent,NxtWatchVideoCardsWrapper,ThumbnailImage,ViewsDiv, CardHeading, CardDetails} from "./styledComponents";
import {useTranslation} from 'react-i18next';
import TrendingModel from "../../../stores/models/VideoModels/TrendingVideosModel";

interface Props{
    videoDetails: TrendingModel
}

const NxtWatchVideoCard = (props:Props) =>{

    const {t} = useTranslation();

    const {title,thumbnailUrl,channel,viewCount,publishedAt} = props.videoDetails;
    const {name} = channel; 
    return (
        <>
            <NxtWatchVideoCardsWrapper>
                <div>
                    <ThumbnailImage src = {thumbnailUrl} alt = "thumbnail_img" />
                </div>
                <NxtWatchVideoContent>
                    <div>
                        <CardHeading>{title}</CardHeading>
                        <CardDetails>{name}</CardDetails>
                        <ViewsDiv>
                            {viewCount} {t("views")} <PeriodDivSymbol></PeriodDivSymbol> {formatDistanceToNow(new Date(publishedAt))}
                        </ViewsDiv>
                    </div>
                </NxtWatchVideoContent>
            </NxtWatchVideoCardsWrapper>
        </>
    )
}

export default NxtWatchVideoCard;