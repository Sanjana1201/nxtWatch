import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import LoginComponent from '../../components/LoginComponent';
import AuthDataStore, { LoginRequestObject } from '../../stores/AuthStore';

interface Props{
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

    render() {
        return (
            <LoginComponent onClickLogin={this.onClickLogin} {...this.props} onClickError={this.handleError}/>
        );
    }
}

export default LoginRoute;