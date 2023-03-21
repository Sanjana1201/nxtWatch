import { observer } from "mobx-react";
import NavbarComponent from "../Navbar";
import SideBarComponent from "../SideBar";
import { ContentWrapper, PageContentContainer } from "./styledComponent";

interface Props{
    renderWrappedComponent: () => React.ReactNode;
}

const WrapperComponent = (observer((props:Props) =>{

    return (
        <>
        <NavbarComponent />
        <ContentWrapper>
            <SideBarComponent />
            <PageContentContainer>
                {props.renderWrappedComponent()}
            </PageContentContainer>
        </ContentWrapper>
        </>
    )
}))


export default WrapperComponent; 