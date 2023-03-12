import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import Loader from '../../../common/components/LoadingIcon';
import LoadingWrapper from '../../../common/components/LoadingWrapper';
import { ScreenType } from '../../../common/enums/LoadingStateEnum';
import MyHomeDataStore from '../../stores/DataStore/HomeDataStore';
import NavbarComponent from '../Navbar';
import SideBarComponent from '../SideBar';
import HomeBanner from './HomeBanner';
import HomeVideoCards from './HomeVideoCard';
import {VideoListContainer,ContentWrapper,PageContentContainer, StyledLink} from './styledComponents'

const HomeComponents = inject('AuthStore','ThemeStore')(observer(({AuthStore,ThemeStore}) =>{

    useEffect(()=>{
        getHomeVideosData()
    },[]);
    
    const getHomeVideosData = () => {
        MyHomeDataStore.GetHomeData("");

    }

    const handleNewInput =() =>{
        const inputValue = (document.getElementById('searchValue') as HTMLInputElement).value;
        MyHomeDataStore.GetHomeData(inputValue);
    }

    const RenderHomeVideoCards = () => {
        return MyHomeDataStore.currData.map((eachData)=>{
            const {id} = eachData;
            return (
                <>
                <StyledLink key={id} to={`/videos/${id}`}>
                    <HomeVideoCards details={eachData}/>
                </StyledLink>
                </>
            )
        })
    }

    const renderSuccessUI = () => {
        return RenderHomeVideoCards()
    }

    return (
        <div>
            <NavbarComponent />
            <ContentWrapper>
                <SideBarComponent />
                <PageContentContainer>
                    {MyHomeDataStore.currStatus===ScreenType.Loading && <Loader />}
            {(MyHomeDataStore.currStatus===ScreenType.Success || MyHomeDataStore.currStatus===ScreenType.Failure) && <>
                <div>
                <div>
                <input type="text" id="searchValue" onChange={handleNewInput}/>
                <button type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <VideoListContainer>
                {MyHomeDataStore.currStatus===ScreenType.Failure && <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" alt="Failed"/>}
                {MyHomeDataStore.currStatus===ScreenType.Success && RenderHomeVideoCards()}
                </VideoListContainer>
                </div>
            </>}
            {MyHomeDataStore.showBanner===true? <HomeBanner />:<></>}
                    {/* <LoadingWrapper
                    apiStatus={MyHomeDataStore.currStatus}
                    apiError={MyHomeDataStore.apiError}
                    onSuccess={renderSuccessUI}
                    onRetry={getHomeVideosData}
                    /> */}
                </PageContentContainer>
            </ContentWrapper>
        </div>
    )
}))

export default HomeComponents;