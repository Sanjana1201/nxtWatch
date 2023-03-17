import { inject, observer } from "mobx-react";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import { API_STATUS } from "../../../common/enums/LoadingStateEnum";
import MyTheme from "../../../common/stores/ThemeStore";
import NxtWatchHeading from "../HeadingContainer";
import { ContentWrapper, PageContentContainer } from "../HomePage/styledComponents";
import NavbarComponent from "../Navbar";
import SideBarComponent from "../SideBar";
import { TrendingComponentWrapper } from "../TrendingPage/styledComponents";
import VideoListContainer from "../VideoListView";
import {useTranslation} from 'react-i18next';
import TrendingModel from "../../stores/models/VideoModels/TrendingVideosModel";

interface Props{
    AuthStore : AuthDataStore,
    ThemeStore : MyTheme,
    apiStatus : API_STATUS,
    apiError : string,
    SavedVideosList: Array<TrendingModel>
}

const SavedVideos = inject('AuthStore','ThemeStore')(observer((props:Props) =>{

    const {t} = useTranslation();

    const renderVideosList = () =>{
        const SavedVideos = props.SavedVideosList;
        return <VideoListContainer videoData={SavedVideos} {...props}/>
    }

    const renderSuccessUI = () =>{
        return (
            <>
            {renderVideosList()}
            </> 
        )
    }

    return (
        <>
        <NavbarComponent />
            <ContentWrapper>
                <SideBarComponent />
                <PageContentContainer>
                <TrendingComponentWrapper>
                <NxtWatchHeading title={t("Saved Videos")} {...props}/>
                {renderSuccessUI()}
            </TrendingComponentWrapper>
                </PageContentContainer>
            </ContentWrapper>
        </>
    )
}))

export default SavedVideos;