import { inject, observer } from "mobx-react"
import AuthDataStore from "../../../../Authentication/stores/AuthStore"
import MyTheme from "../../../../common/stores/ThemeStore"
import NxtWatchHeading from "../../HeadingContainer"
import VideoListContainer from "../../VideoListView"
import { TrendingComponentWrapper } from "../styledComponents"
import {useTranslation} from 'react-i18next';
import TrendingModel from "../../../stores/models/VideoModels/TrendingVideosModel"


interface Props{
    AuthStore: AuthDataStore,
    ThemeStore: MyTheme,
    details: Array<TrendingModel>
}

const TrendingPageComponent = inject('AuthStore','ThemeStore')(observer((props:Props) =>{

    const {t} = useTranslation();

    const renderTrendingData =() =>{
        return <VideoListContainer videoData={props.details} {...props}/>
    }

    return(
            <TrendingComponentWrapper>
                <NxtWatchHeading title={t("Trending")} {...props}/>
                {renderTrendingData()}
            </TrendingComponentWrapper>
    )
}))

export default TrendingPageComponent;