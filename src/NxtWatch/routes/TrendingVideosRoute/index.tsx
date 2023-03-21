import { inject, observer } from "mobx-react";
import { Component } from "react";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import LoadingWrapper from "../../../common/components/LoadingWrapper";
import MyTheme from "../../../common/stores/ThemeStore";
import TrendingPageComponent from "../../components/TrendingPage";
import TrendingStore from "../../stores/DataStore/TrendingDataStore";

interface Props{
    AuthStore: AuthDataStore;
    ThemeStore: MyTheme,
}


@inject('AuthStore','ThemeStore')
@observer
class TrendingRoute extends Component<Props>{

    componentDidMount = ()=>{
        this.getTrendingVideos();
    }

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

    renderSuccessUI = () =>{
        return(
            <TrendingPageComponent details={this.renderVideos()}/>
        )
    }

    render() {
     
        return (
            <>
                <LoadingWrapper 
                    apiStatus={this.getApiStatus()}
                    apiError={this.getErrorStatus()}
                    onSuccess={this.renderSuccessUI}
                    onRetry={this.getTrendingVideos}
                />
            </>
        )
    }
}

export default TrendingRoute;
