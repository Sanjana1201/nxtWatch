import { inject, observer } from 'mobx-react';
// import { Redirect, RouteComponentProps, useHistory } from 'react-router-dom';
import LanguageSelector from '../../../common/components/LanguageSelector';
import { RemoveCookie } from '../../../common/utils/AuthUtil';
import LightModeIcon from '../../icons/nxtWaveIcon/lightModeIcon';
import {NavbarWrapper,ProfileImg,CustomWhiteBgButton,NavlinksContainer,ThemeButton, DarkIcon} from './styledComponents'
import {useTranslation} from 'react-i18next';
import DarkModeIcon from '../../icons/nxtWaveIcon/darkModeIcon';
import MyTheme from '../../../common/stores/ThemeStore';
import AuthDataStore from '../../../Authentication/stores/AuthStore';

interface InjectedProps extends Props {
    AuthStore : AuthDataStore,
    ThemeStore : MyTheme,
}

interface Props{
}


const NavbarComponent = inject('AuthStore','ThemeStore')(observer((props: Props) =>{

    const {t} = useTranslation();
    
    const getInjectedProps = () => props as InjectedProps

    const getThemeStore = () => getInjectedProps().ThemeStore;

    const getAuthStore = () => getInjectedProps().AuthStore;

    // const history = useHistory();

    const handleLogout = () =>{
        RemoveCookie();
        getAuthStore().logOutUser();
        // history.replace("/login");
        window.location.reload();
    }

    const handleTheme = () =>{
        getThemeStore().changeTheme();
    }

    return (
        <>
        <NavbarWrapper>
            {getThemeStore().theme==='Light'? <LightModeIcon />:<DarkModeIcon/>}
            <NavlinksContainer>
            <LanguageSelector />
                <ThemeButton type="button" onClick={handleTheme}>{getThemeStore().theme==="Light"? (<i className="fa-solid fa-moon"></i>):(<DarkIcon className="fa-solid fa-sun"></DarkIcon>)}</ThemeButton>
                <ProfileImg src = "https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" alt ="profile" />
                <CustomWhiteBgButton MyColor="#3b82f6" onClick={handleLogout}>{t('logout')}</CustomWhiteBgButton>
            </NavlinksContainer>
        </NavbarWrapper>

        </>
    )
}))

export default NavbarComponent;