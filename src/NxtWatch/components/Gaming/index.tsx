import NxtWatchHeading from "../HeadingContainer";
import {GamesWrapper,GamesContainer, StyledGamingLink} from "./styledComponents"
import GamingCard from "./GamingCards";
import { ContentWrapper, PageContentContainer } from "../HomePage/styledComponents";
import NavbarComponent from "../Navbar";
import SideBarComponent from "../SideBar";
import { useEffect } from "react";
import GamingStore from "../../stores/DataStore/GamingDataStore";
import { observer } from "mobx-react";
import { API_STATUS } from "../../../common/enums/LoadingStateEnum";
import SomethingWentWrongPage from "../../../common/components/SomethingWentWrong";
import LoadingWrapper from "../../../common/components/LoadingWrapper";
import {useTranslation} from 'react-i18next';
import GamingModel from "../../stores/models/VideoModels/GamingVideosModel";

interface Props{
    apiStatus:API_STATUS;
    apiError:string;
    getVideo:() =>void
    GamingVideosList:Array<GamingModel>
}

const GamingVideos = (observer((props:Props) =>{

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
                    <GamingCard gamingDetails = {eachData} />
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
                <NxtWatchHeading title={t("Gaming")} />
                    <GamesWrapper>
                        {renderGamingData()}
                    </GamesWrapper>
                </GamesContainer>
        )
    }

    const getGamingVideosData =() =>{
        return(
            <>
            <SomethingWentWrongPage onRetry={renderData}/>
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
                </PageContentContainer>
            </ContentWrapper>
        </>
    )
}))

export default GamingVideos;