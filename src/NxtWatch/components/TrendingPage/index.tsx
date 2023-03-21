import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import TrendingModel from "../../stores/models/VideoModels/TrendingVideosModel";
import NxtWatchHeading from "../HeadingContainer";
import VideoListContainer from "../VideoListView";
import WrapperComponent from "../Wrapper";

interface Props{
    details: Array<TrendingModel>
}

const TrendingPageComponent = (observer((props:Props) =>{

    const {t} = useTranslation();

    const renderTrendingData =() =>{
        return <VideoListContainer videoData={props.details} />
    }

    const renderWrappedComponent =() =>{
        return (
            <>
                <NxtWatchHeading title={t("Trending")} />
                {renderTrendingData()}
            </>
        )
    }

    return(
        <>
            <WrapperComponent renderWrappedComponent={renderWrappedComponent} />
        </>
    )
}))

export default TrendingPageComponent;