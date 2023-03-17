import { observer } from 'mobx-react';
import { Component, ReactNode} from 'react';
import LoadingWrapper from '../../../common/components/LoadingWrapper';
import SomethingWentWrongPage from '../../../common/components/SomethingWentWrong';
import { API_STATUS } from '../../../common/enums/LoadingStateEnum';
import HomeModel from '../../stores/models/VideoModels/HomeVideosModel';
import NavbarComponent from '../Navbar';
import SideBarComponent from '../SideBar';
import HomeComponent from './HomeComponent';
import {ContentWrapper,PageContentContainer} from './styledComponents'

interface MyProps{
    apiStatus: API_STATUS,
    errorStatus: string,
    onLoading: () => void,
    setInputValue: (arg:string) => void,
    activeVideos: Array<HomeModel>,
}

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
        return <HomeComponent homeVideoData = {this.props.activeVideos} filterData={this.props.setInputValue}/>
    }

    getHomeVideosData= () =>{
        return (
            <>
                <SomethingWentWrongPage onRetry={this.renderUI} />
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
