import { action, computed, observable } from "mobx";
import { ScreenType } from "../../../../common/enums/LoadingStateEnum";
import { VideoDataService } from "../../../services/VideoDataService";

class VideoDataStore{
    @observable currStatus = ScreenType.Loading;
    @observable currData = [];
    @observable SaveButton = false;

    @action getCurrentVideoData = (videoUrl:string) =>{
        VideoDataService(videoUrl)
        .then((response)=> response.json())
        .then((data)=>{
            if(data.video_details===undefined){
                this.currStatus = ScreenType.Failure
            }
            else{
                this.currData = data.video_details;
                this.currStatus = ScreenType.Success;
            }
        })
        .catch((error)=>{
            this.currStatus = ScreenType.Failure;
        });
    }
    @action changeSavedStatus = () =>{
        this.SaveButton = !this.SaveButton;
    }

    @computed get SavedStatus(){
        return this.SaveButton;
    }
}

const VideoStore = new VideoDataStore();

export default VideoStore;