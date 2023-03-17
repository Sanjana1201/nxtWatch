import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import LoadingWrapper from '../../../common/components/LoadingWrapper';
import { LoginComponentContainer } from '../../components/LoginComponent/styledComponents';
import AuthDataStore, { LoginRequestObject } from '../../stores/AuthStore';
import LoginAppComponent from '../../components/LoginComponent';

interface RouteParameter{
    history: any;
}

interface Props extends RouteComponentProps<RouteParameter>{
    AuthStore: AuthDataStore;
}

@inject('AuthStore')
@observer
class LoginRoute extends Component<Props> {

    onClickLogin = (requestObject: LoginRequestObject) => {
        const { AuthStore } = this.props;
        const { logInUser } = AuthStore;
        logInUser(requestObject);
    }

    handleError = () =>{
        const {AuthStore} = this.props;
        const {failureMsg} = AuthStore;
        return failureMsg;
    }

    renderInitial =() =>{
        return <LoginAppComponent handleLoginClick={this.onClickLogin} errorMsg = {this.handleError()} {...this.props}/>
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
            return history.replace(redirectUrl);
        }
        else{
            return <Redirect exact to = "/" />
        }
    } 

    render() {
        return (
            <>
            <LoginComponentContainer>
                <LoadingWrapper
                    apiStatus={this.props.AuthStore.currStatus}
                    apiError={this.props.AuthStore.failureMsg}
                    onInitial = {this.renderInitial}
                    onSuccess={this.renderSuccessUI}
                    onRetry={this.renderRetry}
                    />
            </LoginComponentContainer>
            </>
        );
    }
}

export default LoginRoute;