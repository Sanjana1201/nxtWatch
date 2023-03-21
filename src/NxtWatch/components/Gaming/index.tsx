import NxtWatchHeading from "../HeadingContainer";
import {GamesWrapper, StyledGamingLink} from "./styledComponents"
import GamingCard from "./GamingCards";
import GamingStore from "../../stores/DataStore/GamingDataStore";
import { observer } from "mobx-react";
import {useTranslation} from 'react-i18next';
import GamingModel from "../../stores/models/VideoModels/GamingVideosModel";
import WrapperComponent from "../Wrapper";

interface Props{
    gamingVideosList:Array<GamingModel>
}

const GamingVideos = (observer((props:Props) =>{

    const {t} = useTranslation();

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

    const renderWrappedComponent = () => {
        return (
            <>
                <NxtWatchHeading title={t("Gaming")} />
                <GamesWrapper>
                        {renderGamingData()}
                </GamesWrapper>
            </>
        )
    }

    return (
        <>
            <WrapperComponent renderWrappedComponent={renderWrappedComponent} />
        </>
    )
}))

export default GamingVideos;