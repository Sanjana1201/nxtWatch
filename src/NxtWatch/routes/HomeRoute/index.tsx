import { inject, observer } from "mobx-react";
import { Component } from "react";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import LoadingWrapper from "../../../common/components/LoadingWrapper";
import MyTheme from "../../../common/stores/ThemeStore";
import HomeComponent from "../../components/HomePage";
import MyHomeDataStore from "../../stores/DataStore/HomeDataStore";

interface Props{
    AuthStore: AuthDataStore;
    ThemeStore: MyTheme,
}


@inject('AuthStore','ThemeStore')
@observer
class HomeRoute extends Component<Props>{

    componentDidMount() {
        this.renderUI();
    }

    renderUI =() =>{
        this.getHomeVideos();
        this.filterFunc("");
    }

    getApiStatus =() =>{
        const {currStatus}  = MyHomeDataStore;
        return currStatus;
    }

    getErrorStatus = () =>{
        const {currError} = MyHomeDataStore;
        return currError;
    }

    getHomeVideos = () =>{
        const {GetHomeData,homeVideosData} = MyHomeDataStore;
        GetHomeData();
        return homeVideosData;
    }

    filterFunc = (input:string) =>{
        const {setInputValue} = MyHomeDataStore;
        setInputValue(input);
    }

    renderVideos = () =>{
        return MyHomeDataStore.filterData;
    }

    renderSuccessUI = () => {
        return <HomeComponent homeVideoData = {this.renderVideos()} filterData={this.filterFunc}/>
    }

    render() {
        return (
            <>
                <LoadingWrapper
                    apiStatus={this.getApiStatus()}
                    apiError={this.getErrorStatus()}
                    onSuccess={this.renderSuccessUI}
                    onRetry={this.renderUI}
                />
            </>
        )
    }
}

export default HomeRoute;
