import { inject, observer } from "mobx-react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { CustomSocialIcons } from "../../SideBar/styledComponents";
import { ContentContainer, VideoButtons, VideoDetailContainer, VideoDetailsContent } from "../styledComponents";
import {useTranslation} from 'react-i18next';
import { VideoTime, VideoTitle } from "./styledComponents";
import { PeriodDivSymbol } from "../../HomePage/HomeVideoCard/styleComponents";
import { formatDistanceToNow } from "date-fns";
import AuthDataStore from "../../../../Authentication/stores/AuthStore";
import MyTheme from "../../../../common/stores/ThemeStore";
import VideoModel from "../../../stores/models/VideoModels/VideoDetailsModel";
import TrendingModel from "../../../stores/models/VideoModels/TrendingVideosModel";

interface Props {
  AuthStore : AuthDataStore,
  ThemeStore : MyTheme,
  details: VideoModel;
  toggleSaved: (arg:TrendingModel) => boolean;
  findSaved: (arg:string) => boolean;
}

const VideoCard = inject('AuthStore','ThemeStore')(observer((props:Props) => {

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

  return (
    <div>
      <div>
        <ReactPlayer url={videoUrl} width="100%" height="600px" />
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
  );
}))

export default VideoCard;
