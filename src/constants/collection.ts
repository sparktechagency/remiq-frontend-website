import { Collection, Comment, Like } from "./global";
const mockCollection: Collection = {
  id: "1",
  title: "Drill Beats(25)",
  artist: "TopProducer",
  image:
    "https://i.ibb.co.com/Nns9rDBY/c9a2186f196704df0698215d4c9cbe95c3603227-1.jpg",
  description:
    "Explore a collection of high-quality instrumental crafted for every vibe and genre. Each beat comes with BPM (tempo) and key (musical scale) information for your project. Whether you're looking for hip-hop bangers, lo-fi chill beats, or cinematic soundscapes, we have you covered.",
  category: "Sample Pack",
  published: "July 18, 2025",
  tags: ["hip-hop", "trap", "drill"],
  totalPrice: 99.99,
  likes: 1234,
  comments: 567,
  tracks: [
    {
      id: "1",
      title: "Upbeats",
      artist: "TopProducer",
      price: 9.99,
      genre: ["hip-hop", "trap"],
      image: "/track-1.jpg",
      likes: 100,
      comments: 20,
    },
    {
      id: "2",
      title: "Upbeats",
      artist: "TopProducer",
      price: 9.99,
      genre: ["hip-hop", "trap"],
      image: "/track-2.jpg",
      likes: 100,
      comments: 20,
    },
    {
      id: "3",
      title: "Upbeats",
      artist: "TopProducer",
      price: 9.99,
      genre: ["hip-hop", "trap"],
      image: "/track-3.jpg",
      likes: 100,
      comments: 20,
    },
    {
      id: "4",
      title: "Upbeats",
      artist: "TopProducer",
      price: 9.99,
      genre: ["hip-hop", "trap"],
      image: "/track-4.jpg",
      likes: 100,
      comments: 20,
    },
    {
      id: "5",
      title: "Upbeats",
      artist: "TopProducer",
      price: 9.99,
      genre: ["hip-hop", "trap"],
      image: "/track-5.jpg",
      likes: 100,
      comments: 20,
    },
  ],
};
const mockComments: Comment[] = [
  {
    id: "1",
    author: "Tasha Starks",
    avatar: "https://i.ibb.co.com/v4MYNf8g/IMG-20251014-201029-2.jpg",
    text: "Yes, awesome!",
    timestamp: "2h ago",
  },
  {
    id: "2",
    author: "Tasha Starks",
    avatar: "https://i.ibb.co.com/3YvJKdsk/polok.jpg",
    text: "Yes, awesome!",
    timestamp: "2h ago",
  },
];

const mockLikes: Like[] = [
  {
    id: "1",
    author: "Brooklyn Shimmer",
    handle: "brooklyn001",
    avatar: "/user-avatar.jpg",
  },
  {
    id: "2",
    author: "Brooklyn Shimmer",
    handle: "brooklyn001",
    avatar: "/user-avatar.jpg",
  },
];

export { mockComments, mockLikes, mockCollection };
