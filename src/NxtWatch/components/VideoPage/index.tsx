import { formatDistanceToNow } from "date-fns";
import { observer } from "mobx-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import TrendingModel from "../../stores/models/VideoModels/TrendingVideosModel";
import VideoModel from "../../stores/models/VideoModels/VideoDetailsModel";
import { PeriodDivSymbol } from "../HomePage/HomeVideoCard/styleComponents";
import { CustomSocialIcons } from "../SideBar/styledComponents";
import WrapperComponent from "../Wrapper";
import { ContentContainer, VideoButtons, VideoDetailContainer, VideoDetailsContent, VideoTime, VideoTitle } from "./styledComponents";

interface Props {
    details: VideoModel;
    toggleSaved: (arg:TrendingModel) => boolean;
    findSaved: (arg:string) => boolean;
    startTime: string;
  }
  
  const VideoCard = (observer((props:Props) => {
  
    const { id, title, videoUrl, viewCount, description, channel,publishedAt,thumbnailUrl } = props.details;
    const { name, profileImageUrl } = channel;
  
    const [isSaved,setIsSaved] = useState(props.findSaved(id));
    const [isLiked,setIsLiked] = useState(false);
    const [isDisliked,setIsDisliked] = useState(false);
  
    const {t} = useTranslation();
  
    const handleSave = () => {
      const SavedVideoObject = {
        id : id,
        title : title,
        thumbnailUrl : thumbnailUrl,
        channel : channel,
        viewCount : viewCount,
        publishedAt : publishedAt
      }
      const status = props.toggleSaved(SavedVideoObject);
      setIsSaved(!status);
    };
  
    const handleLike = () =>{
      setIsLiked(!isLiked);
      setIsDisliked(false);
    }
  
    const handleDislike = ()=>{
      setIsDisliked(!isDisliked);
      setIsLiked(false);
    }

    const getUrl =() =>{
        const {startTime} = props;
        if(startTime==="0"){
            return videoUrl;
        }
        else{
            return videoUrl + "&" +startTime;
        }
    }

    const renderWrappedComponent =() =>{
        return (
        <>
        <div>
        <div>
          <ReactPlayer url={getUrl()} width="100%" height="600px" controls={true} playing={true} />
        </div>
        <ContentContainer>
        <VideoDetailContainer>
          <div>
            <VideoTitle>{title}</VideoTitle>
            <VideoTime>{viewCount} {t("views")} <PeriodDivSymbol></PeriodDivSymbol> {formatDistanceToNow(new Date(publishedAt))}</VideoTime>
          </div>
          <div>
            <VideoButtons type="button" onClick = {handleLike} fontColor={isLiked}>
              <i className="fa-regular fa-thumbs-up"></i>{isLiked? t("liked"):t("like")}  
            </VideoButtons>
            <VideoButtons type="button" onClick={handleDislike} fontColor = {isDisliked}>
              <i className="fa-regular fa-thumbs-down"></i>{isDisliked? t("disliked"):t("dislike")}
            </VideoButtons>
            <VideoButtons type="button" onClick={handleSave} id="SaveButton" fontColor = {isSaved}><i className="fa-solid fa-plus"></i>{isSaved? t("saved"):t("save")}</VideoButtons>
          </div>
        </VideoDetailContainer>
        <hr/>
        <div>
          <div>
            <CustomSocialIcons src={profileImageUrl} />
          </div>
          <VideoDetailsContent>
            <p>{name}</p>
            <p>{description}</p>
          </VideoDetailsContent>
        </div>
        </ContentContainer>
      </div>
            </>
        )
    }
  
    return (
        <>
            <WrapperComponent renderWrappedComponent={renderWrappedComponent} />
        </>
      
    );
  }))
  
  export default VideoCard;