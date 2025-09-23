"use client";

import { VideoFeed } from "@/components/feed/VideoFeed";

const samplePosts = [
  {
    id: "1", 
    user: {
      username: "noman",
      avatar: `https://picsum.photos/seed/${Math.random()}/200`,
      isFollowing: false,
    },
    content: {
      title: "Midnight Dreams (Trap Beat)",
      description: "Dive into the dark, atmospheric world where shadows breathe, silence carries secrets.",
      hashtags: ["trap", "beat"],
      video: "https://www.youtube.com/shorts/JvQe2jwE8nY", // 🎥 replaced image with video
    },
    stats: {
      likes: "1.2K",
      comments: "234",
      bookmarks: "890",
      shares: "67",
    },
  },
  {
    id: "2",
    user: {
      username: "musicmaker", 
      avatar: `https://picsum.photos/seed/${Math.random()}/200`,
      isFollowing: false,
    },
    content: {
      title: "Neon Nights (Electronic Mix)",
      description: "Electric vibes that pulse through the city streets, bringing energy to your soul.",
      hashtags: ["electronic", "mix", "neon"],
      image: `https://picsum.photos/seed/${Math.random()}/400/300`, // still image
    },
    stats: {
      likes: "2.1K",
      comments: "456",
      bookmarks: "1.2K",
      shares: "89",
    },
  },
  {
    id: "3",
    user: {
      username: "beatdrop",
      avatar: `https://picsum.photos/seed/${Math.random()}/200`,
      isFollowing: true,
    },
    content: {
      title: "Urban Pulse (Hip-Hop Instrumental)",
      description: "Raw beats that capture the essence of street culture and urban life.",
      hashtags: ["hiphop", "urban", "instrumental"],
      video: "/videos/urban-pulse.mp4", // 🎥 video post
    },
    stats: {
      likes: "3.4K",
      comments: "678",
      bookmarks: "1.5K",
      shares: "123",
    },
  },
  {
    id: "4",
    user: {
      username: "synthwave_queen",
      avatar: `https://picsum.photos/seed/${Math.random()}/200`,
      isFollowing: false,
    },
    content: {
      title: "Retro Wave Paradise",
      description: "Take a journey back to the 80s with these nostalgic synthwave vibes.",
      hashtags: ["synthwave", "retro", "electronic"],
      video: "https://www.youtube.com/shorts/dQw4w9WgXcQ", // 🎥 video post
    },
    stats: {
      likes: "5.6K",
      comments: "892",
      bookmarks: "2.3K",
      shares: "445",
    },
  },
  {
    id: "5",
    user: {
      username: "jazzy_beats",
      avatar: `https://picsum.photos/seed/${Math.random()}/200`,
      isFollowing: true,
    },
    content: {
      title: "Smooth Jazz Cafe",
      description: "Relax and unwind with these smooth jazz beats perfect for your evening coffee.",
      hashtags: ["jazz", "lofi", "chill"],
      image: `https://picsum.photos/seed/${Math.random()}/400/300`, // still image
    },
    stats: {
      likes: "4.2K",
      comments: "567",
      bookmarks: "1.8K",
      shares: "234",
    },
  }
];

export default function Home() {
  return (
        <div className="flex justify-center ">
          <div className="w-full max-w-sm">
            <VideoFeed posts={samplePosts} />
          </div>
        </div>
  )
}
