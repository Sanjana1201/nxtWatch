import { inject, observer } from 'mobx-react'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import AuthDataStore from '../../../Authentication/stores/AuthStore'
import LoadingWrapper from '../../../common/components/LoadingWrapper'
import SomethingWentWrongPage from '../../../common/components/SomethingWentWrong'
import { DarkModeColors, LightModeColors } from '../../../common/constants/colors'
import { API_STATUS } from '../../../common/enums/LoadingStateEnum'
import MyTheme from '../../../common/stores/ThemeStore'
import VideoStore from '../../stores/DataStore/VideoDataStore'
import { VideoModel } from '../../stores/types'
import { ContentWrapper, PageContentContainer } from '../HomePage/styledComponents'
import NavbarComponent from '../Navbar'
import SideBarComponent from '../SideBar'
import VideoCard from './VideoCard';
import {useTranslation} from 'react-i18next';

interface Props{
    AuthStore : AuthDataStore,
    ThemeStore : MyTheme,
    apiStatus : API_STATUS,
    apiError : string,
    getVideo:(arg:string) =>void,
    VideosList: VideoModel
    VideoId: string,
    savedFunc: (arg:VideoModel) => boolean,
    savedStatus: (arg:string) =>boolean
}

const VideoPlayer = inject('AuthStore','ThemeStore')(observer((props:Props) =>{

    const {t} = useTranslation();

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
        return <VideoCard details={props.VideosList} toggleSaved = {props.savedFunc} findSaved={props.savedStatus}/>
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
                    onRetry={getVideosData}
                />
                </PageContentContainer>
            </ContentWrapper>
            </ThemeProvider>
            </>
    )
}))

export default VideoPlayer;