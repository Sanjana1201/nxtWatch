import { inject, observer } from "mobx-react";
import { Component, ReactNode } from "react";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import MyTheme from "../../../common/stores/ThemeStore";
import GamingVideos from "../../components/Gaming/index";
import GamingStore from "../../stores/DataStore/GamingDataStore";

interface Props{
    AuthStore: AuthDataStore;
    ThemeStore: MyTheme,
}

@inject('AuthStore','ThemeStore')
@observer
class GamingRoute extends Component<Props>{

    getApiStatus =() =>{
        const {currStatus}  = GamingStore;
        return currStatus;
    }

    getErrorStatus = () =>{
        const {currError} = GamingStore;
        return currError;
    }

    getTrendingVideos = () =>{
        const {getGamingData} = GamingStore;
        getGamingData();
    }

    renderVideos = () =>{
        return GamingStore.currData;
    }

    render(): ReactNode {
        return(
            <GamingVideos apiStatus={this.getApiStatus()} apiError={this.getErrorStatus()} getVideo={this.getTrendingVideos} GamingVideosList={this.renderVideos()} {...this.props}/>
        )
    }
}

export default GamingRoute;