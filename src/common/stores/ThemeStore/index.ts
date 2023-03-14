import { action, observable } from "mobx";

class MyTheme{
    @observable theme = "Light";

    @action changeTheme = () =>{
        this.theme = this.theme==="Dark"? "Light":"Dark";
    }
}

export default MyTheme