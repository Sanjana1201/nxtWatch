import { NavLink } from 'react-router-dom'
import {SidebarWrapper,SidebarLinks,CustomIcons,CustomSocialIcons,FooterDiv, ContactUsDiv, ContactUsContent, SocialIconDiv} from './styledComponents'
import './index.css';
import { inject, observer } from 'mobx-react';
import {useTranslation} from 'react-i18next';
import MyTheme from '../../../common/stores/ThemeStore';


interface InjectedProps extends Props {
    ThemeStore : MyTheme,
    renderWrappedComponent: () => React.ReactNode;
}
interface Props{
}

const SideBarComponent = inject('ThemeStore')(observer((props:Props) =>{

    const {t} = useTranslation();

    const getInjectedProps = () => props as InjectedProps;

    const getThemeStore = () => getInjectedProps().ThemeStore

    return (
        <SidebarWrapper>
            <div className="SideBarLinksContainer">
                <NavLink activeClassName="active" exact to="/">
                    <SidebarLinks className={getThemeStore().theme==="Light"? "lightMode":"darkMode"}>
                        <CustomIcons className="fa-solid fa-house"></CustomIcons>{t('Home')}
                    </SidebarLinks>
                </NavLink>
                <NavLink activeClassName="active" exact to ="/trending">
                    <SidebarLinks className={getThemeStore().theme==="Light"? "lightMode":"darkMode"}>
                        <CustomIcons className="fa-solid fa-fire"></CustomIcons>{t('Trending')}
                    </SidebarLinks>
                </NavLink>
                <NavLink activeClassName="active" exact to = "/gaming">
                    <SidebarLinks className={getThemeStore().theme==="Light"? "lightMode":"darkMode"}>
                        <CustomIcons className="fa-sharp fa-solid fa-gamepad"></CustomIcons>{t('Gaming')}
                    </SidebarLinks>
                </NavLink>
                <NavLink activeClassName="active" exact to ="/saved-videos">
                    <SidebarLinks className={getThemeStore().theme==="Light"? "lightMode":"darkMode"}>
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
    )
}))


export default SideBarComponent; 