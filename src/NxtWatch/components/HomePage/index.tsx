import { inject, observer } from 'mobx-react';
import { Component, ReactNode} from 'react';
import AuthDataStore from '../../../Authentication/stores/AuthStore';
import LoadingWrapper from '../../../common/components/LoadingWrapper';
import SomethingWentWrongPage from '../../../common/components/SomethingWentWrong';
import { API_STATUS } from '../../../common/enums/LoadingStateEnum';
import MyTheme from '../../../common/stores/ThemeStore';
import { HomeVideoModel } from '../../stores/types';
import NavbarComponent from '../Navbar';
import SideBarComponent from '../SideBar';
import HomeComponent from './HomeComponent';
import {ContentWrapper,PageContentContainer} from './styledComponents'


interface MyProps{
    AuthStore: AuthDataStore,
    ThemeStore: MyTheme,
    apiStatus: API_STATUS,
    errorStatus: string,
    onLoading: () => void,
    setInputValue: (arg:string) => void,
    activeVideos: Array<HomeVideoModel>
}
@inject('AuthStore','ThemeStore')
@observer
class HomePageComponent extends Component<MyProps>{

    componentDidMount() {
        this.renderUI();
    }

    renderUI =() =>{
        this.props.onLoading();
        this.props.setInputValue("");
    }

    renderInitialUI = () =>{
        return(
            <>
            </>
        )
    }

    renderSuccessUI = () => {
        return <HomeComponent homeVideoData = {this.props.activeVideos} filterData={this.props.setInputValue} {...this.props}/>
    }

    getHomeVideosData= () =>{
        return (
            <>
                <SomethingWentWrongPage />
                <button type="button" onClick={this.renderUI}>Retry</button>
            </>
        )
    }

    render(): ReactNode {
        return (
            <div>
                <NavbarComponent />
                <ContentWrapper>
                    <SideBarComponent />
                    <PageContentContainer>
                        <LoadingWrapper
                        apiStatus={this.props.apiStatus}
                        apiError={this.props.errorStatus}
                        onInitial={this.renderInitialUI}
                        onSuccess={this.renderSuccessUI}
                        onRetry={this.getHomeVideosData}
                        />
                    </PageContentContainer>
                </ContentWrapper>
            </div>
        )
    }
    
}

export default HomePageComponent;
