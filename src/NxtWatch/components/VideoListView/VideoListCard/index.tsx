import { formatDistanceToNow } from "date-fns";
import { PeriodDivSymbol, ViewsTimeDiv } from "../../HomePage/HomeVideoCard/styleComponents";
import { NxtWatchVideoContent,NxtWatchVideoCardsWrapper,ThumbnailImage } from "./styledComponents";

// const data = {
//     "id": "ad9822d2-5763-41d9-adaf-baf9da3fd490",
//     "title": "iB Hubs Announcement Event",
//     "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png",
//     "channel": {
//       "name": "iB Hubs",
//       "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
//     },
//     "view_count": "26K",
//     "published_at": "Nov 29, 2016"
//   }


const NxtWatchVideoCard = (props:any) =>{

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
                        <ViewsTimeDiv>
                            {view_count} Views <PeriodDivSymbol></PeriodDivSymbol> {formatDistanceToNow(new Date(published_at))}
                        </ViewsTimeDiv>
                    </div>
                </NxtWatchVideoContent>
            </NxtWatchVideoCardsWrapper>
        </>
    )
}

export default NxtWatchVideoCard;