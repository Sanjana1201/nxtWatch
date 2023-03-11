import { observer, Provider } from "mobx-react";
import { BrowserRouter, Switch } from "react-router-dom";
import AuthRoute from "../../Authentication/routes";
// import LoginRoute from "../../Authentication/routes/LoginRoute";
import { MyAuthStore } from "../../Authentication/stores";
import NxtWatch from "../../NxtWatch/routes";
import { MyThemeStore } from "../stores";


const AppComponent = observer(() =>{
    return (
        <Provider {...MyAuthStore} {...MyThemeStore}>
            <BrowserRouter>
                <Switch>
                    {AuthRoute}
                    {NxtWatch}
                    {/* AuthenticationRoutes */}
                    {/* Common Routes */}
                </Switch>
            </BrowserRouter>
        </Provider>
    )
})

export default AppComponent;