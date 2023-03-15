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
                <i className="fa-solid fa-fire"></i>
            </HeadingIconHolder>
            <div>
                <HeadingText>{props.title}</HeadingText>
            </div>
        </HeadingContainer>
        </ThemeProvider>

    )
}))

export default NxtWatchHeading;