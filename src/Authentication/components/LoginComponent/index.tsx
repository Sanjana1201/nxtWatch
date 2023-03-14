import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '../../../common/components/Button';
import LoadingWrapper from '../../../common/components/LoadingWrapper';
import TextInput from '../../../common/components/TextInput';
import MyTheme from '../../../common/stores/ThemeStore';
import AuthDataStore, { LoginRequestObject } from '../../stores/AuthStore';
import LoginAppComponent from './LoginApp';
import { LoginComponentContainer } from './styledComponents';

interface Props {
    onClickLogin: (requestObject: LoginRequestObject) => void;
    AuthStore: AuthDataStore;
    ThemeStore: MyTheme;
    onClickError: () => string;
}

@inject('AuthStore','ThemeStore')
@observer
class LoginComponent extends Component<Props> {

    onClickLogin = (requestObject: LoginRequestObject) => {
        // console.log(this.props);
        const {  onClickLogin } = this.props;
        onClickLogin(requestObject)
    }

    renderSuccessUI = () =>{
        return <Redirect exact to = "/" />
    } 

    renderInitial =() =>{
        return <LoginAppComponent handleLoginClick={this.onClickLogin} errorMsg = {this.props.onClickError()} {...this.props}/>
    }

    renderRetry = () =>{
        return <LoginAppComponent handleLoginClick={this.onClickLogin} errorMsg = {this.props.onClickError()} {...this.props} />
    }

    render() {
        return (
            <LoginComponentContainer>
                <LoadingWrapper
                    apiStatus={this.props.AuthStore.currStatus}
                    apiError={this.props.AuthStore.failureMsg}
                    onInitial = {this.renderInitial}
                    onSuccess={this.renderSuccessUI}
                    onRetry={this.renderRetry}
                    />

                {/* <TextInput placeholder='Enter your name' value={this.username} label="USER NAME" onChange={this.onChangeUserName}/>
                <TextInput placeholder='Enter your password' value={this.password} label="PASSWORD" onChange={this.onChangePassword}/>
                <Button onClickButton={this.onClickLogin} buttonText={'Login'}/> */}
            </LoginComponentContainer>
        );
    }
}

export default LoginComponent;