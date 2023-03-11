import { action, observable } from "mobx";
import { ScreenType } from "../../../../common/enums/LoadingStateEnum";
import { SetCookie } from "../../../../common/utils/AuthUtil";
import { UserDataService } from "../../../services/LoginUserService";

class DataStore {

    @observable currStatus = ScreenType.NormalView;
    @observable failureMsg = "";

    @action LoginUser = (requestObject: LoginRequestObject, onSuccess:  () => void) =>{

        this.currStatus = ScreenType.Loading;
        UserDataService(requestObject)
        .then((response) => response.json())
        .then((data) => {
            if(data.status_code === undefined){
                SetCookie(data.jwt_token);
                this.currStatus = ScreenType.Success;
            }
            else{
                this.currStatus = ScreenType.Failure;
                this.failureMsg = data.error_msg;
            }
            onSuccess()
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}

const MyDataStore = new DataStore();

export default MyDataStore;

export type LoginRequestObject = {
    username: string
    password: string
}