import { observer } from "mobx-react";
import NoSavedVideo from "../../../common/components/NoSavedVideo";
import TrendingModel from "../../stores/models/VideoModels/TrendingVideosModel";
import { StyledLink } from "../HomePage/styledComponents";
import { VideoListWrapper } from "./styledComponents";
import NxtWatchVideoCard from "./VideoListCard";

interface Props{
    videoData: Array<TrendingModel>
}

const VideoListContainer = (observer((props:Props) =>{

    const renderVideoCard =() =>{
        const {videoData} = props;
        if(videoData.length===0){
            return <NoSavedVideo />
        }
        return videoData.map((eachData:TrendingModel)=>{
            const {id} = eachData;
            return (
                <StyledLink key={id} to={`/videos/${id}`}>
                    <NxtWatchVideoCard videoDetails={eachData}/>
                </StyledLink>
            )
        })
    }

    return (
        <div>
            <VideoListWrapper>
                {renderVideoCard()}
            </VideoListWrapper>
        </div>
    )
}))

export default VideoListContainer;