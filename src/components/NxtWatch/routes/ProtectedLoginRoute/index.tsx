import Cookies from 'js-cookie';
import { Redirect, Route } from 'react-router-dom'
// import HomePage from '../../components/HomePage';
// import ProtectedRoute from '../ProtectedRoute';

const ProtectedLoginRoute =(props:any) =>{
    const myCookie = Cookies.get('user');
    if(myCookie===undefined){
        return <Route {...props}/>
    }
    else{
        return <Redirect to = {"/"}/>
    }
}

export default ProtectedLoginRoute;