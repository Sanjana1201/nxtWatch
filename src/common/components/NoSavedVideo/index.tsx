import { CustomContainer, StyledImage } from "./styledComponents";

const NoSavedVideo = () =>{
    return (
        <CustomContainer>
            <StyledImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png" alt="No Data"/>
            <p><b>No saved videos found</b></p>
            <p>You can save your videos while watching them</p>
        </CustomContainer>
    )
}

export default NoSavedVideo;