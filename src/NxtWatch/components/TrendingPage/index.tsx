import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import LoadingWrapper from "../../../common/components/LoadingWrapper";
import SomethingWentWrongPage from "../../../common/components/SomethingWentWrong";
import { API_STATUS } from "../../../common/enums/LoadingStateEnum";
import MyTheme from "../../../common/stores/ThemeStore";
import { TrendingVideoModel } from "../../stores/types";
import { ContentWrapper } from "../HomePage/styledComponents";
import NavbarComponent from "../Navbar";
import SideBarComponent from "../SideBar";
import TrendingPageComponent from "./TrendingPageComponent";


interface Props{
    AuthStore : AuthDataStore,
    ThemeStore : MyTheme,
    apiStatus : API_STATUS,
    apiError : string,
    getVideo:() =>void,
    TrendingVideosList: Array<TrendingVideoModel>
}

const TrendingVideos = inject('AuthStore','ThemeStore')(observer((props:Props) =>{

    useEffect(()=>{
        props.getVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const renderInitialUI = () =>{
        return <></>
    }
    const renderSuccessUI = () =>{
        return(
            <TrendingPageComponent details={props.TrendingVideosList} {...props}/>
        )
    }

    const getTrendingVideosData =() =>{
        return(
            <>
            <SomethingWentWrongPage />
            <button onClick={props.getVideo} >Retry</button>
            </>
        )
    }

    return (
        <>
            <NavbarComponent />
            <ContentWrapper>
                <SideBarComponent />
                <LoadingWrapper 
                apiStatus={props.apiStatus}
                apiError={props.apiError}
                onInitial={renderInitialUI}
                onSuccess={renderSuccessUI}
                onRetry={getTrendingVideosData}
                />
            </ContentWrapper>
        </>
    )
}))

export default TrendingVideos;