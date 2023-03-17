import { inject, observer } from "mobx-react";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import MyTheme from "../../stores/ThemeStore";
import { CustomContainer } from "../NoSavedVideo/styledComponents";
import { DarkColorText, LightColorText } from "../SomethingWentWrong/styledComponents";
import { NotFoundImage } from "./styledComponents";
import {useTranslation} from 'react-i18next';

interface InjectedProps extends Props{
    AuthStore : AuthDataStore,
    ThemeStore : MyTheme
}

interface Props{
}

const PageNotFoundPage = inject('AuthStore','ThemeStore')(observer((props:Props) =>{

    const {t} = useTranslation();

    const getInjectedProps = () => props as InjectedProps;

    const getThemeStore = () => getInjectedProps().ThemeStore

    const getNotFoundImage = () =>{
        return getThemeStore().theme==='Light'? "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png":"https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png";
    }

    return (
        <CustomContainer topMargin="0px">
            <NotFoundImage src={getNotFoundImage()} alt="Not Found"/>
            <LightColorText><b>{t("page_not_found")}</b></LightColorText>
            <DarkColorText>{t("page_not_found_content")}</DarkColorText>
        </CustomContainer>
    )
}))

export default PageNotFoundPage;


