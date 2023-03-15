import { action, computed, observable } from "mobx";
import { API_STATUS } from "../../../../common/enums/LoadingStateEnum";
import { VideoDataService } from "../../../services/VideoDataService";
import { VideoModel } from "../../types";

class VideoDataStore{
    @observable currStatus : API_STATUS;
    @observable currData : VideoModel;
    @observable currError :string;
    // @observable SaveButton = ;

    constructor(){
        this.currStatus = API_STATUS.INITIAL;
        this.currData = {} as VideoModel;
        this.currError = "";
        // SaveButton = false;
    }

    @action getCurrentVideoData = (videoUrl:string) =>{
        VideoDataService(videoUrl)
        .then((response)=> response.json())
        .then((data)=>{
            if(data.video_details===undefined){
                this.currStatus = API_STATUS.FAILURE;
            }
            else{
                this.currData = data.video_details;
                this.currStatus = API_STATUS.SUCCESS;
            }
        })
        .catch((error)=>{
            this.currError = error;
            this.currStatus = API_STATUS.FAILURE;
        });
    }
    // @action changeSavedStatus = () =>{
    //     this.SaveButton = !this.SaveButton;
    // }

    // @computed get SavedStatus(){
    //     return this.SaveButton;
    // }
}

const VideoStore = new VideoDataStore();

export default VideoStore;