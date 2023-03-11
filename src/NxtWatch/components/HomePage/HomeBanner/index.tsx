
import LightModeIcon from '../../../icons/nxtWaveIcon/lightModeIcon';
import MyHomeDataStore from '../../../stores/DataStore/HomeDataStore';
import { CustomWhiteBgButton } from '../../Navbar/styledComponents';
import { VideoButtons } from '../../VideoPage/styledComponents';
import {BannerWrapper} from './styledComponents'

const HomePageBanner = () =>{

    const handleBanner = () =>{
        MyHomeDataStore.hideBanner();
    }

    return (
        <BannerWrapper>
            <div>
                <LightModeIcon />
                <p>Buy NxtWatch Premium prepaid plans with UPI</p>
                <CustomWhiteBgButton type="button" MyColor="#000000">GET IT NOW</CustomWhiteBgButton>
            </div>
            <div>
            <VideoButtons onClick={handleBanner}>
                <i className="fa-sharp fa-solid fa-xmark"></i>
            </VideoButtons>
            </div>
        </BannerWrapper>
       
    )
}

export default HomePageBanner;