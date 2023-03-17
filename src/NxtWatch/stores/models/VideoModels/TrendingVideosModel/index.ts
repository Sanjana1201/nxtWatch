import { ChannelTypes, TrendingVideoModel } from "../../../types";

interface ChannelDetailsModel extends Pick<ChannelTypes,'name' | 'profile_image_url'>{
}

class ChannelModel{
    name: string;
    profileImageUrl: string;

    constructor(channel: ChannelDetailsModel){
        const {name,profile_image_url} = channel;
        this.name = name;
        this.profileImageUrl = profile_image_url;
    }
}

class TrendingModel{
    id: string;
    title: string;
    thumbnailUrl: string;
    channel: ChannelModel;
    viewCount: string;
    publishedAt: string;
  
    constructor(country:TrendingVideoModel) {
        const { id, title, thumbnail_url, channel, view_count, published_at } = country;
        this.id = id;
        this.title = title;
        this.thumbnailUrl = thumbnail_url;
        this.channel = channel;
        this.viewCount = view_count;
        this.publishedAt = published_at;
    }
  }
  
  export default TrendingModel;
  

