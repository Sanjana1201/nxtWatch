import { observer } from 'mobx-react';
import {HeadingIconHolder,HeadingContainer,HeadingText} from './styledComponents'
interface Props{
    title: string,
}

const NxtWatchHeading = (observer((props:Props) =>{
    return (
        <HeadingContainer>
            <HeadingIconHolder>
                {props.title === "Trending" && <i className="fa-solid fa-fire"></i>}
                {props.title==="Gaming" && <i className="fa-sharp fa-solid fa-gamepad"></i>}
                {props.title==="Saved Videos" && <i className="fa-solid fa-plus"></i>}
                
            </HeadingIconHolder>
            <div>
                <HeadingText>{props.title}</HeadingText>
            </div>
        </HeadingContainer>

    )
}))

export default NxtWatchHeading;