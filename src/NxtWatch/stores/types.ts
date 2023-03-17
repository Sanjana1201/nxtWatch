export interface ChannelTypes{
    name: string,
    profile_image_url: string,
    subscriber_count: string
}

export interface VideoTypes{
    id:  string,
    title: string,
    video_url: string,
    thumbnail_url: string,
    channel: any,
    view_count: string,
    published_at: string,
    description: string
}

export interface VideoDetailsModel extends VideoTypes{
}

export interface HomeVideoModel extends Pick<VideoTypes,"id" | "title"| "thumbnail_url" | "channel" | "view_count" | "published_at">{
}

export interface GamingVideoModel extends Pick<VideoTypes,"id" | "title"| "thumbnail_url" | "view_count">{
}

export interface TrendingVideoModel extends Pick<VideoTypes,"id" | "title"| "thumbnail_url" | "channel" | "view_count" | "published_at">{
}