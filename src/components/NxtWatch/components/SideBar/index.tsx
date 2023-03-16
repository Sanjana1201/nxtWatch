import { NavLink } from 'react-router-dom'
import {SidebarWrapper,SidebarLinks,CustomIcons,CustomSocialIcons,FooterDiv, ContactUsDiv, ContactUsContent, SocialIconDiv} from './styledComponents'
import './index.css';
import { ThemeProvider } from 'styled-components';
import { DarkModeColors, LightModeColors } from '../../../common/constants/colors';
import { inject, observer } from 'mobx-react';
import {useTranslation} from 'react-i18next';

const SideBarComponent = inject('AuthStore','ThemeStore')(observer(({AuthStore,ThemeStore}) =>{

    const {t} = useTranslation();

    return (
        // <div style={{display: "flex",height: "100vh",justifyContent: "stretch"}}>
    <ThemeProvider theme={ThemeStore.theme==="Light"? LightModeColors:DarkModeColors}>
    <SidebarWrapper>
        <div className="SideBarLinksContainer">
            <NavLink activeClassName="active" exact to="/">
            <SidebarLinks className={ThemeStore.theme==="Light"? "lightMode":"darkMode"}>
                <CustomIcons className="fa-solid fa-house"></CustomIcons>{t('Home')}
            </SidebarLinks>
            </NavLink>
            <NavLink activeClassName="active" exact to ="/trending">
            <SidebarLinks className={ThemeStore.theme==="Light"? "lightMode":"darkMode"}>
                <CustomIcons className="fa-solid fa-fire"></CustomIcons>{t('Trending')}
            </SidebarLinks>
            </NavLink>
            <NavLink activeClassName="active" exact to = "/gaming">
            <SidebarLinks className={ThemeStore.theme==="Light"? "lightMode":"darkMode"}>
                <CustomIcons className="fa-sharp fa-solid fa-gamepad"></CustomIcons>{t('Gaming')}
            </SidebarLinks>
            </NavLink>
            <NavLink activeClassName="active" exact to ="/saved-videos">
            <SidebarLinks className={ThemeStore.theme==="Light"? "lightMode":"darkMode"}>
                <CustomIcons className="fa-solid fa-plus"></CustomIcons>{t('Saved Videos')}
            </SidebarLinks>
            </NavLink>
        </div>
        <FooterDiv>
            <ContactUsDiv>
                {t('Contact_Us')}
            </ContactUsDiv>
            <SocialIconDiv>
                <CustomSocialIcons src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" alt = "facebook logo" />
                <CustomSocialIcons src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" alt="twitter logo"/>
                <CustomSocialIcons src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" alt="linked in logo"/>
            </SocialIconDiv>
            <ContactUsContent>
                {t('footer_msg')}
            </ContactUsContent>
        </FooterDiv>
    </SidebarWrapper>
    </ThemeProvider>
    // <div style={{overflowY: "auto",width:"100%"}}>
    // <div>
    //      content
    // </div>
    // </div>
    // </div>
    )
}))


export default SideBarComponent; 