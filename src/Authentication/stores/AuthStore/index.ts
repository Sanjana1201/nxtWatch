import { action, observable } from "mobx";
import { API_STATUS } from "../../../common/enums/LoadingStateEnum";
import { SetCookie } from "../../../common/utils/AuthUtil";
import { UserDataService } from "../../services/AuthStoreService";

export type LoginRequestObject = {
    username: string
    password: string
}


class AuthDataStore{
    @observable currStatus = API_STATUS.INITIAL;
    @observable failureMsg = "";
    @observable isLoggedIn = false;

    @action logInUser = (requestObject: LoginRequestObject) =>{
        this.currStatus = API_STATUS.LOADING;
        UserDataService(requestObject)
        .then((response) => response.json())
        .then((data) => {
            if(data.status_code === undefined){
                SetCookie(data.jwt_token);
                this.isLoggedIn = true;
                this.currStatus = API_STATUS.SUCCESS;
            }
            else{
                this.currStatus = API_STATUS.FAILURE;
                this.failureMsg = data.error_msg;
            }
        })
        .catch((error)=>{
            console.log("error");
            console.log(error);
        })
    }

    @action logOutUser = () =>{
        this.isLoggedIn = false;
    }
}

export default AuthDataStore;