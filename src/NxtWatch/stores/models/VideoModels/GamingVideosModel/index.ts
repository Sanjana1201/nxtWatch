import { GamingVideoModel } from "../../../types";

class GamingModel{
    id: string;
    title: string;
    thumbnailUrl: string;
    viewCount: string;
  
    constructor(country:GamingVideoModel) {
        const { id, title, thumbnail_url, view_count } = country;
        this.id = id;
        this.title = title;
        this.thumbnailUrl = thumbnail_url;
        this.viewCount = view_count;
    }
  }
  
  export default GamingModel;