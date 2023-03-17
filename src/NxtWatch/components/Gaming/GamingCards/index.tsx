import { observer } from 'mobx-react';
import {GamingContentWrapper, GamingImage, GamingText, GamingTextLite, GamingWrapper} from './styledComponents';
import {useTranslation} from 'react-i18next';
import GamingModel from '../../../stores/models/VideoModels/GamingVideosModel';

interface Props{
    gamingDetails : GamingModel,
}

const GamesCardComponent = (observer((props:Props) =>{
    const { title,thumbnailUrl,viewCount} = props.gamingDetails;
    const {t} = useTranslation();
    return (
        <>
        <GamingWrapper>
            <div>
                <GamingImage src={thumbnailUrl} alt="Detailed_Image"/>
            </div>
            <GamingContentWrapper>
                <GamingText>{title}</GamingText>
                <GamingTextLite>{viewCount} {t("watching_worldwide")}</GamingTextLite>
            </GamingContentWrapper>
        </GamingWrapper>
        </>
    )
}))

export default GamesCardComponent