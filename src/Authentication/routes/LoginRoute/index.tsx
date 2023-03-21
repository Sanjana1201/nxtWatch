import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import LoadingWrapper from '../../../common/components/LoadingWrapper';
import { LoginComponentContainer } from '../../components/LoginComponent/styledComponents';
import AuthDataStore, { LoginRequestObject } from '../../stores/AuthStore';
import LoginAppComponent from '../../components/LoginComponent';
import { API_STATUS } from '../../../common/enums/LoadingStateEnum';

interface RouteParameter{
    history: any;
}

interface Props extends RouteComponentProps<RouteParameter>{
}

interface InjectedProps extends Props{
    AuthStore : AuthDataStore
}

@inject('AuthStore')
@observer
class LoginRoute extends Component<Props> {

    getInjectedProps = () => this.props as InjectedProps;

    getAuthStore = () => this.getInjectedProps().AuthStore;

    onClickLogin = (requestObject: LoginRequestObject) => {
        const { logInUser,currStatus } = this.getAuthStore();
        logInUser(requestObject);
        console.log(currStatus);
        // this.renderSuccessUI();
    }

    handleError = () =>{
        const {failureMsg} = this.getAuthStore();
        return failureMsg;
    }

    renderInitial =() =>{
        return <LoginAppComponent handleLoginClick={this.onClickLogin} errorMsg = {this.handleError()}/>
    }

    renderRetry = () =>{
        return this.renderInitial();
    }

    renderSuccessUI = () =>{
        let redirectUrl = localStorage.getItem('redirectUrl');
        const {history}  = this.props;
        if(redirectUrl!=null){
            JSON.parse(redirectUrl);
            redirectUrl = redirectUrl.slice(1,redirectUrl.length-1);
            localStorage.removeItem('redirectUrl');
            history.replace(redirectUrl);
        }
        else{
            return <Redirect exact to = "/" />
        }
    } 

    renderUI = () =>{
        const currStatus = this.getAuthStore().currStatus;
        return currStatus === API_STATUS.SUCCESS? <>{this.renderSuccessUI()}</>:<LoginAppComponent handleLoginClick={this.onClickLogin} errorMsg = {this.handleError()}/>;
    }

    render() {
        return (
            <>
            <LoginComponentContainer>
                {this.renderUI()}
            </LoginComponentContainer>
            </>
        );
    }
}

export default LoginRoute;