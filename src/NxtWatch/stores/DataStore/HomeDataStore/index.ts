import { action, observable } from "mobx";
import { ScreenType } from "../../../../common/enums/LoadingStateEnum";
import { HomeDataFetchApi } from "../../../services/HomeDataService";


class DataStore {

    @observable currStatus = ScreenType.Loading;
    @observable currData = [];
    @observable showBanner = true;

    @action GetHomeData = (inputValue:string) =>{
        HomeDataFetchApi(inputValue)
        .then((response) => response.json())
        .then((data) =>{
            this.currStatus=ScreenType.Success;
            this.currData = data.videos;
        })
        .catch((error)=>{
            this.currStatus=ScreenType.Failure;
        })
    } 

    @action hideBanner = () =>{
        return this.showBanner = false;
    }
}

const MyHomeDataStore = new DataStore();

export default MyHomeDataStore;