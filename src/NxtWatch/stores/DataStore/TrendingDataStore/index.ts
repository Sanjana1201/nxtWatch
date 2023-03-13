import { action, observable } from "mobx";
import { API_STATUS } from "../../../../common/enums/LoadingStateEnum";
import { TrendingDataApi } from "../../../services/TrendingDataService";

class TrendingDataStore{
    @observable currStatus = API_STATUS.INITIAL;
    @observable currError = "";
    @observable currData = [];

    @action getTrendingData(){
        TrendingDataApi()
        .then((response)=>response.json())
        .then((data)=>{
            if(data.videos===undefined){
                this.currStatus = API_STATUS.FAILURE;
            }
            else{
                this.currData =data.videos;
                this.currStatus = API_STATUS.SUCCESS;
            }
        })
        .catch((error)=>{
            this.currStatus = API_STATUS.FAILURE;
        })
    }
}

const TrendingStore = new TrendingDataStore();

export default TrendingStore;