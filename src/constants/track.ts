export interface Track {
  id: string;
  title: string;
  artist: string;
  bpm: number;
  plays: number;
  price: number;
  audioUrl: string;
  image?: string;
}
const demoTrack: Track = {
  id: "1",
  title: "MetroLife",
  artist: "AudioVision",
  bpm: 85,
  plays: 380,
  price: 28.22,
  audioUrl: "/audio-track/metrolife-aud.mp3", // from /public folder
  image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
};

export { demoTrack };
