import { inject, observer } from "mobx-react"
import { ThemeProvider } from "styled-components"
import AuthDataStore from "../../../../Authentication/stores/AuthStore"
import { DarkModeColors, LightModeColors } from "../../../../common/constants/colors"
import MyTheme from "../../../../common/stores/ThemeStore"
import { TrendingVideoModel } from "../../../stores/types"
import NxtWatchHeading from "../../HeadingContainer"
import { PageContentContainer } from "../../HomePage/styledComponents"
import VideoListContainer from "../../VideoListView"
import { TrendingComponentWrapper } from "../styledComponents"

interface Props{
    AuthStore: AuthDataStore,
    ThemeStore: MyTheme,
    details: Array<TrendingVideoModel>
}

const TrendingPageComponent = inject('AuthStore','ThemeStore')(observer((props:Props) =>{

    const renderTrendingData =() =>{
        return <VideoListContainer details={props.details}/>
    }

    return(
        <ThemeProvider theme={props.ThemeStore.theme==='Light'? LightModeColors: DarkModeColors}>
        <PageContentContainer>
            <TrendingComponentWrapper>
                <NxtWatchHeading title="Trending" {...props}/>
                {renderTrendingData()}
            </TrendingComponentWrapper>
        </PageContentContainer>
        </ThemeProvider>
    )
}))

export default TrendingPageComponent;