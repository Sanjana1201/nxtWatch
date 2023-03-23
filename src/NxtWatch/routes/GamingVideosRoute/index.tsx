import { inject, observer } from "mobx-react";
import { Component, ReactNode } from "react";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import LoadingWrapper from "../../../common/components/LoadingWrapper";
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

    componentDidMount(): void {
        this.getGamingVideos();
    }

    getApiStatus =() =>{
        const {currStatus}  = GamingStore;
        return currStatus;
    }

    getErrorStatus = () =>{
        const {currError} = GamingStore;
        return currError;
    }

    getGamingVideos = () =>{
        const {getGamingData} = GamingStore;
        getGamingData();
    }

    renderVideos = () =>{
        return GamingStore.currData;
    }

    renderSuccessUI = () =>{
        return(
            <GamingVideos gamingVideosList={this.renderVideos()}/>
        )
    }

    render(): ReactNode {
        return(<>
            <LoadingWrapper 
                apiStatus={this.getApiStatus()}
                apiError={this.getErrorStatus()}
                onSuccess={this.renderSuccessUI}
                onRetry={this.getGamingVideos}
            />
        </>
        )
    }
}

export default GamingRoute;