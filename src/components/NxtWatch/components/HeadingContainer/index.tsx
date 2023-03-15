import { inject, observer } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import AuthDataStore from '../../../Authentication/stores/AuthStore';
import { DarkModeColors, LightModeColors } from '../../../common/constants/colors';
import MyTheme from '../../../common/stores/ThemeStore';
import {HeadingIconHolder,HeadingContainer,HeadingText} from './styledComponents'
interface Props{
    title: string,
    AuthStore: AuthDataStore,
    ThemeStore: MyTheme,
}

const NxtWatchHeading = inject('AuthStore','ThemeStore')(observer((props:Props) =>{
    return (
        <ThemeProvider theme={props.ThemeStore.theme==='Light'? LightModeColors: DarkModeColors}>
        <HeadingContainer>
            <HeadingIconHolder>
                {props.title === "Trending" && <i className="fa-solid fa-fire"></i>}
                {props.title==="Gaming" && <i className="fa-sharp fa-solid fa-gamepad"></i>}
                {props.title==="Saved Videos" && <i className="fa-solid fa-plus"></i>}
                
            </HeadingIconHolder>
            <div>
                <HeadingText>{props.title}</HeadingText>
            </div>
        </HeadingContainer>
        </ThemeProvider>

    )
}))

export default NxtWatchHeading;