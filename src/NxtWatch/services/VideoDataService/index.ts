import { GetCookie } from "../../../common/utils/AuthUtil";

export const VideoDataService = (videoId:any) =>{
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${GetCookie()}`);
    // console.log(videoId);
    return fetch(`https://apis.ccbp.in/videos/${videoId}`,{
        method: "GET",
        headers: myHeaders,
    })
}