import { inject, observer } from 'mobx-react'
import { useEffect } from 'react'
import Loader from '../../../common/components/LoadingIcon'
import SomethingWentWrongPage from '../../../common/components/SomethingWentWrong'
import { ScreenType } from '../../../common/enums/LoadingStateEnum'
import VideoStore from '../../stores/DataStore/VideoDataStore'
import { ContentWrapper, PageContentContainer } from '../HomePage/styledComponents'
import NavbarComponent from '../Navbar'
import SideBarComponent from '../SideBar'
import VideoCard from './VideoCard'

const VideoPlayer = inject('AuthStore','ThemeStore')(observer(({AuthStore,ThemeStore,...props}) =>{

    useEffect(()=>{
        VideoStore.getCurrentVideoData(props.match.params.id);
    },[])

    return (
<>
        <NavbarComponent />
            <ContentWrapper>
                <SideBarComponent />
                <PageContentContainer>
                    {VideoStore.currStatus===ScreenType.Loading && <Loader/>}
                    {VideoStore.currStatus===ScreenType.Success && <VideoCard details={VideoStore.currData}/>}
                    {VideoStore.currStatus===ScreenType.Failure && <SomethingWentWrongPage/>}
                </PageContentContainer>
            </ContentWrapper>

            </>
    )
}))

export default VideoPlayer;