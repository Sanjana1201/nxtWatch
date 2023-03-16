import { inject, observer } from "mobx-react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { VideoModel } from "../../../stores/types";
import { CustomSocialIcons } from "../../SideBar/styledComponents";
import { ContentContainer, VideoButtons, VideoDetailContainer, VideoDetailsContent } from "../styledComponents";
import {useTranslation} from 'react-i18next';

interface Props {
  details: VideoModel;
  toggleSaved: (arg:VideoModel) => boolean;
  findSaved: (arg:string) => boolean;
}

const VideoCard = inject('AuthStore','ThemeStore')(observer((props:Props) => {

  const { id, title, video_url, view_count, description, channel } = props.details;
  const { name, profile_image_url } = channel;

  const [isSaved,setIsSaved] = useState(props.findSaved(id));
  const [isLiked,setIsLiked] = useState(false);
  const [isDisliked,setIsDisliked] = useState(false);

  const {t} = useTranslation();

  const handleSave = () => {
    const currData = props.details; 
    const status = props.toggleSaved(currData);
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
        <ReactPlayer url={video_url} width="100%" height="600px" />
      </div>
      <ContentContainer>
      <VideoDetailContainer>
        <div>
          <p><b>{title}</b></p>
          <p>{view_count}</p>
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
          <CustomSocialIcons src={profile_image_url} />
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
