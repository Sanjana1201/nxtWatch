
// import LoginPage from "../components/loginPage"
import HomePage from "../components/HomePage";
import TrendingPage from "../components/TrendingPage"
import GamingPage from "../components/Gaming";
import VideoPage from "../components/VideoPage";
import ProtectedRoute from "./ProtectedRoute";
import SavedVideos from "../components/SaveVideos";
// import ProtectedLoginRoute from "./ProtectedLoginRoute";
// import { ThemeStore } from "../../common/stores";


// const NxtWatch = observer(() =>{
//     return (
//         <Provider {...Store}>
//         <BrowserRouter>
//         <Switch>
//             {/* <ProtectedLoginRoute exact path="/login" component = {LoginPage} /> */}
//             <ProtectedRoute exact path="/trending" component={TrendingPage}/>
//             <ProtectedRoute exact path="/gaming" component={GamingPage}/>
//             <ProtectedRoute exact path="/saved-videos" component={SavedVideos}/>
//             <ProtectedRoute exact path="/videos/:id" component={VideoPage}/>
//             <ProtectedRoute exact path="/" component={HomePage}/>
//         </Switch>
//         </BrowserRouter>
//         </Provider>
//     )
// })


const NxtWatch = [
    <ProtectedRoute exact path="/trending" component={TrendingPage}/>,
    <ProtectedRoute exact path="/gaming" component={GamingPage}/>,
    <ProtectedRoute exact path="/saved-videos" component={SavedVideos}/>,
    <ProtectedRoute exact path="/videos/:id" component={VideoPage}/>,
    <ProtectedRoute exact path="/" component={HomePage}/>
]

export default NxtWatch;