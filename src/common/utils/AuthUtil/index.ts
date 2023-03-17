import Cookies from "js-cookie";

export const GetCookie = () =>{
    return Cookies.get('user');
}

export const SetCookie = (MyCookie:string) =>{
    return Cookies.set('user',MyCookie);
}

export const RemoveCookie = () =>{
    return Cookies.remove('user');
}