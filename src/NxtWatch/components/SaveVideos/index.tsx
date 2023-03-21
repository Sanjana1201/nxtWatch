import { observer } from "mobx-react";
import { API_STATUS } from "../../../common/enums/LoadingStateEnum";
import NxtWatchHeading from "../HeadingContainer";
import VideoListContainer from "../VideoListView";
import {useTranslation} from 'react-i18next';
import TrendingModel from "../../stores/models/VideoModels/TrendingVideosModel";
import WrapperComponent from "../Wrapper";

interface Props{
    apiStatus : API_STATUS,
    apiError : string,
    SavedVideosList: Array<TrendingModel>
}

const SavedVideos = (observer((props:Props) =>{

    const {t} = useTranslation();

    const renderVideosList = () =>{
        const SavedVideos = props.SavedVideosList;
        return <VideoListContainer videoData={SavedVideos} />
    }

    const renderWrappedComponent =()=>{
        return (
            <>
                <NxtWatchHeading title={t("Saved Videos")}/>
                {renderVideosList()}
            </>
        )
    }

    return (
        <>
            <WrapperComponent renderWrappedComponent={renderWrappedComponent} />
        </>
    )
}))

export default SavedVideos;