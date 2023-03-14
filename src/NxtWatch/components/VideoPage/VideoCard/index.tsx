import { observable } from "mobx";
import { inject, observer } from "mobx-react";
import { useState } from "react";
import ReactPlayer from "react-player";
import SavedVideoStore from "../../../stores/DataStore/SavedVideoDataStore";
import VideoStore from "../../../stores/DataStore/VideoDataStore";
import { VideoModel } from "../../../stores/types";
import { CustomSocialIcons } from "../../SideBar/styledComponents";
import { VideoButtons, VideoDetailContainer, VideoDetailsContent } from "../styledComponents";

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
      <VideoDetailContainer>
        <div>
          <p>{title}</p>
          <p>{view_count}</p>
        </div>
        <div>
          <VideoButtons type="button" onClick = {handleLike} fontColor={isLiked}>
            <i className="fa-regular fa-thumbs-up"></i>Like
          </VideoButtons>
          <VideoButtons type="button" onClick={handleDislike} fontColor = {isDisliked}>
            <i className="fa-regular fa-thumbs-down"></i>Dislike
          </VideoButtons>
          <VideoButtons type="button" onClick={handleSave} id="SaveButton" fontColor = {isSaved}><i className="fa-solid fa-plus"></i>Save</VideoButtons>
        </div>
      </VideoDetailContainer>
      <div>
        <div>
          <CustomSocialIcons src={profile_image_url} />
        </div>
        <VideoDetailsContent>
          <p>{name}</p>
          <p>{description}</p>
        </VideoDetailsContent>
      </div>
    </div>
  );
}))

export default VideoCard;
