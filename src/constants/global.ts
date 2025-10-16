interface MediaItem {
  id: number;
  type: "image" | "video";
  thumbnail: string;
  src: string;
}

export { type MediaItem,  };
