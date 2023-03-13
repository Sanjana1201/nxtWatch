import NxtWatchHeading from "../HeadingContainer";
import {GamesWrapper,GamesContainer} from "./styledComponents"
import GamingCard from "./GamingCards";
import { ContentWrapper, PageContentContainer, StyledLink } from "../HomePage/styledComponents";
import NavbarComponent from "../Navbar";
import SideBarComponent from "../SideBar";
import { useEffect } from "react";
import GamingStore from "../../stores/DataStore/GamingDataStore";
import { inject, observer } from "mobx-react";
import { API_STATUS, ScreenType } from "../../../common/enums/LoadingStateEnum";
import Loader from "../../../common/components/LoadingIcon";
import SomethingWentWrongPage from "../../../common/components/SomethingWentWrong";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import MyTheme from "../../../common/stores/ThemeStore";
import { GamingVideoModel } from "../../stores/types";
import LoadingWrapper from "../../../common/components/LoadingWrapper";


// const data = {
//     id: "b214dc8a-b126-4d15-8523-d37404318347",
//     title: "Drop Stack Ball",
//     thumbnail_url: "https://assets.ccbp.in/frontend/react-js/nxt-watch/drop-stack-ball-img.png",
//     view_count: "44K"
// }

interface Props{
    AuthStore: AuthDataStore;
    ThemeStore: MyTheme,
    apiStatus:API_STATUS;
    apiError:string;
    getVideo:() =>void
    GamingVideosList:Array<GamingVideoModel>
}

const GamingVideos = inject('AuthStore','ThemeStore')(observer((props:Props) =>{

    useEffect(()=>{
        renderData();
    },[]);

    const renderData = () =>{
        props.getVideo();
    }

    const renderGamingData = () =>{
        return GamingStore.currData.map((eachData)=>{
            const {id} = eachData;
            return(
                <StyledLink key={id} to={`/videos/${id}`}>
                    <GamingCard gamingDetails = {eachData}/>
                </StyledLink>
            ) 
        })
    }

    const renderInitialUI =() =>{
        return(
            <>
            </>
        )
    }

    const renderSuccessUI = () =>{
        return(
            <GamesContainer>
                <NxtWatchHeading title={"Gaming"}/>
                    <GamesWrapper>
                        {renderGamingData()}
                    </GamesWrapper>
                </GamesContainer>
        )
    }

    const getGamingVideosData =() =>{
        return(
            <>
            <SomethingWentWrongPage />
            <button onClick={renderData} >Retry</button>
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
                    onRetry={getGamingVideosData}
                />
                    {/* {GamingStore.currStatus===ScreenType.Loading && <Loader />}
                    {GamingStore.currStatus===ScreenType.Success && 
                    <GamesContainer>
                        <NxtWatchHeading title={"Gaming"}/>
                        <GamesWrapper>
                            {renderGamingData()}
                        </GamesWrapper>
                    </GamesContainer>
                    }
                    {GamingStore.currStatus===ScreenType.Failure && <SomethingWentWrongPage/>} */}
                </PageContentContainer>
            </ContentWrapper>
        </>
    )
}))

export default GamingVideos;