import { action, observable } from "mobx";
import { ScreenType } from "../../../../common/enums/LoadingStateEnum";

class SavedVideoDataStore{

    @observable currStatus = ScreenType.Loading;
    @observable currData:any = [];

    @action addSavedVideo = (videoData:any) =>{
        const currSavedVideo = videoData;
        this.currData = [...this.currData,currSavedVideo];
    }

    @action getSavedVideos = () =>{
        return this.currData;
    }

    @action findSavedVideo = (videoId:any) =>{
        return this.currData.find((eachData:any)=>{
            const {id} = eachData;
            if(id===videoId){
                return true;
            }
            return false;
        })
    }

    @action removeSavedVideo =(videoData:any)=>{
        const filteredData =  this.currData.filter((eachData:any)=>{
            const {id} = eachData;
            if(id ===videoData.id){
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