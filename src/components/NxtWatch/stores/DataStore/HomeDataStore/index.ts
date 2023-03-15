import { action, computed, observable } from "mobx";
import { API_STATUS } from "../../../../common/enums/LoadingStateEnum";
import { HomeDataFetchApi } from "../../../services/HomeDataService";
import HomeModel from "../../models/VideoModels/HomeVideosModel";
import { HomeVideoModel } from "../../types";


class DataStore{

    @observable currStatus: API_STATUS;
    @observable currError:string;
    @observable homeVideosData: Array<HomeVideoModel>;
    @observable inputValue: string;

    constructor(){
        this.currStatus = API_STATUS.INITIAL;
        this.currError = "";
        this.homeVideosData = [];
        this.inputValue = "";
    }

    @action setInputValue =(currValue:string) =>{
        this.inputValue = currValue;
    }

    @action GetHomeData = () =>{
        this.currStatus = API_STATUS.LOADING;
        HomeDataFetchApi(this.inputValue)
        .then((response) => response.json())
        .then((data) =>{
            this.homeVideosData = data.videos.map((eachData:HomeVideoModel)=>{
                return new HomeModel(eachData);
            });
            this.currStatus=API_STATUS.SUCCESS;
        })
        .catch((error)=>{
            this.currStatus=API_STATUS.FAILURE;
        })
    } 

    @computed get filterData(){
        return this.homeVideosData.filter((eachData)=>{
            if(eachData.title.toLowerCase().includes(this.inputValue.toLowerCase())){
                return true;
            }
            else{
                return false;
            }
        })
    }
}

const MyHomeDataStore = new DataStore();

export default MyHomeDataStore;