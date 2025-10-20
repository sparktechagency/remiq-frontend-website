interface MediaItem {
  id: number;
  type: "image" | "video";
  thumbnail: string;
  src: string;
}
export interface Track {
  id: string;
  title: string;
  artist: string;
  price: number;
  genre: string[];
  image: string;
  description?: string;
  likes: number;
  comments: number;
  liked?: boolean;
}

export interface Collection {
  id: string;
  title: string;
  artist: string;
  image: string;
  description: string;
  category: string;
  published: string;
  tags: string[];
  tracks: Track[];
  totalPrice: number;
  likes: number;
  comments: number;
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  text: string;
  timestamp: string;
}

export interface Like {
  id: string;
  author: string;
  avatar: string;
  handle: string;
}

export { type MediaItem };
