import NxtWatchHeading from "../HeadingContainer";
import {GamesWrapper,GamesContainer} from "./styledComponents"
import GamingCard from "./GamingCards";
import { ContentWrapper, PageContentContainer, StyledLink } from "../HomePage/styledComponents";
import NavbarComponent from "../Navbar";
import SideBarComponent from "../SideBar";
import { useEffect } from "react";
import GamingStore from "../../stores/DataStore/GamingDataStore";
import { inject, observer } from "mobx-react";
import { ScreenType } from "../../../common/enums/LoadingStateEnum";
import Loader from "../../../common/components/LoadingIcon";
import SomethingWentWrongPage from "../../../common/components/SomethingWentWrong";


// const data = {
//     id: "b214dc8a-b126-4d15-8523-d37404318347",
//     title: "Drop Stack Ball",
//     thumbnail_url: "https://assets.ccbp.in/frontend/react-js/nxt-watch/drop-stack-ball-img.png",
//     view_count: "44K"
// }

const GamingVideos = inject('AuthStore','ThemeStore')(observer(({AuthStore,ThemeStore}) =>{

    useEffect(()=>{
        GamingStore.getGamingData();
    },[]);

    const renderGamingData = () =>{
        return GamingStore.currData.map((eachData)=>{
            const {id} = eachData;
            return(
                <StyledLink to={`/videos/${id}`}>
                    <GamingCard key={id} gamingDetails = {eachData}/>
                </StyledLink>
            ) 
        })
    }

    return (
        <>
            <NavbarComponent />
            <ContentWrapper>
                <SideBarComponent />
                <PageContentContainer>
                    {GamingStore.currStatus===ScreenType.Loading && <Loader />}
                    {GamingStore.currStatus===ScreenType.Success && 
                    <GamesContainer>
                        <NxtWatchHeading title={"Gaming"}/>
                        <GamesWrapper>
                            {renderGamingData()}
                        </GamesWrapper>
                    </GamesContainer>
                    }
                    {GamingStore.currStatus===ScreenType.Failure && <SomethingWentWrongPage/>}
                </PageContentContainer>
            </ContentWrapper>
        </>
    )
}))

export default GamingVideos;