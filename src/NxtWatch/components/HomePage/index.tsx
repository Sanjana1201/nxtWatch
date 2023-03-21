import { observable } from "mobx";
import { observer } from "mobx-react";
import { Component, ReactNode } from "react";
import NoResultPage from "../../../common/components/NoSearchResults";
import HomeModel from "../../stores/models/VideoModels/HomeVideosModel";
import WrapperComponent from "../Wrapper";
import HomePageBanner from "./HomeBanner";
import HomeVideoCards from "./HomeVideoCard";
import { InputBox, InputBoxDiv, SearchButton, StyledLink, VideoListContainer } from "./styledComponents";

interface Props{
    homeVideoData: Array<HomeModel>,
    filterData: (arg:string) => void
}

@observer
class HomeComponent extends Component<Props>{

    @observable currBannerStatus = true;

    RenderHomeVideoCards = () => {
        if(this.props.homeVideoData.length===0){
            return <NoResultPage />
        }
        else{
        return this.props.homeVideoData.map((eachData)=>{
            const {id} = eachData;
            return (
                <StyledLink key={id} to={`/videos/${id}`}>
                    <HomeVideoCards details={eachData} />
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

    renderWrappedComponent = () =>{
        return (
            <>
            {this.currBannerStatus===false? <></>:<HomePageBanner bannerStatus={this.currBannerStatus} bannerFunc={this.hideBannerFunc}/>}
                <InputBoxDiv>
                    <InputBox type="text" id="searchValue" onChange={this.handleInput} placeholder="Search"/>
                    <SearchButton type="button"><i className="fa-solid fa-magnifying-glass"></i></SearchButton>
                </InputBoxDiv>
                <VideoListContainer>
                    {this.RenderHomeVideoCards()}
                </VideoListContainer>
            </>
        )
    }

    render(): ReactNode {
        return (
            <div>
                <WrapperComponent renderWrappedComponent={this.renderWrappedComponent} />
            </div>
        )
    }
}
export default HomeComponent;