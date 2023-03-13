import { action, observable } from "mobx";
import { API_STATUS, ScreenType } from "../../../../common/enums/LoadingStateEnum";
import { GamingDataApi } from "../../../services/GamingDataService";
import GamingModel from "../../models/VideoModels/GamingVideosModel";
import { GamingVideoModel } from "../../types";

class GamingDataStore{
    @observable currStatus : API_STATUS;
    @observable currError : string;
    @observable currData : Array<GamingVideoModel>

    constructor(){
        this.currStatus = API_STATUS.INITIAL;
        this.currError = "";
        this.currData = [];
    }

    @action getGamingData = () =>{
        this.currStatus = API_STATUS.LOADING;
        GamingDataApi()
        .then((response)=>response.json())
        .then((data:any)=>{
            if(data.videos===undefined){
                this.currStatus = API_STATUS.FAILURE;
            }
            else{
                this.currData = data.videos.map((eachData:GamingVideoModel)=>{
                    return new GamingModel(eachData);
                })
                this.currStatus = API_STATUS.SUCCESS;
            }
        })
        .catch((error)=>{
            this.currError = error;
            this.currStatus = API_STATUS.FAILURE;
        })
    }
}

const GamingStore = new GamingDataStore();

export default GamingStore;