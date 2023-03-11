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

    render() {
        return (
            <LoginComponent onClickLogin={this.onClickLogin} {...this.props}/>
        );
    }
}

export default LoginRoute;