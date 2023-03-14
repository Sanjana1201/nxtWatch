import { observable } from "mobx";
import { inject, observer } from "mobx-react";
import { Component, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import TextInput from "../../../../common/components/TextInput";
import { DarkModeColors, LightModeColors } from "../../../../common/constants/colors";
import MyTheme from "../../../../common/stores/ThemeStore";
import DarkModeIcon from "../../../../NxtWatch/icons/nxtWaveIcon/darkModeIcon";
import LightModeIcon from "../../../../NxtWatch/icons/nxtWaveIcon/lightModeIcon";
import AuthDataStore, { LoginRequestObject } from "../../../stores/AuthStore";
import { CustomInputBox, LoginButton, LoginCheckboxText, LoginDiv, LoginFieldsContainer, LoginWrapper } from "./styledComponents";

interface Props{
    handleLoginClick: (requestObject:LoginRequestObject) => void;
    AuthStore: AuthDataStore;
    ThemeStore: MyTheme;
    errorMsg: string;
}

@inject('AuthStore','ThemeStore')
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
            <ThemeProvider theme={this.props.ThemeStore.theme==='Light'? LightModeColors:DarkModeColors}>
            <LoginWrapper>
                <LoginDiv>
                    {this.props.ThemeStore.theme==='Light'? <LightModeIcon />:<DarkModeIcon />}
                    
                    <LoginFieldsContainer>
                        <div>
                            <TextInput placeholder='Enter your name' label="USER NAME" onChange={this.onChangeUserName} type = "text"/>
                        </div>
                        <div>
                            <TextInput placeholder='Enter your password' label="PASSWORD" onChange={this.onChangePassword} type={this.showPassword? "text":"password"}/>
                        </div>
                    </LoginFieldsContainer>
                    <LoginCheckboxText><input type="checkbox" id="MyCheckbox" onChange = {this.handlePassword} />Show Password</LoginCheckboxText>
                    {this.props.errorMsg===""? <></>:<>{this.props.errorMsg}</>}
                <LoginButton type="button" onClick={this.onClickLogin}>Login</LoginButton>
                </LoginDiv>
            </LoginWrapper>
            </ThemeProvider>
            </>
        )
    }

    
}

export default LoginAppComponent;