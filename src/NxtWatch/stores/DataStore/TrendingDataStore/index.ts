import { action, observable } from "mobx";
import { API_STATUS } from "../../../../common/enums/LoadingStateEnum";
import { TrendingDataApi } from "../../../services/TrendingDataService";
import TrendingModel from "../../models/VideoModels/TrendingVideosModel";
import { TrendingVideoModel } from "../../types";

class TrendingDataStore{

    @observable currStatus :  API_STATUS;
    @observable currError : string;
    @observable currData : Array<TrendingVideoModel>;

    constructor(){
        this.currStatus = API_STATUS.INITIAL;
        this.currError = "";
        this.currData = [];
    }

    @action getTrendingData = ()=>{
        this.currStatus = API_STATUS.LOADING;
        TrendingDataApi()
        .then((response)=>response.json())
        .then((data)=>{
            if(data.videos===undefined){
                this.currStatus = API_STATUS.FAILURE;
            }
            else{
                this.currData = data.videos.map((eachVideo:TrendingVideoModel)=>{
                    return new TrendingModel(eachVideo);
                })
                this.currStatus = API_STATUS.SUCCESS;
            }
        })
        .catch((error)=>{
            console.log("error",error);
            this.currError = error;
            this.currStatus = API_STATUS.FAILURE;
        })
    }
}

const TrendingStore = new TrendingDataStore();

export default TrendingStore;