import { GetCookie } from "../../../common/utils/AuthUtil";

export const GamingDataApi =()=>{
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${GetCookie()}`);
    return fetch(`https://apis.ccbp.in/videos/gaming`,{
        method: "GET",
        headers: myHeaders,
    })
}