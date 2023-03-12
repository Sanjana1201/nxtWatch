import { VideoModel } from "../index";

export interface TrendingVideoModel extends Pick<VideoModel,"id" | "title"| "thumbnail_url" | "channel" | "view_count" | "published_at">{
}
