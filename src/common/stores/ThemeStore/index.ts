import { action, observable } from "mobx";

class MyTheme{
    @observable theme = "Light";

    @action changeTheme = () =>{
        this.theme = "Dark"
    }
}

export default MyTheme