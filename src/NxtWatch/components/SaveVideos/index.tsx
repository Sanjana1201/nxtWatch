import { inject, observer } from "mobx-react";
import { ThemeProvider } from "styled-components";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import LoadingWrapper from "../../../common/components/LoadingWrapper";
import NoSavedVideo from "../../../common/components/NoSavedVideo";
import { DarkModeColors, LightModeColors } from "../../../common/constants/colors";
import { API_STATUS } from "../../../common/enums/LoadingStateEnum";
import MyTheme from "../../../common/stores/ThemeStore";
import { VideoModel } from "../../stores/types";
import NxtWatchHeading from "../HeadingContainer";
import { ContentWrapper, PageContentContainer } from "../HomePage/styledComponents";
import NavbarComponent from "../Navbar";
import SideBarComponent from "../SideBar";
import { TrendingComponentWrapper } from "../TrendingPage/styledComponents";
import VideoListContainer from "../VideoListView";

interface Props{
    AuthStore : AuthDataStore,
    ThemeStore : MyTheme,
    apiStatus : API_STATUS,
    apiError : string,
    SavedVideosList: Array<VideoModel>
}

const SavedVideos = inject('AuthStore','ThemeStore')(observer((props:Props) =>{

    // useEffect(()=>{
    //     const CurrentVideos = SavedVideoStore.getSavedVideos();
    // })

    const renderVideosList = () =>{
        const SavedVideos = props.SavedVideosList;
        return <VideoListContainer details={SavedVideos}/>
    }

    const renderInitialUI = () =>{
        return (
            <>
            {renderVideosList()}
            </>
        )
    }

    const renderSuccessUI = () =>{
        return (
            <>
            {renderVideosList()}
            </> 
        )
    }

    const getSavedVideosData = () =>{
        return(
            <>
                <NoSavedVideo />
            </>
        )
    }

    return (
        <>
        <ThemeProvider theme={props.ThemeStore.theme==='Light'? LightModeColors: DarkModeColors}>
        <NavbarComponent />
            <ContentWrapper>
                <SideBarComponent />
                <PageContentContainer>
                <TrendingComponentWrapper>
                <NxtWatchHeading title="Saved Videos" {...props}/>
                <LoadingWrapper 
                    apiStatus={props.apiStatus}
                    apiError={props.apiError}
                    onInitial={renderInitialUI}
                    onSuccess={renderSuccessUI}
                    onRetry={getSavedVideosData}
                />
            </TrendingComponentWrapper>
                </PageContentContainer>
            </ContentWrapper>
            </ThemeProvider>
        </>
    )
}))

export default SavedVideos;