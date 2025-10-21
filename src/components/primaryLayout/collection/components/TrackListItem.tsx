"use client";

import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Track } from "@/constants/global";
import { Play } from "lucide-react";
import Link from "next/link";
interface TrackListItemProps {
  track: Track;
  onBuy?: (track: Track) => void;
}

export function TrackListItem({ track, onBuy }: TrackListItemProps) {
  return (
    <Link
      href={`/track/${track.id}`}
      className="flex items-center justify-between py-4 px-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors border border-slate-700"
    >
      <div className="flex items-center gap-4 flex-1">
        {/* Track Image */}
        {/* <div className="w-12 h-12 rounded bg-slate-700 flex-shrink-0">
          <Image
            src={track.image || "/placeholder.svg"}
            alt={track.title}
            className="w-full h-full object-cover rounded"
            width={0}
            height={0}
          />
        </div> */}
        <div className=" p-2 rounded-full bg-[#7085FE]">
          <Play className="fill-current" size={16} />
        </div>

        {/* Track Info */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-slate-100 truncate">
            {track.title}
          </p>
          <p className="text-xs text-slate-400">{track.artist}</p>
        </div>

        {/* Genres */}
        <div className="flex gap-2 flex-wrap">
          {track.genre.map((g: any) => (
            <span
              key={g}
              className="text-xs text-blue-300 bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30"
            >
              #{g}
            </span>
          ))}
        </div>
      </div>

      {/* Price and Buy Button */}
      <div className="flex items-center gap-3 ml-4">
        <span className="text-sm font-semibold text-slate-100 whitespace-nowrap">
          ${track.price}
        </span>
        <Button
          type="primary"
          size="small"
          icon={<ShoppingCartOutlined />}
          onClick={() => onBuy?.(track)}
        >
          Buy
        </Button>
      </div>
    </Link>
  );
}
