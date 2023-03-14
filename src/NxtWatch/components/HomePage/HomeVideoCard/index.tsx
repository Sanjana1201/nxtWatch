import {formatDistanceToNow} from 'date-fns'
import { inject, observer } from 'mobx-react'
import { ThemeProvider } from 'styled-components'
import AuthDataStore from '../../../../Authentication/stores/AuthStore'
import { DarkModeColors, LightModeColors } from '../../../../common/constants/colors'
import MyTheme from '../../../../common/stores/ThemeStore'
import {PeriodDivSymbol,ViewsTimeDiv,HomeVideoCard,HomeVideoContent,ThumbnailImage,CardImage} from './styleComponents'

interface PropTypes{
    id: string,
    title: string,
    thumbnail_url: string,
    channel: {
      name: string,
      profile_image_url:string
    },
    view_count: string,
    published_at: string
}

interface Props{
    details: PropTypes,
    AuthStore: AuthDataStore,
    ThemeStore: MyTheme
}

const HomeVideoCards =inject('AuthStore','ThemeStore')(observer((props:Props) =>{
    const {title,thumbnail_url,channel,view_count,published_at} = props.details;
    const {name,profile_image_url} =channel;
    return (
        <ThemeProvider theme={props.ThemeStore.theme==='Light'? LightModeColors: DarkModeColors}>
        <HomeVideoCard>
        <div>
            <CardImage src = {thumbnail_url} alt = "Thumbnail" />
        </div>
        <HomeVideoContent>
            <div>
                <ThumbnailImage src={profile_image_url} alt="Profile-img"/>
            </div>
            <div>
                <p>{title}</p>
                <p>{name}</p>
                <ViewsTimeDiv>
                    {view_count} Views <PeriodDivSymbol></PeriodDivSymbol> {formatDistanceToNow(new Date(published_at))}
                </ViewsTimeDiv>
            </div>
        </HomeVideoContent>
        </HomeVideoCard>
        </ThemeProvider>
    )
}))
export default HomeVideoCards;