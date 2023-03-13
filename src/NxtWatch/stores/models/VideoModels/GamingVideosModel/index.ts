import { GamingVideoModel } from "../../../types";

class GamingModel{
    id: string;
    title: string;
    thumbnail_url: string;
    view_count: string;
  
    constructor(country:GamingVideoModel) {
        const { id, title, thumbnail_url, view_count } = country;
        this.id = id;
        this.title = title;
        this.thumbnail_url = thumbnail_url;
        this.view_count = view_count;
    }
  }
  
  export default GamingModel;
  

