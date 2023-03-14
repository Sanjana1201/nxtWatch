import { inject, observer } from "mobx-react";
import { Component } from "react";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import MyTheme from "../../../common/stores/ThemeStore";
import SavedVideos from "../../components/SaveVideos";
import SavedVideoStore from "../../stores/DataStore/SavedVideoDataStore";

interface Props{
    AuthStore: AuthDataStore;
    ThemeStore: MyTheme,
}


@inject('AuthStore','ThemeStore')
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
                <SavedVideos apiStatus={this.getApiStatus()} apiError={this.getErrorStatus()} SavedVideosList={this.TrendingVideosList()} {...this.props}/>
            </>
        )
    }
}

export default SavedVideosRoute;
