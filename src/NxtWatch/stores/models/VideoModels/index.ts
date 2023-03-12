interface ChannelModels{
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