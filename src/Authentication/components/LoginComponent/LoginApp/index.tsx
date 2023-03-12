import { observable } from "mobx";
import { inject, observer } from "mobx-react";
import { Component, ReactNode } from "react";
import TextInput from "../../../../common/components/TextInput";
import LightModeIcon from "../../../../NxtWatch/icons/nxtWaveIcon/lightModeIcon";
import AuthDataStore, { LoginRequestObject } from "../../../stores/AuthStore";
import { CustomInputBox, LoginButton, LoginDiv, LoginFieldsContainer, LoginWrapper } from "./styledComponents";

interface Props{
    handleLoginClick: (requestObject:LoginRequestObject) => void;
    AuthStore: AuthDataStore;
    errorMsg: string;
}

@inject('AuthStore')
@observer
class LoginAppComponent extends Component<Props>{

    @observable username: string;
    @observable password: string;
    @observable showPassword: boolean;

    constructor(props:any) {
        super(props);
        this.username = ""
        this.password = "";
        this.showPassword = false;
    }

    onChangeUserName = (value: string) => {
        // console.log(value);
        this.username = value;
    };

    onChangePassword = (value: string) => {
        this.password =value
    }

    onClickLogin = () => {
        // console.log(this.props);
        const {  handleLoginClick } = this.props;
        const requestObject = {
            username: this.username,
            password: this.password
        }
        handleLoginClick(requestObject)
    }

    handlePassword = () =>{
        this.showPassword=!this.showPassword
    }


    render(): ReactNode {
        return(
            <>
            <LoginWrapper>
                <LoginDiv>
                    <LightModeIcon />
                    <LoginFieldsContainer>
                        <div>
                            <TextInput placeholder='Enter your name' label="USER NAME" onChange={this.onChangeUserName} type = "text"/>
                        </div>
                        <div>
                            <TextInput placeholder='Enter your password' label="PASSWORD" onChange={this.onChangePassword} type={this.showPassword? "text":"password"}/>
                        </div>
                    </LoginFieldsContainer>
                    <p><input type="checkbox" id="MyCheckbox" onChange = {this.handlePassword} />Show Password</p>
                    {this.props.errorMsg===""? <></>:<>{this.props.errorMsg}</>}
                <LoginButton type="button" onClick={this.onClickLogin}>Login</LoginButton>
                </LoginDiv>
            </LoginWrapper>
            </>
        )
    }

    
}

export default LoginAppComponent;