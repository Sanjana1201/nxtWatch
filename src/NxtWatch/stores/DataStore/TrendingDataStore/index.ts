import { action, observable } from "mobx";
import { ScreenType } from "../../../../common/enums/LoadingStateEnum";
import { TrendingDataApi } from "../../../services/TrendingDataService";

class TrendingDataStore{
    @observable currStatus = ScreenType.Loading;
    @observable currData = [];

    @action getTrendingData(){
        TrendingDataApi()
        .then((response)=>response.json())
        .then((data)=>{
            if(data.videos===undefined){
                this.currStatus = ScreenType.Failure;
            }
            else{
                this.currData =data.videos;
                this.currStatus = ScreenType.Success;
            }
        })
        .catch((error)=>{
            this.currStatus = ScreenType.Failure;
        })
    }
}

const TrendingStore = new TrendingDataStore();

export default TrendingStore;