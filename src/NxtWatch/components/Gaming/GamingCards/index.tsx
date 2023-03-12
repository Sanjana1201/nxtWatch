import {GamingImage} from './styledComponents'

interface GameData{
    id: string,
    title: string,
    thumbnail_url: string,
    view_count: string
}

interface Props{
    gamingDetails : GameData
}

const GamesCardComponent = (props:Props) =>{
    const { title,thumbnail_url,view_count} = props.gamingDetails;
    return (
        <>
        <div>
            <div>
                <GamingImage src={thumbnail_url} alt="Detailed_Image"/>
            </div>
            <div>
                <p>{title}</p>
                <p>{view_count} Watching Worldwide</p>
            </div>
        </div>
        </>
    )
}

export default GamesCardComponent