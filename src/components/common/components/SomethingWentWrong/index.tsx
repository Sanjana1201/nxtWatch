import { inject, observer } from 'mobx-react';
import {useTranslation} from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import AuthDataStore from '../../../Authentication/stores/AuthStore';
import { DarkModeColors, LightModeColors } from '../../constants/colors';
import MyTheme from '../../stores/ThemeStore';
import { CustomContainer, StyledImage } from '../NoSavedVideo/styledComponents';
import { CustomButton, DarkColorText, LightColorText } from './styledComponents';

interface Props{
    onRetry : () => void,
    AuthStore : AuthDataStore,
    ThemeStore : MyTheme,
}

const SomethingWentWrongPage = inject('AuthStore','ThemeStore')(observer((props:Props) =>{

    const {t} = useTranslation();

    return (
        <ThemeProvider theme={props.ThemeStore.theme==='Light'? LightModeColors: DarkModeColors}>
        <CustomContainer topMargin="50px">
            <StyledImage src={props.ThemeStore.theme==='Light'? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png":"https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"} alt="Something went wrong"/>
            <LightColorText><b>{t("something_wrong_msg")}</b></LightColorText>
            <DarkColorText>{t("something_wrong_msg_detail")}</DarkColorText>
            <CustomButton type="button" onClick={props.onRetry}>{t("retry")}</CustomButton>
        </CustomContainer>
        </ThemeProvider>
    )
}))

export default SomethingWentWrongPage;