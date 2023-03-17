import { inject, observer } from 'mobx-react'
import { useEffect } from 'react'
import AuthDataStore from '../../../Authentication/stores/AuthStore'
import LoadingWrapper from '../../../common/components/LoadingWrapper'
import SomethingWentWrongPage from '../../../common/components/SomethingWentWrong'
import { API_STATUS } from '../../../common/enums/LoadingStateEnum'
import MyTheme from '../../../common/stores/ThemeStore'
import TrendingModel from '../../stores/models/VideoModels/TrendingVideosModel'
import VideoModel from '../../stores/models/VideoModels/VideoDetailsModel'
import { ContentWrapper, PageContentContainer } from '../HomePage/styledComponents'
import NavbarComponent from '../Navbar'
import SideBarComponent from '../SideBar'
import VideoCard from './VideoCard';

interface Props{
    AuthStore : AuthDataStore,
    ThemeStore : MyTheme,
    apiStatus : API_STATUS,
    apiError : string,
    getVideo:(arg:string) =>void,
    VideosList: VideoModel
    VideoId: string,
    savedFunc: (arg:TrendingModel) => boolean,
    savedStatus: (arg:string) =>boolean
}

const VideoPlayer = inject('AuthStore','ThemeStore')(observer((props:Props) =>{

    useEffect(()=>{
        renderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const renderData = () =>{
        props.getVideo(props.VideoId);
    }

    const renderInitialUI = () =>{
        return (<></>)
    }

    const renderSuccessUI =() =>{
        return <VideoCard details={props.VideosList} toggleSaved = {props.savedFunc} findSaved={props.savedStatus} {...props}/>
    }

    const getVideosData =() =>{
        return (
            <>
            <SomethingWentWrongPage onRetry={renderData} {...props}/>
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
                    onRetry={getVideosData}
                />
                </PageContentContainer>
            </ContentWrapper>
            </>
    )
}))

export default VideoPlayer;