import { observer, Provider } from "mobx-react";
import { BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AuthRoutes from "../../Authentication/routes";
// import LoginRoute from "../../Authentication/routes/LoginRoute";
import { MyAuthStore } from "../../Authentication/stores";
import NotFound from "../../NxtWatch/components/NotFound";
import NxtWatchRoutes from "../../NxtWatch/routes";
import ProtectedRoute from "../../NxtWatch/routes/ProtectedRoute";
import { DarkModeColors, LightModeColors } from "../constants/colors";
import { MyThemeStore } from "../stores";


const AppComponent = observer(() =>{

    const Stores = {...MyAuthStore,...MyThemeStore}
    // console.log(MyThemeStore.ThemeStore.theme);
    return (
        <Provider {...Stores}>
            <ThemeProvider theme={MyThemeStore.ThemeStore.theme==="Light"? LightModeColors:DarkModeColors}>
            <BrowserRouter>
                <Switch>
                    {AuthRoutes}
                    {NxtWatchRoutes}
                    <ProtectedRoute path='*' component = {NotFound}/>
                </Switch>
            </BrowserRouter>
            </ThemeProvider>
        </Provider>
    )
})

export default AppComponent;