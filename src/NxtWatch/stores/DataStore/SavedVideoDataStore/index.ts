import { action, observable } from "mobx";
import { API_STATUS } from "../../../../common/enums/LoadingStateEnum";
import TrendingModel from "../../models/VideoModels/TrendingVideosModel";

class SavedVideoDataStore{

    @observable currStatus : API_STATUS;
    @observable currError: string;
    @observable currData: Array<TrendingModel>;

    constructor(){
        this.currStatus = API_STATUS.SUCCESS;
        this.currData = [];
        this.currError = "";
    }

    @action addSavedVideo = (videoData:TrendingModel) =>{
        const currSavedVideo = videoData;
        this.currData = [...this.currData,currSavedVideo];
    }

    @action getSavedVideos = () =>{
        if(this.currData.length >0)
            this.currStatus = API_STATUS.SUCCESS;
        else
            this.currStatus = API_STATUS.FAILURE;
        return this.currData;
    }

    @action findSavedVideo = (videoId:string) =>{
        const findResult =  this.currData.find((eachData:TrendingModel)=>{
            const {id} = eachData;
            if(id===videoId){
                return true;
            }
            return false;
        });
        if(findResult===undefined){
            return false;
        }
        else{
            return true;
        }
    }

    @action removeSavedVideo =(videoId:string)=>{
        const filteredData =  this.currData.filter((eachData:any)=>{
            const {id} = eachData;
            if(id ===videoId){
                return false;
            }
            else{
                return true;
            }
        })
        this.currData = filteredData; 
        return filteredData;
    }
}

const SavedVideoStore = new SavedVideoDataStore();

export default SavedVideoStore;