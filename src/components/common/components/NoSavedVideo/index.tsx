import { CustomContainer, StyledImage } from "./styledComponents";
import {useTranslation} from 'react-i18next';
import { ThemeProvider } from "styled-components";
import AuthDataStore from "../../../Authentication/stores/AuthStore";
import MyTheme from "../../stores/ThemeStore";
import { inject, observer } from "mobx-react";
import { DarkModeColors, LightModeColors } from "../../constants/colors";
import { DarkColorText, LightColorText } from "../SomethingWentWrong/styledComponents";

interface Props{
    AuthStore : AuthDataStore,
    ThemeStore : MyTheme
}

const NoSavedVideo = inject('AuthStore','ThemeStore')(observer((props:Props) =>{

    const {t} = useTranslation();

    return (
        <ThemeProvider theme={props.ThemeStore.theme==='Light'? LightModeColors: DarkModeColors}>
        <CustomContainer topMargin="0px">
            <StyledImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png" alt="No Data"/>
            <LightColorText><b>{t("no_saved_videos_found")}</b></LightColorText>
            <DarkColorText>{t("no_saved_video_msg")}</DarkColorText>
        </CustomContainer>
        </ThemeProvider>
    )
}))

export default NoSavedVideo;