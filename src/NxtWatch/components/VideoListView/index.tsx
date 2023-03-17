import { inject, observer } from "mobx-react";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import NoSavedVideo from "../../../common/components/NoSavedVideo";
import MyTheme from "../../../common/stores/ThemeStore";
import TrendingModel from "../../stores/models/VideoModels/TrendingVideosModel";
import { StyledLink } from "../HomePage/styledComponents";
import { VideoListWrapper } from "./styledComponents";
import NxtWatchVideoCard from "./VideoListCard";

interface Props{
    AuthStore : AuthDataStore,
    ThemeStore : MyTheme,
    videoData: Array<TrendingModel>
}

const VideoListContainer = inject('AuthStore','ThemeStore')(observer((props:Props) =>{

    const renderVideoCard =() =>{
        const {videoData} = props;
        if(videoData.length===0){
            return <NoSavedVideo {...props}/>
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