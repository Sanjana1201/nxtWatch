import { observable } from "mobx";
import { inject, observer } from "mobx-react";
import { Component, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import AuthDataStore from "../../../../Authentication/stores/AuthStore";
import NoResultPage from "../../../../common/components/NoSearchResults";
import { DarkModeColors, LightModeColors } from "../../../../common/constants/colors";
import MyTheme from "../../../../common/stores/ThemeStore";
import { HomeVideoModel } from "../../../stores/types";
import HomePageBanner from "../HomeBanner";
import HomeVideoCards from "../HomeVideoCard";
import { StyledLink, VideoListContainer } from "../styledComponents";
import { InputBox, InputBoxDiv, SearchButton } from "./styledComponents";

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
            <ThemeProvider theme={this.props.ThemeStore.theme==='Light'? LightModeColors: DarkModeColors}>
            <div>
                {this.currBannerStatus===false? <></>:<HomePageBanner bannerStatus={this.currBannerStatus} bannerFunc={this.hideBannerFunc}/>}
                <InputBoxDiv>
                    <InputBox type="text" id="searchValue" onChange={this.handleInput} placeholder="Search"/>
                    <SearchButton type="button"><i className="fa-solid fa-magnifying-glass"></i></SearchButton>
                </InputBoxDiv>
                <VideoListContainer>
                    {this.RenderHomeVideoCards()}
                </VideoListContainer>
            </div>
            </ThemeProvider>
        )
    }
}
export default HomeComponent;