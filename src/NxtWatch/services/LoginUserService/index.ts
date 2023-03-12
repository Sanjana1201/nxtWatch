import { LoginRequestObject } from "../../stores/DataStore/LoginDataStore"

export const UserDataService = async(requestObject: LoginRequestObject) =>{
    return await fetch("https://apis.ccbp.in/login",{
        method: "POST",
        body: JSON.stringify(requestObject)
    })
}