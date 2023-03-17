import { CustomContainer } from "../NoSavedVideo/styledComponents";
import { NoResultWrapper } from "./styledComponents";
import {useTranslation} from 'react-i18next';
import { observer } from "mobx-react";
import { DarkColorText, LightColorText } from "../SomethingWentWrong/styledComponents";


const NoResultPage = (observer(() =>{

    const {t} = useTranslation();

    return (
        <CustomContainer topMargin="0px">
            <NoResultWrapper src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" alt="No Data"/>
            <LightColorText><b>{t("no_search_result")}</b></LightColorText>
            <DarkColorText>{t("try_different_keyword")}</DarkColorText>
        </CustomContainer>
    )
}))

export default NoResultPage;