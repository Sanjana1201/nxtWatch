import { inject, observer } from "mobx-react";
import { Component } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import MyTheme from "../../../common/stores/ThemeStore";
import VideoPlayer from "../../components/VideoPage";
import SavedVideoStore from "../../stores/DataStore/SavedVideoDataStore";
import VideoStore from "../../stores/DataStore/VideoDataStore";
import { VideoModel } from "../../stores/types";

interface RouteParameter{
    id:string
}

interface Props extends RouteComponentProps<RouteParameter>{
    AuthStore: AuthDataStore;
    ThemeStore: MyTheme,
}


@inject('AuthStore','ThemeStore')
@observer
class VideoDetailsRoute extends Component<Props>{

    getVideoId = ():string =>{
        return this.props.match.params.id;
    }

    getApiStatus =() =>{
        const {currStatus}  = VideoStore;
        return currStatus;
    }

    getErrorStatus = () =>{
        const {currError} = VideoStore;
        return currError;
    }

    getAllVideos = (videoURL:string) =>{
        const {getCurrentVideoData} = VideoStore;
        getCurrentVideoData(videoURL);
    }

    renderVideos = () =>{
        return VideoStore.currData;
    }

    toggleSaved = (videoData:VideoModel) =>{
        const {findSavedVideo,removeSavedVideo,addSavedVideo} = SavedVideoStore;
        const checkForSaved = findSavedVideo(videoData.id);
        if(checkForSaved){
            removeSavedVideo(videoData.id);
        }
        else{
            addSavedVideo(videoData);
        }
        return checkForSaved;
    }

    findSavedStatus = (videoId:string) =>{
        const {findSavedVideo} = SavedVideoStore;
        return findSavedVideo(videoId);
    }

    render() {
        return (
            <>
                <VideoPlayer savedFunc ={this.toggleSaved} VideoId={this.getVideoId()} apiStatus={this.getApiStatus()} apiError={this.getErrorStatus()} getVideo={this.getAllVideos} VideosList={this.renderVideos()} savedStatus={this.findSavedStatus} {...this.props}/>
            </>
        )
    }
}

export default VideoDetailsRoute;
