import { inject, observer } from "mobx-react"
import AuthDataStore from "../../../../Authentication/stores/AuthStore"
import MyTheme from "../../../../common/stores/ThemeStore"
import TrendingStore from "../../../stores/DataStore/TrendingDataStore"
import { TrendingVideoModel } from "../../../stores/types"
import NxtWatchHeading from "../../HeadingContainer"
import { PageContentContainer } from "../../HomePage/styledComponents"
import VideoListContainer from "../../VideoListView"
import { TrendingComponentWrapper } from "../styledComponents"

interface Props{
    AuthStore: AuthDataStore,
    ThemeStore: MyTheme,
    details: TrendingVideoModel
}

const TrendingPageComponent = inject('AuthStore','ThemeStore')(observer((props:Props) =>{

    const renderTrendingData =() =>{
        return <VideoListContainer details={props.details}/>
    }

    return(
        <PageContentContainer>
            <TrendingComponentWrapper>
                <NxtWatchHeading title="Trending"/>
                {renderTrendingData()}
            </TrendingComponentWrapper>
        </PageContentContainer>
    )
}))

export default TrendingPageComponent;