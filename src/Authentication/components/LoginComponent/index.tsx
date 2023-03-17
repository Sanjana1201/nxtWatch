import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import React, { Component, ReactNode } from 'react';
import { withTranslation } from 'react-i18next';
import LanguageSelector from '../../../common/components/LanguageSelector';
import TextInput from '../../../common/components/TextInput';
import MyTheme from '../../../common/stores/ThemeStore';
import DarkModeIcon from '../../../NxtWatch/icons/nxtWaveIcon/darkModeIcon';
import LightModeIcon from '../../../NxtWatch/icons/nxtWaveIcon/lightModeIcon';
import AuthDataStore, { LoginRequestObject } from '../../stores/AuthStore';
import { CustomCheckbox, Errorp, ErrorWrapper, IconDiv, LoginButton, LoginCheckboxText, LoginDiv, LoginFieldsContainer, LoginWrapper } from './styledComponents';


interface Props{
    handleLoginClick: (requestObject:LoginRequestObject) => void;
    AuthStore: AuthDataStore;
    ThemeStore: MyTheme;
    errorMsg: string;
    t:any
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
        this.username = value;
    };

    onChangePassword = (value: string) => {
        this.password =value;
    }

    onClickLogin = () => {
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
        const { t } = this.props;
        return(
            <>
            <LoginWrapper>
            <LanguageSelector />
                <LoginDiv>
                    <IconDiv>
                        {this.props.ThemeStore.theme==='Light'? <LightModeIcon />:<DarkModeIcon />}
                    </IconDiv>
                    <LoginFieldsContainer>
                        <div>
                            <TextInput placeholder='Enter your name' label={t("username")} onChange={this.onChangeUserName} type = "text"/>
                        </div>
                        <div>
                            <TextInput placeholder='Enter your password' label={t("password")} onChange={this.onChangePassword} type={this.showPassword? "text":"password"}/>
                        </div>
                        <LoginCheckboxText><CustomCheckbox type="checkbox" id="MyCheckbox" onChange = {this.handlePassword} />{t("showPassword")}</LoginCheckboxText>
                    </LoginFieldsContainer>
                <LoginButton type="button" onClick={this.onClickLogin}><b>{t("Login")}</b></LoginButton>
                <ErrorWrapper>
                {this.props.errorMsg===""? <></>:<Errorp>*{this.props.errorMsg}</Errorp>}
                </ErrorWrapper>
                </LoginDiv>
            </LoginWrapper>
            </>
        )
    }

    
}

export default withTranslation()(LoginAppComponent);