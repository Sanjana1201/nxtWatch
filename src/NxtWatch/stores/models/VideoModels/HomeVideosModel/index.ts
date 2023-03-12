import { VideoModel } from "../index";

export interface HomeVideoModel extends Pick<VideoModel,"id" | "title"| "thumbnail_url" | "channel" | "view_count" | "published_at">{
}

  