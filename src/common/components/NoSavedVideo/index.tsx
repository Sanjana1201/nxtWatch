import { CustomContainer, StyledImage } from "./styledComponents";
import {useTranslation} from 'react-i18next';
import { observer } from "mobx-react";
import { DarkColorText, LightColorText } from "../SomethingWentWrong/styledComponents";


const NoSavedVideo = (observer((props) =>{

    const {t} = useTranslation();

    return (
        <CustomContainer topMargin="0px">
            <StyledImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png" alt="No Data"/>
            <LightColorText><b>{t("no_saved_videos_found")}</b></LightColorText>
            <DarkColorText>{t("no_saved_video_msg")}</DarkColorText>
        </CustomContainer>
    )
}))

export default NoSavedVideo;