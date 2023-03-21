import { observer } from "mobx-react";
import { Component } from "react";
import SavedVideos from "../../components/SaveVideos";
import SavedVideoStore from "../../stores/DataStore/SavedVideoDataStore";

interface Props{
}

@observer
class SavedVideosRoute extends Component<Props>{

    getApiStatus =() =>{
        const {currStatus}  = SavedVideoStore;
        return currStatus;
    }

    getErrorStatus = () =>{
        const {currError} = SavedVideoStore;
        return currError;
    }

    TrendingVideosList = () =>{
        const {getSavedVideos} = SavedVideoStore;
        return getSavedVideos();
    }

    render() {
     
        return (
            <>
                <SavedVideos apiStatus={this.getApiStatus()} apiError={this.getErrorStatus()} SavedVideosList={this.TrendingVideosList()}/>
            </>
        )
    }
}

export default SavedVideosRoute;
