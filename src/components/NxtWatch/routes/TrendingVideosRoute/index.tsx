import { inject, observer } from "mobx-react";
import { Component } from "react";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import MyTheme from "../../../common/stores/ThemeStore";
import TrendingVideos from "../../components/TrendingPage";
import TrendingStore from "../../stores/DataStore/TrendingDataStore";

interface Props{
    AuthStore: AuthDataStore;
    ThemeStore: MyTheme,
}


@inject('AuthStore','ThemeStore')
@observer
class TrendingRoute extends Component<Props>{

    getApiStatus =() =>{
        const {currStatus}  = TrendingStore;
        return currStatus;
    }

    getErrorStatus = () =>{
        const {currError} = TrendingStore;
        return currError;
    }

    getTrendingVideos = () =>{
        const {getTrendingData} = TrendingStore;
        getTrendingData();
    }

    renderVideos = () =>{
        return TrendingStore.currData;
    }

    render() {
     
        return (
            <>
                <TrendingVideos apiStatus={this.getApiStatus()} apiError={this.getErrorStatus()} getVideo={this.getTrendingVideos} TrendingVideosList = {this.renderVideos()} {...this.props}/>
            </>
        )
    }
}

export default TrendingRoute;
