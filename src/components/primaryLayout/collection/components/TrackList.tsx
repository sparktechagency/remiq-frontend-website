import { Track } from "@/constants/global";
import { TrackListItem } from "./TrackListItem";

interface TrackListProps {
  tracks: Track[];
  onBuyTrack?: (track: Track) => void;
}

export function TrackList({ tracks, onBuyTrack }: TrackListProps) {
  return (
    <div className="space-y-3">
      {tracks?.map((track) => (
        <TrackListItem key={track.id} track={track} onBuy={onBuyTrack} />
      ))}
    </div>
  );
}
