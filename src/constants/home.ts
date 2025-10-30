const posts = [
  {
    id: "7",
    user: {
      username: "fitnessguru",
      avatar: `https://picsum.photos/seed/${Math.random()}/200`,
      isFollowing: false,
    },
    content: {
      title: "Morning HIIT Routine",
      description:
        "Burn calories fast with this 20-minute high-intensity workout.",
      hashtags: ["fitness", "hiit", "health"],
      video:
        "https://res.cloudinary.com/ds1njqypu/video/upload/v1761390787/video_20251004_100423_edit_yra4m2.mp4",
    },
    stats: {
      likes: "3.9K",
      comments: "864",
      bookmarks: "2.2K",
      shares: "321",
    },
  },
  {
    id: "16",
    user: {
      username: "streetvibes",
      avatar: `https://picsum.photos/seed/${Math.random()}/200`,
      isFollowing: false,
    },
    content: {
      title: "Urban Energy",
      description:
        "The rhythm of the city captured in motion — pure street vibes and hustle energy.",
      hashtags: ["street", "citylife", "motion"],
      video:
        "https://res.cloudinary.com/ds1njqypu/video/upload/v1761391133/Download_oa8t0p.mp4",
    },
    stats: {
      likes: "4.4K",
      comments: "720",
      bookmarks: "2.3K",
      shares: "340",
    },
  },
  {
    id: "45",
    user: {
      username: "fitnessguru",
      avatar: `https://picsum.photos/seed/${Math.random()}/200`,
      isFollowing: false,
    },
    content: {
      title: "Morning HIIT Routine",
      description:
        "Burn calories fast with this 20-minute high-intensity workout.",
      hashtags: ["fitness", "hiit", "health"],
      video:
        "https://res.cloudinary.com/ds1njqypu/video/upload/v1761720410/Download_1_vwffrl.mp4",
    },
    stats: {
      likes: "3.9K",
      comments: "864",
      bookmarks: "2.2K",
      shares: "321",
    },
  },
  {
    id: "6",
    user: {
      username: "travelwithsara",
      avatar: `https://picsum.photos/seed/${Math.random()}/200`,
      isFollowing: true,
    },
    content: {
      title: "Wonders of Cappadocia",
      description:
        "Floating above fairy chimneys at sunrise — an unforgettable hot air balloon ride.",
      hashtags: ["travel", "adventure", "wanderlust"],
      image: `https://picsum.photos/seed/${Math.random()}/400/300`,
    },
    stats: {
      likes: "6.7K",
      comments: "1.2K",
      bookmarks: "3.1K",
      shares: "502",
    },
  },

  {
    id: "8",
    user: {
      username: "foodie_jane",
      avatar: `https://picsum.photos/seed/${Math.random()}/200`,
      isFollowing: true,
    },
    content: {
      title: "Italian Pasta Perfection",
      description:
        "Creamy Alfredo with homemade fettuccine — comfort food at its finest.",
      hashtags: ["food", "pasta", "homemade"],
      image: `https://picsum.photos/seed/${Math.random()}/400/300`,
    },
    stats: {
      likes: "2.8K",
      comments: "674",
      bookmarks: "1.5K",
      shares: "210",
    },
  },
  {
    id: "9",
    user: {
      username: "techinsider",
      avatar: `https://picsum.photos/seed/${Math.random()}/200`,
      isFollowing: false,
    },
    content: {
      title: "AI Trends 2025",
      description:
        "Exploring how artificial intelligence is shaping industries and daily life.",
      hashtags: ["AI", "technology", "future"],
      image: `https://picsum.photos/seed/${Math.random()}/400/300`,
    },
    stats: {
      likes: "9.1K",
      comments: "2.3K",
      bookmarks: "4.5K",
      shares: "1.1K",
    },
  },
  {
    id: "10",
    user: {
      username: "photographylife",
      avatar: `https://picsum.photos/seed/${Math.random()}/200`,
      isFollowing: true,
    },
    content: {
      title: "Golden Hour Magic",
      description: "Capturing the warm glow of sunset across the city skyline.",
      hashtags: ["photography", "sunset", "goldenhour"],
      image: `https://picsum.photos/seed/${Math.random()}/400/300`,
    },
    stats: {
      likes: "7.4K",
      comments: "1.1K",
      bookmarks: "3.8K",
      shares: "540",
    },
  },
  {
    id: "11",
    user: {
      username: "gamedevhub",
      avatar: `https://picsum.photos/seed/${Math.random()}/200`,
      isFollowing: false,
    },
    content: {
      title: "Building an RPG in Unity",
      description:
        "Step-by-step breakdown of designing an immersive role-playing game.",
      hashtags: ["gamedev", "unity", "rpg"],
      video:
        "https://res.cloudinary.com/ds1njqypu/video/upload/v1761390787/video_20251004_100423_edit_yra4m2.mp4",
    },
    stats: {
      likes: "5.3K",
      comments: "932",
      bookmarks: "2.6K",
      shares: "410",
    },
  },
  {
    id: "12",
    user: {
      username: "minimalist_home",
      avatar: `https://picsum.photos/seed/${Math.random()}/200`,
      isFollowing: true,
    },
    content: {
      title: "Scandinavian Interior Design",
      description:
        "Clean lines, neutral colors, and cozy vibes for your dream living room.",
      hashtags: ["interior", "minimalism", "design"],
      image: `https://picsum.photos/seed/${Math.random()}/400/300`,
    },
    stats: {
      likes: "4.8K",
      comments: "780",
      bookmarks: "2.1K",
      shares: "289",
    },
  },
  {
    id: "13",
    user: {
      username: "codingmentor",
      avatar: `https://picsum.photos/seed/${Math.random()}/200`,
      isFollowing: false,
    },
    content: {
      title: "Mastering JavaScript in 2025",
      description:
        "Tips, tricks, and resources to become a professional JS developer.",
      hashtags: ["javascript", "coding", "programming"],
      image: `https://picsum.photos/seed/${Math.random()}/400/300`,
    },
    stats: {
      likes: "10.2K",
      comments: "3.1K",
      bookmarks: "5.7K",
      shares: "1.6K",
    },
  },
  {
    id: "14",
    user: {
      username: "musictherapy",
      avatar: `https://picsum.photos/seed/${Math.random()}/200`,
      isFollowing: true,
    },
    content: {
      title: "Healing with Piano",
      description:
        "Soft melodies that ease anxiety and bring calm to the soul.",
      hashtags: ["music", "piano", "relax"],
      video: "/videos/piano-healing.mp4",
    },
    stats: {
      likes: "6.2K",
      comments: "1.4K",
      bookmarks: "3.2K",
      shares: "675",
    },
  },
  {
    id: "15",
    user: {
      username: "startupstories",
      avatar: `https://picsum.photos/seed/${Math.random()}/200`,
      isFollowing: false,
    },
    content: {
      title: "From Garage to Global",
      description: "How small startups are becoming billion-dollar companies.",
      hashtags: ["business", "startup", "success"],
      image: `https://picsum.photos/seed/${Math.random()}/400/300`,
    },
    stats: {
      likes: "8.6K",
      comments: "1.9K",
      bookmarks: "4.4K",
      shares: "890",
    },
  },
];

export { posts };
