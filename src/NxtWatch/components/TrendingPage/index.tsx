import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import Loader from "../../../common/components/LoadingIcon";
import SomethingWentWrongPage from "../../../common/components/SomethingWentWrong";
import { ScreenType } from "../../../common/enums/LoadingStateEnum";
import TrendingStore from "../../stores/DataStore/TrendingDataStore";
import NxtWatchHeading from "../HeadingContainer";
import { ContentWrapper, PageContentContainer } from "../HomePage/styledComponents";
import NavbarComponent from "../Navbar";
import SideBarComponent from "../SideBar";
import VideoListContainer from "../VideoListView";
import {TrendingComponentWrapper} from "./styledComponents"


const TrendingVideos = inject('AuthStore','ThemeStore')(observer(({AuthStore,ThemeStore}) =>{

    useEffect(()=>{
        TrendingStore.getTrendingData();
    },[])

    const renderTrendingData =() =>{
        return <VideoListContainer details={TrendingStore.currData}/>
    }

    return (
        <>
            <NavbarComponent />
            <ContentWrapper>
                <SideBarComponent />
                {TrendingStore.currStatus===ScreenType.Loading && <Loader />}
            {
                TrendingStore.currStatus===ScreenType.Success && <PageContentContainer>
                <TrendingComponentWrapper>
                    <NxtWatchHeading title="Trending"/>
                    {renderTrendingData()}
                </TrendingComponentWrapper>
            </PageContentContainer>
            }
            {TrendingStore.currStatus===ScreenType.Failure && <SomethingWentWrongPage />}
            </ContentWrapper>
        </>
    )
}))

export default TrendingVideos;