import SavedVideoStore from "../../stores/DataStore/SavedVideoDataStore";
import NxtWatchHeading from "../HeadingContainer";
import { ContentWrapper, PageContentContainer } from "../HomePage/styledComponents";
import NavbarComponent from "../Navbar";
import SideBarComponent from "../SideBar";
import { TrendingComponentWrapper } from "../TrendingPage/styledComponents";
import VideoListContainer from "../VideoListView";

const SavedVideos = () =>{

    // useEffect(()=>{
    //     const CurrentVideos = SavedVideoStore.getSavedVideos();
    // })

    const renderVideosList = () =>{
        const SavedVideos = SavedVideoStore.getSavedVideos();
        return <VideoListContainer details={SavedVideos}/>
    }

    return (
        <>
            <NavbarComponent />
            <ContentWrapper>
                <SideBarComponent />
                <PageContentContainer>
                    <TrendingComponentWrapper>
                        <NxtWatchHeading title="Saved Videos"/>
                        {renderVideosList()}
                    </TrendingComponentWrapper>
                </PageContentContainer>
            </ContentWrapper>
        </>
    )
}

export default SavedVideos;