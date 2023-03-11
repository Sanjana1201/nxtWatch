import { observable } from "mobx";
import { Component, ReactNode } from "react";
import TextInput from "../../../../common/components/TextInput";
import LightModeIcon from "../../../../NxtWatch/icons/nxtWaveIcon/lightModeIcon";
import { LoginRequestObject } from "../../../stores/AuthStore";
import { CustomInputBox, LoginButton, LoginDiv, LoginFieldsContainer, LoginWrapper } from "./styledComponents";

interface Props{
    handleLoginClick: (requestObject:LoginRequestObject) => void;
}


class LoginAppComponent extends Component<Props>{

    @observable username: string;
    @observable password: string;

    constructor(props:any) {
        super(props);
        this.username = ""
        this.password = "";
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


    render(): ReactNode {
        return(
            <>
            <LoginWrapper>
                <LoginDiv>
                    <LightModeIcon />
                    <LoginFieldsContainer>
                        <div>
                            <TextInput placeholder='Enter your name' label="USER NAME" onChange={this.onChangeUserName}/>
                        </div>
                        <div>
                            <TextInput placeholder='Enter your password' label="PASSWORD" onChange={this.onChangePassword}/>
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
                <LoginButton type="button" onClick={this.onClickLogin}>Login</LoginButton>
                </LoginDiv>
            </LoginWrapper>
            </>
        )
    }

    
}

export default LoginAppComponent;