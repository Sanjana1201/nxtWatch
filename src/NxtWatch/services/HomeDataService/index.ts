import { GetCookie } from "../../../common/utils/AuthUtil";


export const HomeDataFetchApi = (input:string) =>{
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${GetCookie()}`);
    return fetch(`https://apis.ccbp.in/videos/all?search=${input}`,{
        method: "GET",
        headers: myHeaders,
    })
}