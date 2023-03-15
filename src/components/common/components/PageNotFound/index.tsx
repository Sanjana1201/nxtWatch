import { inject, observer } from "mobx-react";
import { ThemeProvider } from "styled-components";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import { DarkModeColors, LightModeColors } from "../../constants/colors";
import MyTheme from "../../stores/ThemeStore";
import { CustomContainer } from "../NoSavedVideo/styledComponents";
import { DarkColorText, LightColorText } from "../SomethingWentWrong/styledComponents";
import { NotFoundImage } from "./styledComponents";
import {useTranslation} from 'react-i18next';

interface Props{
    AuthStore : AuthDataStore,
    ThemeStore : MyTheme
}

const PageNotFoundPage = inject('AuthStore','ThemeStore')(observer((props:Props) =>{

    const {t} = useTranslation();

    return (
        <ThemeProvider theme={props.ThemeStore.theme==='Light'? LightModeColors: DarkModeColors}>
        <CustomContainer>
            <NotFoundImage src={props.ThemeStore.theme==='Light'? "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png":"https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"} alt="Not Found"/>
            <LightColorText><b>{t("page_not_found")}</b></LightColorText>
            <DarkColorText>{t("page_not_found_content")}</DarkColorText>
        </CustomContainer>
        </ThemeProvider>
    )
}))

export default PageNotFoundPage;


