import { observable } from "mobx";
import { inject, observer } from "mobx-react";
import { Component, ReactNode } from "react";
import AuthDataStore from "../../../../Authentication/stores/AuthStore";
import NoResultPage from "../../../../common/components/NoSearchResults";
import MyTheme from "../../../../common/stores/ThemeStore";
import { HomeVideoModel } from "../../../stores/types";
import HomePageBanner from "../HomeBanner";
import HomeVideoCards from "../HomeVideoCard";
import { StyledLink, VideoListContainer } from "../styledComponents";
import { InputBoxDiv } from "./styledComponents";

interface Props{
    AuthStore: AuthDataStore,
    ThemeStore: MyTheme,
    homeVideoData: Array<HomeVideoModel>,
    filterData: (arg:string) => void
}

@inject('AuthStore','ThemeStore')
@observer
class HomeComponent extends Component<Props>{

    @observable currBannerStatus = true;

    RenderHomeVideoCards = () => {
        if(this.props.homeVideoData.length===0){
            return <NoResultPage {...this.props}/>
        }
        else{
        return this.props.homeVideoData.map((eachData)=>{
            const {id} = eachData;
            return (
                <StyledLink key={id} to={`/videos/${id}`}>
                    <HomeVideoCards details={eachData} {...this.props}/>
                </StyledLink>
            )
        })
        }
    }

    handleInput = (e:React.ChangeEvent) =>{
        const inputEl = e.target as HTMLInputElement;
        this.props.filterData(inputEl.value);
    }

    hideBannerFunc = ()=>{
        this.currBannerStatus = false;
    }

    render(): ReactNode {
        return (
            <div>
                {this.currBannerStatus===false? <></>:<HomePageBanner bannerStatus={this.currBannerStatus} bannerFunc={this.hideBannerFunc}/>}
                <InputBoxDiv>
                    <input type="text" id="searchValue" onChange={this.handleInput}/>
                    <button type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
                </InputBoxDiv>
                <VideoListContainer>
                    {this.RenderHomeVideoCards()}
                </VideoListContainer>
            </div>
        )
    }
}
export default HomeComponent;