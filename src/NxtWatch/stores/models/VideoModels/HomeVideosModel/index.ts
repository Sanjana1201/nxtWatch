import {  ChannelTypes, HomeVideoModel } from "../../../types";

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

class HomeModel{
    id: string;
    title: string;
    thumbnailUrl: string;
    channel: ChannelModel;
    viewCount: string;
    publishedAt: string;
  
    constructor(country:HomeVideoModel) {
        const { id, title, thumbnail_url, channel, view_count, published_at } = country;
        this.id = id;
        this.title = title;
        this.thumbnailUrl = thumbnail_url;
        this.channel = new ChannelModel(channel);
        this.viewCount = view_count;
        this.publishedAt = published_at;
    }
  }
  
  export default HomeModel;
  