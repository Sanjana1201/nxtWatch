import { observer } from "mobx-react";
import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import LoadingWrapper from "../../../common/components/LoadingWrapper";
import VideoDetailsComponent from "../../components/VideoPage";
import SavedVideoStore from "../../stores/DataStore/SavedVideoDataStore";
import VideoStore from "../../stores/DataStore/VideoDataStore";
import TrendingModel from "../../stores/models/VideoModels/TrendingVideosModel";

interface RouteParameter{
    id:string,
    location: any
}

interface Props extends RouteComponentProps<RouteParameter>{
}

@observer
class VideoDetailsRoute extends Component<Props>{

    componentDidMount(): void {
        this.getVideoData();
    }


    getVideoData = () =>{
        return this.getAllVideos(this.getVideoId());
    }

    getVideoId = ():string =>{
        
        return this.props.match.params.id;
    }

    getVideoStartTime = () =>{
        let startTime = this.props.location.search || "?0";
        return startTime.slice(1,startTime.length);
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

    renderVideo = () =>{
        return VideoStore.currData;
    }

    toggleSaved = (videoData:TrendingModel) =>{
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

    renderSuccessUI =() =>{
        return <VideoDetailsComponent details={this.renderVideo()} toggleSaved = {this.toggleSaved} findSaved={this.findSavedStatus} startTime = {this.getVideoStartTime()}/> 
    }

    render() {
        return (
            <>
                <LoadingWrapper 
                    apiStatus={this.getApiStatus()}
                    apiError={this.getErrorStatus()}
                    onSuccess={this.renderSuccessUI}
                    onRetry={this.getVideoData}
                />
            </>
        )
    }
}

export default VideoDetailsRoute;
