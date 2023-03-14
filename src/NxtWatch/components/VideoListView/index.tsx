import { inject, observer } from "mobx-react";
import { StyledLink } from "../HomePage/styledComponents";
import { VideoListWrapper } from "./styledComponents";
import NxtWatchVideoCard from "./VideoListCard";

const VideoListContainer = inject('AuthStore','ThemeStore')(observer((props:any) =>{

    const renderVideoCard =() =>{
        const {details} = props;
        return details.map((eachData:any)=>{
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