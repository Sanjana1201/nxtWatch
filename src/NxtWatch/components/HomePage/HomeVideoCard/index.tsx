import {formatDistanceToNow} from 'date-fns'
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
    details: PropTypes
}

const HomeVideoCards =(props:Props) =>{
    const {title,thumbnail_url,channel,view_count,published_at} = props.details;
    const {name,profile_image_url} =channel;
    return (
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
    )
}
export default HomeVideoCards;