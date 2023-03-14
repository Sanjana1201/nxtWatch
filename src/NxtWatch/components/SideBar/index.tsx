import { NavLink } from 'react-router-dom'
import {SidebarWrapper,SidebarLinks,CustomIcons,CustomSocialIcons, CustomLink,FooterDiv} from './styledComponents'
import './index.css';
import { ThemeProvider } from 'styled-components';
import { DarkModeColors, LightModeColors } from '../../../common/constants/colors';
import { inject, observer } from 'mobx-react';

const SideBarComponent = inject('AuthStore','ThemeStore')(observer(({AuthStore,ThemeStore}) =>{

    return (
        // <div style={{display: "flex",height: "100vh",justifyContent: "stretch"}}>
        <ThemeProvider theme={ThemeStore.theme==="Light"? LightModeColors:DarkModeColors}>
    <SidebarWrapper>
        <div className="SideBarLinksContainer">
            {/* <CustomLink className="nav-link" to="/">
            <SidebarLinks>
                <CustomIcons className="fa-solid fa-house"></CustomIcons>Home
            </SidebarLinks>
            </CustomLink>
            <CustomLink className="nav-link" to ="/trending">
            <SidebarLinks>
                <CustomIcons className="fa-solid fa-fire"></CustomIcons>Trending
            </SidebarLinks>
            </CustomLink>
            <CustomLink className="nav-link" to = "/gaming">
            <SidebarLinks>
                <CustomIcons className="fa-sharp fa-solid fa-gamepad"></CustomIcons> Gaming
            </SidebarLinks>
            </CustomLink>
            <CustomLink className="nav-link" to ="/saved-videos">
            <SidebarLinks>
                <CustomIcons className="fa-solid fa-plus"></CustomIcons> Saved Videos
            </SidebarLinks>
            </CustomLink> */}

            <NavLink activeClassName="active" exact to="/">
            <SidebarLinks>
                <CustomIcons className="fa-solid fa-house"></CustomIcons>Home
            </SidebarLinks>
            </NavLink>
            <NavLink activeClassName="active" exact to ="/trending">
            <SidebarLinks>
                <CustomIcons className="fa-solid fa-fire"></CustomIcons>Trending
            </SidebarLinks>
            </NavLink>
            <NavLink activeClassName="active" exact to = "/gaming">
            <SidebarLinks>
                <CustomIcons className="fa-sharp fa-solid fa-gamepad"></CustomIcons> Gaming
            </SidebarLinks>
            </NavLink>
            <NavLink activeClassName="active" exact to ="/saved-videos">
            <SidebarLinks>
                <CustomIcons className="fa-solid fa-plus"></CustomIcons> Saved Videos
            </SidebarLinks>
            </NavLink>
        </div>
        <FooterDiv>
            <div>
                Contact Us
            </div>
            <div>
                <CustomSocialIcons src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" alt = "facebook logo" />
                <CustomSocialIcons src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" alt="twitter logo"/>
                <CustomSocialIcons src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" alt="linked in logo"/>
            </div>
            <div>
                Enjoy!Now see your channels an recommendations
            </div>
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