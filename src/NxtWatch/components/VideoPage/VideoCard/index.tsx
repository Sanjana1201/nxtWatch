import ReactPlayer from "react-player";
import SavedVideoStore from "../../../stores/DataStore/SavedVideoDataStore";
import VideoStore from "../../../stores/DataStore/VideoDataStore";
import { CustomSocialIcons } from "../../SideBar/styledComponents";
import { VideoButtons, VideoDetailContainer } from "../styledComponents";

// const data = {
//     video_details: {
//       id: "ad9822d2-5763-41d9-adaf-baf9da3fd490",
//       title: "iB Hubs Announcement Event",
//       video_url: "https://www.youtube.com/watch?v=pT2ojWWjum8",
//       thumbnail_url: "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png",
//       channel: {
//         name: "iB Hubs",
//         profile_image_url: "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png",
//         subscriber_count: "1M"
//       },
//       view_count: "26K",
//       published_at: "Nov 29, 2016",
//       description: "iB Hubs grandly celebrated its Announcement Event in November 13, 2016, in the presence of many eminent personalities from the Government, Industry, and Academia with Shri Amitabh Kant, CEO, NITI Aayog as the Chief Guest."
//     }
//   }

const VideoCard =(props:any)=>{
    const {id,title,video_url,view_count,description,channel} = props.details;
    const {name,profile_image_url} = channel;

    const handleSave =() =>{
        const result = SavedVideoStore.findSavedVideo(id);
        // console.log(result);
        if(result===undefined){
            SavedVideoStore.addSavedVideo(props.details);
            VideoStore.changeSavedStatus();
            // console.log(VideoStore.SavedStatus);
        }
        else{
            SavedVideoStore.removeSavedVideo(props.details);
            VideoStore.changeSavedStatus();
            // console.log(VideoStore.SavedStatus);
        }
    }

    return (
        <div>
            <div>
                <ReactPlayer url={video_url} width='100%' height='600px'/>
            </div>
            <VideoDetailContainer>
            <div>
                <p>{title}</p>
                <p>{view_count}</p>
            </div>
            <div>
                <VideoButtons type="button"><i className="fa-regular fa-thumbs-up"></i>Like</VideoButtons>
                <VideoButtons type="button" id="DislikeButton"><i className="fa-regular fa-thumbs-down"></i>Dislike</VideoButtons>
                <VideoButtons type="button" onClick={handleSave} id="SaveButton" fontColor = {VideoStore.SavedStatus}><i className="fa-solid fa-plus"></i>Save</VideoButtons>
            </div>
            </VideoDetailContainer>
                <div>
                    <div>
                        <CustomSocialIcons src={profile_image_url} />
                    </div>
                    <div>
                        <p>
                            {name}
                        </p>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default VideoCard;