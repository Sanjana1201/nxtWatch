import {formatDistanceToNow} from 'date-fns'
import { observer } from 'mobx-react'
import {PeriodDivSymbol,ViewsTimeDiv,HomeVideoCard,HomeVideoContent,ThumbnailImage,CardImage, CardsContent, CardComponentName} from './styleComponents'
import {useTranslation} from 'react-i18next';
import HomeModel from '../../../stores/models/VideoModels/HomeVideosModel'

interface Props{
    details: HomeModel,
}

const HomeVideoCards =(observer((props:Props) =>{
    const {title,thumbnailUrl,channel,viewCount,publishedAt} = props.details;
    const {name,profileImageUrl} =channel;

    const {t} = useTranslation();

    return (
        <HomeVideoCard>
        <div>
            <CardImage src = {thumbnailUrl} alt = "Thumbnail" />
        </div>
        <HomeVideoContent>
            <div>
                <ThumbnailImage src={profileImageUrl} alt="Profile-img"/>
            </div>
            <div>
                <CardsContent>{title}</CardsContent>
                <CardComponentName>{name}</CardComponentName>
                <ViewsTimeDiv>
                    {viewCount} {t("views")} <PeriodDivSymbol></PeriodDivSymbol> {formatDistanceToNow(new Date(publishedAt))}
                </ViewsTimeDiv>
            </div>
        </HomeVideoContent>
        </HomeVideoCard>
    )
}))
export default HomeVideoCards;