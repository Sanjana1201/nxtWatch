import { action, observable } from "mobx";
import { API_STATUS } from "../../../../common/enums/LoadingStateEnum";
import { HomeDataFetchApi } from "../../../services/HomeDataService";
import { HomeVideoModel } from "../../models/VideoModels/HomeVideosModel";


class DataStore{

    @observable currStatus: string;
    @observable currError:string;
    @observable currData: Array<HomeVideoModel>;
    @observable showBanner:boolean;

    constructor(props:any){
        this.currStatus = API_STATUS.INITIAL;
        this.currError = "";
        this.currData = [];
        // this.currData = HomeVideoModel[];
        this.showBanner = true;
    }

    @action GetHomeData = (inputValue:string) =>{
        this.currStatus = API_STATUS.LOADING;
        HomeDataFetchApi(inputValue)
        .then((response) => response.json())
        .then((data) =>{
            this.currStatus=API_STATUS.SUCCESS;
            this.currData = data.videos;
        })
        .catch((error)=>{
            this.currStatus=API_STATUS.FAILURE;
        })
    } 

    @action hideBanner = () =>{
        return this.showBanner = false;
    }
}

const MyHomeDataStore = new DataStore();

export default MyHomeDataStore;