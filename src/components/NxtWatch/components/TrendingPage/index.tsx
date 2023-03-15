import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import LoadingWrapper from "../../../common/components/LoadingWrapper";
import SomethingWentWrongPage from "../../../common/components/SomethingWentWrong";
import { API_STATUS } from "../../../common/enums/LoadingStateEnum";
import MyTheme from "../../../common/stores/ThemeStore";
import { TrendingVideoModel } from "../../stores/types";
import { ContentWrapper, PageContentContainer } from "../HomePage/styledComponents";
import NavbarComponent from "../Navbar";
import SideBarComponent from "../SideBar";
import TrendingPageComponent from "./TrendingPageComponent";
import {useTranslation} from 'react-i18next';

interface Props{
    AuthStore : AuthDataStore,
    ThemeStore : MyTheme,
    apiStatus : API_STATUS,
    apiError : string,
    getVideo:() =>void,
    TrendingVideosList: Array<TrendingVideoModel>
}

const TrendingVideos = inject('AuthStore','ThemeStore')(observer((props:Props) =>{

    const {t} = useTranslation();

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
            <SomethingWentWrongPage onRetry ={props.getVideo} {...props}/>
            </>
        )
    }

    return (
        <>
            <NavbarComponent />
            <ContentWrapper>
                <SideBarComponent />
                <PageContentContainer>
                <LoadingWrapper 
                apiStatus={props.apiStatus}
                apiError={props.apiError}
                onInitial={renderInitialUI}
                onSuccess={renderSuccessUI}
                onRetry={getTrendingVideosData}
                />
                </PageContentContainer>
            </ContentWrapper>
        </>
    )
}))

export default TrendingVideos;