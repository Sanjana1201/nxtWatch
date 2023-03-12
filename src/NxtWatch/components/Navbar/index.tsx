import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import { RemoveCookie,GetCookie } from '../../../common/utils/AuthUtil';
import LightModeIcon from '../../icons/nxtWaveIcon/lightModeIcon';
import {NavbarWrapper,ProfileImg,CustomWhiteBgButton,NavlinksContainer,ThemeButton} from './styledComponents'

const NavbarComponent = inject('AuthStore','ThemeStore')(observer(({AuthStore,ThemeStore}) =>{

    const handleLogout = () =>{
        RemoveCookie();
        AuthStore.logOutUser();
        window.location.reload();
    }

    console.log(AuthStore.isLoggedIn);

    return (
        <>
        {AuthStore.loggedIn===false? <Redirect to ="/login"/> :
        <NavbarWrapper>
            <LightModeIcon />
            <NavlinksContainer>
                <ThemeButton type="button"><i className="fa-solid fa-moon"></i></ThemeButton>
                <ProfileImg src = "https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" alt ="profile" />
                <CustomWhiteBgButton MyColor="#3b82f6" onClick={handleLogout}>Logout</CustomWhiteBgButton>
            </NavlinksContainer>
        </NavbarWrapper>
        }
        </>
    )
}))

export default NavbarComponent;