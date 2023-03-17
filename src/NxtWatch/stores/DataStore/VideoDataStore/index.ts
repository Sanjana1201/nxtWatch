import { action, observable } from "mobx";
import { API_STATUS } from "../../../../common/enums/LoadingStateEnum";
import { VideoDataService } from "../../../services/VideoDataService";
import VideoModel from "../../models/VideoModels/VideoDetailsModel";

class VideoDataStore{
    @observable currStatus : API_STATUS;
    @observable currData : VideoModel;
    @observable currError :string;

    constructor(){
        this.currStatus = API_STATUS.INITIAL;
        this.currData = {} as VideoModel;
        this.currError = "";
    }

    @action getCurrentVideoData = (videoUrl:string) =>{
        VideoDataService(videoUrl)
        .then((response)=> response.json())
        .then((data)=>{
            if(data.video_details===undefined){
                this.currStatus = API_STATUS.FAILURE;
            }
            else{
                this.currData = new VideoModel(data.video_details);
                this.currStatus = API_STATUS.SUCCESS;
            }
        })
        .catch((error)=>{
            this.currError = error;
            this.currStatus = API_STATUS.FAILURE;
        });
    }
}

const VideoStore = new VideoDataStore();

export default VideoStore;