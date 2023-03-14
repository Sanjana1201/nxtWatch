import NxtWatchHeading from "../HeadingContainer";
import {GamesWrapper,GamesContainer} from "./styledComponents"
import GamingCard from "./GamingCards";
import { ContentWrapper, PageContentContainer, StyledLink } from "../HomePage/styledComponents";
import NavbarComponent from "../Navbar";
import SideBarComponent from "../SideBar";
import { useEffect } from "react";
import GamingStore from "../../stores/DataStore/GamingDataStore";
import { inject, observer } from "mobx-react";
import { API_STATUS } from "../../../common/enums/LoadingStateEnum";
import SomethingWentWrongPage from "../../../common/components/SomethingWentWrong";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import MyTheme from "../../../common/stores/ThemeStore";
import { GamingVideoModel } from "../../stores/types";
import LoadingWrapper from "../../../common/components/LoadingWrapper";
import { ThemeProvider } from "styled-components";
import { DarkModeColors, LightModeColors } from "../../../common/constants/colors";


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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const renderData = () =>{
        props.getVideo();
    }

    const renderGamingData = () =>{
        return GamingStore.currData.map((eachData)=>{
            const {id} = eachData;
            return(
                
                <StyledLink key={id} to={`/videos/${id}`}>
                    <GamingCard gamingDetails = {eachData} {...props}/>
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
                <NxtWatchHeading title={"Gaming"} {...props}/>
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
        <ThemeProvider theme={props.ThemeStore.theme==='Light'? LightModeColors: DarkModeColors}>
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
                </PageContentContainer>
            </ContentWrapper>
            </ThemeProvider>
        </>
    )
}))

export default GamingVideos;