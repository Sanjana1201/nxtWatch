import { inject, observer } from "mobx-react";
import { ThemeProvider } from "styled-components";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import PageNotFoundPage from "../../../common/components/PageNotFound";
import { DarkModeColors, LightModeColors } from "../../../common/constants/colors";
import MyTheme from "../../../common/stores/ThemeStore";
import { ContentWrapper, PageContentContainer } from "../HomePage/styledComponents";
import NavbarComponent from "../Navbar";
import SideBarComponent from "../SideBar";

interface Props{
    AuthStore: AuthDataStore,
    ThemeStore: MyTheme,
}

const NotFound = inject('AuthStore','ThemeStore')(observer((props:Props) =>{
    return (
        <>
            <ThemeProvider theme={props.ThemeStore.theme==='Light'? LightModeColors: DarkModeColors}>
                <NavbarComponent />
                <ContentWrapper>
                    <SideBarComponent />
                    <PageContentContainer>
                        <PageNotFoundPage {...props}/>
                    </PageContentContainer>
                </ContentWrapper>
                </ThemeProvider>

        </>
    )
}))

export default NotFound;