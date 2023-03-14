import { inject, observer } from 'mobx-react';
import AuthDataStore from '../../../../Authentication/stores/AuthStore';
import MyTheme from '../../../../common/stores/ThemeStore';
import {GamingImage, GamingWrapper} from './styledComponents'

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
    return (
        <>
        <GamingWrapper>
            <div>
                <GamingImage src={thumbnail_url} alt="Detailed_Image"/>
            </div>
            <div>
                <p>{title}</p>
                <p>{view_count} Watching Worldwide</p>
            </div>
        </GamingWrapper>
        </>
    )
}))

export default GamesCardComponent