import { action, observable } from "mobx";
import { ScreenType } from "../../../../common/enums/LoadingStateEnum";
import { GamingDataApi } from "../../../services/GamingDataService";

class GamingDataStore{
    @observable currStatus = ScreenType.Loading;
    @observable currData = []

    @action getGamingData = () =>{
        GamingDataApi()
        .then((response)=>response.json())
        .then((data:any)=>{
            if(data.videos===undefined){
                this.currStatus = ScreenType.Failure;
            }
            else{
                this.currData = data.videos;
                this.currStatus = ScreenType.Success;
            }
        })
        .catch((error)=>{
            this.currStatus = ScreenType.Failure;
        })
    }
}

const GamingStore = new GamingDataStore();

export default GamingStore;