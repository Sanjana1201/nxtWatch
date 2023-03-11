import { NavLink } from 'react-router-dom'
import {SidebarWrapper,SidebarLinks,CustomIcons,CustomSocialIcons} from './styledComponents'
import './index.css';

const SideBarComponent = () =>{

    // const handleClick = (e:any)=>{
    //     console.log(e.target);
    // }

    return (
        // <div style={{display: "flex",height: "100vh",justifyContent: "stretch"}}>
    <SidebarWrapper>
        <div className="SideBarLinksContainer">
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
        <div>
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
        </div>
    </SidebarWrapper>
    // <div style={{overflowY: "auto",width:"100%"}}>
    // <div>
         //content
    // </div>
    // </div>
    // </div>
    )
}
export default SideBarComponent; 