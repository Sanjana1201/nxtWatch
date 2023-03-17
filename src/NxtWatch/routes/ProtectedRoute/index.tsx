import { observer } from 'mobx-react';
import { Route, Redirect } from 'react-router-dom'
import { GetCookie } from '../../../common/utils/AuthUtil';

const ProtectedRoute = observer((props:any) =>{
    const myCookie = GetCookie();
    if(myCookie===undefined){
        localStorage.setItem('redirectUrl',JSON.stringify(props.path));
        return <Redirect to='/login' />
    }
    else{
        return <Route {...props}/>
    }
})

export default ProtectedRoute;