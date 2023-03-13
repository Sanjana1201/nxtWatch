import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import Button from "../../../common/components/Button";
import Loader from "../../../common/components/LoadingIcon";
import LoadingWrapper from "../../../common/components/LoadingWrapper";
import SomethingWentWrongPage from "../../../common/components/SomethingWentWrong";
import { ScreenType } from "../../../common/enums/LoadingStateEnum";
import TrendingStore from "../../stores/DataStore/TrendingDataStore";
import NxtWatchHeading from "../HeadingContainer";
import { ContentWrapper, PageContentContainer } from "../HomePage/styledComponents";
import NavbarComponent from "../Navbar";
import SideBarComponent from "../SideBar";
import VideoListContainer from "../VideoListView";
import {TrendingComponentWrapper} from "./styledComponents"


const TrendingVideos = inject('AuthStore','ThemeStore')(observer(({AuthStore,ThemeStore,...props}) =>{

    useEffect(()=>{
        props.getVideo();
    },[])

    const renderTrendingData =() =>{
        return <VideoListContainer details={TrendingStore.currData}/>
    }

    const renderInitialUI = () =>{
        return <></>
    }
    const renderSuccessUI = () =>{
        return(
            <PageContentContainer>
                <TrendingComponentWrapper>
                    <NxtWatchHeading title="Trending"/>
                    {renderTrendingData()}
                </TrendingComponentWrapper>
            </PageContentContainer>
        )
    }

    const getTrendingVideosData =() =>{
        return(
            <>
            <SomethingWentWrongPage />
            <button onClick={props.getVideo()} >Retry</button>
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
                {/* {TrendingStore.currStatus===ScreenType.Loading && <Loader />}
            {
                TrendingStore.currStatus===ScreenType.Success && <PageContentContainer>
                <TrendingComponentWrapper>
                    <NxtWatchHeading title="Trending"/>
                    {renderTrendingData()}
                </TrendingComponentWrapper>
            </PageContentContainer>
            }
            {TrendingStore.currStatus===ScreenType.Failure && <SomethingWentWrongPage />} */}
            </ContentWrapper>
        </>
    )
}))

export default TrendingVideos;