import { observer } from "mobx-react";
import PageNotFoundPage from "../../../common/components/PageNotFound";
import { ContentWrapper, PageContentContainer } from "../HomePage/styledComponents";
import NavbarComponent from "../Navbar";
import SideBarComponent from "../SideBar";


const NotFound = (observer(() =>{
    return (
        <>
            <NavbarComponent />
            <ContentWrapper>
                <SideBarComponent />
                <PageContentContainer>
                    <PageNotFoundPage />
                </PageContentContainer>
            </ContentWrapper>
        </>
    )
}))

export default NotFound;