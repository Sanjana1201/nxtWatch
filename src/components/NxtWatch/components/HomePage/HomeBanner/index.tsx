import LightModeIcon from '../../../icons/nxtWaveIcon/lightModeIcon';
import { CustomWhiteBgButton } from '../../Navbar/styledComponents';
import {BannerWrapper, CrossButton, GetItNowButton} from './styledComponents';
import {useTranslation} from 'react-i18next';

interface Props{
    bannerStatus: boolean,
    bannerFunc: () =>void
}

const HomePageBanner = (props:Props) =>{

    const {t} = useTranslation();

    const handleBanner = () =>{
        const {bannerFunc}  = props;
        bannerFunc();
    }

    return (
        <BannerWrapper>
            <div>
                <LightModeIcon />
                <p>{t("Buy Nxt Watch Premium prepaid plan with UPI")}</p>
                <GetItNowButton type="button">{t("get_it_now")}</GetItNowButton>
            </div>
            <div>
            <CrossButton onClick={handleBanner}>
                <i className="fa-sharp fa-solid fa-xmark"></i>
            </CrossButton>
            </div>
        </BannerWrapper>
       
    )
}

export default HomePageBanner;