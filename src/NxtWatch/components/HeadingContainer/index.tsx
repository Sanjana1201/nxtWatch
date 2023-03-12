import {HeadingIconHolder,HeadingContainer,HeadingText} from './styledComponents'
interface Props{
    title: string;
}

const NxtWatchHeading = (props:Props) =>{
    return (
        <HeadingContainer>
            <HeadingIconHolder>
                <i className="fa-solid fa-fire"></i>
            </HeadingIconHolder>
            <div>
                <HeadingText>{props.title}</HeadingText>
            </div>
        </HeadingContainer>

    )
}

export default NxtWatchHeading;