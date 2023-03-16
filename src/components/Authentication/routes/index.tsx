import LoginRoute from "./LoginRoute";
import ProtectedLoginRoute from "./ProtectedRoute";


// const AuthRoute = observer(():any =>{
//     return (
//         <Provider {...Store}>
//             <Switch>
//                 <Route exact path="/login" component = {LoginRoute} />
//             </Switch>
//         </Provider>
//     )
// })

const AuthRoute = [
    <ProtectedLoginRoute exact path="/login" component = {LoginRoute} />
]

export default AuthRoute;