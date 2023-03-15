import { inject, observer } from 'mobx-react';
import AuthDataStore from '../../../../Authentication/stores/AuthStore';
import MyTheme from '../../../../common/stores/ThemeStore';
import {GamingImage, GamingText, GamingTextLite, GamingWrapper} from './styledComponents';
import {useTranslation} from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { DarkModeColors, LightModeColors } from '../../../../common/constants/colors';

interface GameData{
    id: string,
    title: string,
    thumbnail_url: string,
    view_count: string
}

interface Props{
    gamingDetails : GameData,
    AuthStore: AuthDataStore;
    ThemeStore: MyTheme,
}

const GamesCardComponent = inject('AuthStore','ThemeStore')(observer((props:Props) =>{
    const { title,thumbnail_url,view_count} = props.gamingDetails;
    const {t} = useTranslation();
    return (
        <>
        <ThemeProvider theme={props.ThemeStore.theme==='Light'? LightModeColors: DarkModeColors}>
        <GamingWrapper>
            <div>
                <GamingImage src={thumbnail_url} alt="Detailed_Image"/>
            </div>
            <div>
                <GamingText>{title}</GamingText>
                <GamingTextLite>{view_count} {t("watching_worldwide")}</GamingTextLite>
            </div>
        </GamingWrapper>
        </ThemeProvider>
        </>
    )
}))

export default GamesCardComponent