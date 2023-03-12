import { VideoModel } from "..";

export interface GamingVideoModel extends Pick<VideoModel,"id" | "title"| "thumbnail_url" | "view_count">{
}
