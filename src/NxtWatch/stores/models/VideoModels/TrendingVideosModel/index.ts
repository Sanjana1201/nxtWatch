import { ChannelModels, TrendingVideoModel } from "../../../types";

class HomeModel{
    id: string;
    title: string;
    thumbnail_url: string;
    channel: ChannelModels;
    view_count: string;
    published_at: string;
  
    constructor(country:TrendingVideoModel) {
        const { id, title, thumbnail_url, channel, view_count, published_at } = country;
        this.id = id;
        this.title = title;
        this.thumbnail_url = thumbnail_url;
        this.channel = channel;
        this.view_count = view_count;
        this.published_at = published_at;
    }
  }
  
  export default HomeModel;
  

