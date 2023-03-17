import { VideoDetailsModel} from "../../../types";

interface ChannelDetailsModel{
    name: string,
    profile_image_url: string,
    subscriber_count: string
}

class ChannelModel{
    name: string;
    profileImageUrl: string;
    subscriberCount: string;

    constructor(channel: ChannelDetailsModel){
        const {name,profile_image_url,subscriber_count} = channel;
        this.name = name;
        this.profileImageUrl = profile_image_url;
        this.subscriberCount = subscriber_count
    }
}

class VideoModel{
    id: string;
    title: string;
    videoUrl: string;
    thumbnailUrl: string;
    channel: any;
    viewCount: string;
    publishedAt: string;
    description: string;
  
    constructor(country:VideoDetailsModel) {
        const { id, title,video_url , thumbnail_url, channel, view_count, published_at,description } = country;
        this.id = id;
        this.title = title;
        this.videoUrl = video_url;
        this.thumbnailUrl = thumbnail_url;
        this.channel = new ChannelModel(channel);
        this.viewCount = view_count;
        this.publishedAt = published_at;
        this.description = description
    }
  }
  
  export default VideoModel;
  