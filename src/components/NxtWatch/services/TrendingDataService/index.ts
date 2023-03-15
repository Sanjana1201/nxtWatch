import { GetCookie } from "../../../common/utils/AuthUtil";

export const TrendingDataApi = () =>{
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${GetCookie()}`);
    return fetch(`https://apis.ccbp.in/videos/trending`,{
        method: "GET",
        headers: myHeaders,
    })
}