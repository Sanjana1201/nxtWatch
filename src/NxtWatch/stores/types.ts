export interface ChannelModels{
    name: string,
    profile_image_url: string,
    subscriber_count: string
}

export interface VideoModel{
    id:  string,
    title: string,
    video_url: string,
    thumbnail_url: string,
    channel: ChannelModels,
    view_count: string,
    published_at: string,
    description: string
}

export interface HomeVideoModel extends Pick<VideoModel,"id" | "title"| "thumbnail_url" | "channel" | "view_count" | "published_at">{
}

export interface GamingVideoModel extends Pick<VideoModel,"id" | "title"| "thumbnail_url" | "view_count">{
}

export interface TrendingVideoModel extends Pick<VideoModel,"id" | "title"| "thumbnail_url" | "channel" | "view_count" | "published_at">{
}