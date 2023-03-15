import { CustomContainer } from "../NoSavedVideo/styledComponents";
import { NoResultWrapper } from "./styledComponents";
import {useTranslation} from 'react-i18next';
import { inject, observer } from "mobx-react";
import MyTheme from "../../stores/ThemeStore";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import { MyThemeStore } from "../../stores";
import { ThemeProvider } from "styled-components";
import { DarkModeColors, LightModeColors } from "../../constants/colors";
import { DarkColorText, LightColorText } from "../SomethingWentWrong/styledComponents";

interface Props{
    AuthStore : AuthDataStore,
    ThemeStore : MyTheme
}

const NoResultPage = inject('AuthStore','ThemeStore')(observer((props:Props) =>{

    const {t} = useTranslation();

    return (
        <ThemeProvider theme={props.ThemeStore.theme==='Light'? LightModeColors: DarkModeColors}>
        <CustomContainer topMargin="0px">
            <NoResultWrapper src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" alt="No Data"/>
            <LightColorText><b>{t("no_search_result")}</b></LightColorText>
            <DarkColorText>{t("try_different_keyword")}</DarkColorText>
        </CustomContainer>
        </ThemeProvider>
    )
}))

export default NoResultPage;