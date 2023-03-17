import ProtectedRoute from "./ProtectedRoute";
import HomeRoute from "./HomeRoute";
import TrendingRoute from "./TrendingVideosRoute";
import GamingRoute from "./GamingVideosRoute";
import VideoDetailsRoute from "./VideoDetailsRoute";
import SavedVideosRoute from "./SavedVideosRoute";

const NxtWatchRoutes = [
    <ProtectedRoute exact path="/trending" component={TrendingRoute}/>,
    <ProtectedRoute exact path="/gaming" component={GamingRoute}/>,
    <ProtectedRoute exact path="/saved-videos" component={SavedVideosRoute}/>,
    <ProtectedRoute exact path="/videos/:id" component={VideoDetailsRoute}/>,
    <ProtectedRoute exact path="/" component={HomeRoute}/>
]

export default NxtWatchRoutes;