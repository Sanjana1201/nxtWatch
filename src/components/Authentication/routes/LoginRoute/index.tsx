import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkModeColors, LightModeColors } from '../../../common/constants/colors';
import MyTheme from '../../../common/stores/ThemeStore';
import LoginComponent from '../../components/LoginComponent';
import AuthDataStore, { LoginRequestObject } from '../../stores/AuthStore';

interface Props{
    AuthStore: AuthDataStore;
    ThemeStore: MyTheme;
}

@inject('AuthStore','ThemeStore')
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
        console.log(this.props.ThemeStore.theme);
        return (
            <>
                <ThemeProvider theme={this.props.ThemeStore.theme==='Light'? LightModeColors:DarkModeColors}>
                <LoginComponent onClickLogin={this.onClickLogin} {...this.props} onClickError={this.handleError}/>
                </ThemeProvider>
            </>
        );
    }
}

export default LoginRoute;