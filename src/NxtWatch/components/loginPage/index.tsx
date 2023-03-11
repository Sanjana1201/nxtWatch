import { inject, observer } from "mobx-react";
import { Redirect } from "react-router-dom";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import Loader from "../../../common/components/LoadingIcon";
import { ScreenType } from "../../../common/enums/LoadingStateEnum";
import MyTheme from "../../../common/stores/ThemeStore";
import LightModeIcon from "../../icons/nxtWaveIcon/lightModeIcon";
import MyDataStore from "../../stores/DataStore/LoginDataStore";
import {LoginWrapper,LoginDiv,CustomInputBox,LoginFieldsContainer,LoginButton} from "./styledComponents"


interface LoginProps {
    AuthStore: AuthDataStore
    ThemeStore: MyTheme
}

const LoginAppComponent = inject('AuthStore','ThemeStore')(observer(({AuthStore,ThemeStore}: LoginProps) =>{

    // const history = useHistory();

    // console.log(ThemeStore.theme);

    const handleLogin = () =>{
        const myName = (document.getElementById('loginId') as HTMLInputElement).value;
        const MyPassword = (document.getElementById('loginPassword') as HTMLInputElement).value;

        const requestObject = {
            username: myName,
            password: MyPassword
        }

        MyDataStore.LoginUser(requestObject, onSuccessLogin);
    }

    const onSuccessLogin = () => {
        const { logInUser } = AuthStore
        // logInUser();
    }

    return(
        <>
        {MyDataStore.currStatus==="Success"?
        <>
        <Redirect to = "/" />
        </>
            :
        <LoginWrapper>
            {(MyDataStore.currStatus===ScreenType.Loading) && <Loader />}
            {(MyDataStore.currStatus===ScreenType.NormalView || MyDataStore.currStatus===ScreenType.Failure) && 
            <LoginDiv>
                <LightModeIcon />
                <LoginFieldsContainer>
                    <div>
                        <label htmlFor="Username">USERNAME</label>
                        <CustomInputBox type="text" placeholder="Username" id ="loginId"/>
                    </div>
                    <div>
                        <label htmlFor="password">PASSWORD</label>
                        <CustomInputBox type="password" placeholder="Password" id= "loginPassword"/>
                    </div>
                </LoginFieldsContainer>
                <p><input type="checkbox" id="MyCheckbox" onChange = {() =>{
                const curr = (document.getElementById("MyCheckbox") as HTMLInputElement).checked;
                if(curr){
                    (document.getElementById("loginPassword")as HTMLInputElement).type = "text";
                }
                else{
                    (document.getElementById("loginPassword")as HTMLInputElement).type = "password";
                }
            }} />Show Password</p>
            {MyDataStore.currStatus===ScreenType.Failure && <p>{MyDataStore.failureMsg}</p>}
            <LoginButton type="button" onClick={handleLogin}>Login</LoginButton>
            </LoginDiv>}
        </LoginWrapper>}
        </>
    )
}))

export default LoginAppComponent;