import { Redirect, Route } from 'react-router-dom'
import { GetCookie } from '../../../common/utils/AuthUtil';
// import HomePage from '../../components/HomePage';
// import ProtectedRoute from '../ProtectedRoute';

const ProtectedLoginRoute =(props:any) =>{
    const myCookie = GetCookie();
    if(myCookie===undefined){
        return <Route {...props}/>
    }
    else{
        return <Redirect to = {"/"}/>
    }
}

export default ProtectedLoginRoute;