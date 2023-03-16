import NxtWatchHeading from "../HeadingContainer";
import {GamesWrapper,GamesContainer, StyledGamingLink} from "./styledComponents"
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
import {useTranslation} from 'react-i18next';

interface Props{
    AuthStore: AuthDataStore;
    ThemeStore: MyTheme,
    apiStatus:API_STATUS;
    apiError:string;
    getVideo:() =>void
    GamingVideosList:Array<GamingVideoModel>
}

const GamingVideos = inject('AuthStore','ThemeStore')(observer((props:Props) =>{

    const {t} = useTranslation();

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
                
                <StyledGamingLink key={id} to={`/videos/${id}`}>
                    <GamingCard gamingDetails = {eachData} {...props}/>
                </StyledGamingLink>
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
                <NxtWatchHeading title={t("Gaming")} {...props}/>
                    <GamesWrapper>
                        {renderGamingData()}
                    </GamesWrapper>
                </GamesContainer>
        )
    }

    const getGamingVideosData =() =>{
        return(
            <>
            <SomethingWentWrongPage onRetry={renderData} {...props}/>
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