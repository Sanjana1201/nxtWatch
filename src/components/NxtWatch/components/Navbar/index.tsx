import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import LanguageSelector from '../../../common/components/LanguageSelector';
import { DarkModeColors, LightModeColors } from '../../../common/constants/colors';
import { RemoveCookie } from '../../../common/utils/AuthUtil';
import LightModeIcon from '../../icons/nxtWaveIcon/lightModeIcon';
import {NavbarWrapper,ProfileImg,CustomWhiteBgButton,NavlinksContainer,ThemeButton} from './styledComponents'
import {useTranslation} from 'react-i18next';
import DarkModeIcon from '../../icons/nxtWaveIcon/darkModeIcon';


const NavbarComponent = inject('AuthStore','ThemeStore')(observer(({AuthStore,ThemeStore}) =>{

    const {t} = useTranslation();

    const handleLogout = () =>{
        RemoveCookie();
        AuthStore.logOutUser();
        window.location.reload();
    }

    const handleTheme = () =>{
        ThemeStore.changeTheme();
    }

    return (
        <>
        {AuthStore.loggedIn===false? <Redirect to ="/login"/> :
        <ThemeProvider theme={ThemeStore.theme==="Light"? LightModeColors:DarkModeColors}>
        <NavbarWrapper>
            {ThemeStore.theme==='Light'? <LightModeIcon />:<DarkModeIcon/>}
            <NavlinksContainer>
            <LanguageSelector />
                <ThemeButton type="button" onClick={handleTheme}>{ThemeStore.theme==="Light"? (<i className="fa-solid fa-moon"></i>):(<i className="fa-solid fa-sun"></i>)}</ThemeButton>
                <ProfileImg src = "https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" alt ="profile" />
                <CustomWhiteBgButton MyColor="#3b82f6" onClick={handleLogout}>{t('logout')}</CustomWhiteBgButton>
            </NavlinksContainer>
        </NavbarWrapper>
        </ThemeProvider>
        }
        </>
    )
}))

export default NavbarComponent;