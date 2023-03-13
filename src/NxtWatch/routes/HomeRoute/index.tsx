import { inject, observer } from "mobx-react";
import { Component, ReactNode } from "react";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import MyTheme from "../../../common/stores/ThemeStore";
import HomePageComponent from "../../components/HomePage";
import { HomeVideoContent } from "../../components/HomePage/HomeVideoCard/styleComponents";
import MyHomeDataStore from "../../stores/DataStore/HomeDataStore";

interface Props{
    AuthStore: AuthDataStore;
    ThemeStore: MyTheme,
}


@inject('AuthStore','ThemeStore')
@observer
class HomeRoute extends Component<Props>{

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

    render() {
     
        return (
            <>
                <HomePageComponent apiStatus={this.getApiStatus()} errorStatus={this.getErrorStatus()} activeVideos={this.renderVideos()} onLoading={this.getHomeVideos} setInputValue={this.filterFunc} {...this.props}/>
            </>
        )
    }
}

export default HomeRoute;
