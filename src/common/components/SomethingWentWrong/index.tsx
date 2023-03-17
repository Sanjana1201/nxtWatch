import { inject, observer } from 'mobx-react';
import {useTranslation} from 'react-i18next';
import AuthDataStore from '../../../Authentication/stores/AuthStore';
import MyTheme from '../../stores/ThemeStore';
import { CustomContainer, StyledImage } from '../NoSavedVideo/styledComponents';
import { CustomButton, DarkColorText, LightColorText } from './styledComponents';

interface Props{
    onRetry : () => void,
}

interface InjectedProps extends Props {
    AuthStore : AuthDataStore,
    ThemeStore : MyTheme,
}


const SomethingWentWrongPage = inject('AuthStore','ThemeStore')(observer((props:Props) =>{

    const {t} = useTranslation();

    const getInjectedProps = () => props as InjectedProps

    const getThemeStore = () => getInjectedProps().ThemeStore

    const getNotFoundImage = () =>{
        return getThemeStore().theme==='Light'? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png":"https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png";
    } 

    return (
        <CustomContainer topMargin="50px">
            <StyledImage src={getNotFoundImage()} alt="Something went wrong"/>
            <LightColorText><b>{t("something_wrong_msg")}</b></LightColorText>
            <DarkColorText>{t("something_wrong_msg_detail")}</DarkColorText>
            <CustomButton type="button" onClick={props.onRetry}>{t("retry")}</CustomButton>
        </CustomContainer>
    )
}))

export default SomethingWentWrongPage;