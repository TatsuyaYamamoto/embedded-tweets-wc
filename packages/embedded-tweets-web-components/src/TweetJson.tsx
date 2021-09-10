export interface TweetJson {
  lang: string | "ja";
  favorite_count: number;
  created_at: string;
  display_text_range: [number, number];
  entities: {
    hashtags: { indices: [number, number]; text: string }[];
    urls: {
      display_url: string;
      expanded_url: string;
      indices: [number, number];
      url: string;
    }[];
    user_mentions: {
      id_str: string;
      indices: [number, number];
      name: string;
      screen_name: string;
    }[];
    symbols: {}[];
    media: {
      display_url: string;
      expanded_url: string;
      indices: [number, number];
      url: string;
    }[];
  };
  id_str: string;
  text: string;
  user: {
    id_str: string;
    name: string;
    profile_image_url_https: string;
    screen_name: string;
    verified: boolean;
  };
  photos?: {
    backgroundColor: { red: number; green: number; blue: number };
    cropCandidates: { x: number; y: number; w: number; h: number }[];
    expandedUrl: string;
    url: string;
    width: number;
    height: number;
  }[];
  video?: {
    aspectRatio: [number, number];
    contentType: "media_entity";
    durationMs: number;
    mediaAvailability: { status: "available" };
    poster: string;
    variants: {}[];
    videoId: { type: "tweet"; id: "1327243125379588096" };
    viewCount: number;
  };
  conversation_count: number;
  news_action_type: "conversation" | string;
}
