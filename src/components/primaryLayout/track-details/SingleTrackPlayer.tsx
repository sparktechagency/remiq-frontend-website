"use client";

import { useEffect, useRef, useState } from "react";
import WaveSurfer, { WaveSurferOptions } from "wavesurfer.js";
import {
  Play,
  Pause,
  Heart,
  SkipBack,
  SkipForward,
  Repeat,
  Volume2,
  FileText,
} from "lucide-react";
import { Track } from "@/constants/track";
import Image from "next/image";

interface SingleTrackPlayerProps {
  track: Track;
}

export default function SingleTrackPlayer({ track }: SingleTrackPlayerProps) {
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [showLyrics, setShowLyrics] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Initialize WaveSurfer
  useEffect(() => {
    if (!waveformRef.current) return;

    const options: WaveSurferOptions = {
      container: waveformRef.current,
      waveColor: "#64748b",
      progressColor: "#7085FE",
      cursorColor: "#7085FE",
      barWidth: 2,
      barRadius: 2,
      height: 70,
      // responsive: true,
      normalize: true,
    };

    const wavesurfer = WaveSurfer.create(options);
    wavesurfer.load(track.audioUrl);
    wavesurfer.setVolume(volume);
    wavesurferRef.current = wavesurfer;

    // Update duration when ready
    wavesurfer.on("ready", () => {
      setDuration(wavesurfer.getDuration());
    });

    // Update current time while playing
    wavesurfer.on("audioprocess", () => {
      setCurrentTime(wavesurfer.getCurrentTime());
    });

    // Reset when finished
    wavesurfer.on("finish", () => {
      setIsPlaying(false);
      if (isLooping) wavesurfer.play();
    });

    return () => wavesurfer.destroy();
  }, [track.audioUrl]);

  // Update volume
  useEffect(() => {
    if (wavesurferRef.current) {
      wavesurferRef.current.setVolume(volume);
    }
  }, [volume]);

  const togglePlay = () => {
    if (!wavesurferRef.current) return;
    wavesurferRef.current.playPause();
    setIsPlaying((p) => !p);
  };

  const skipForward = () => {
    const ws = wavesurferRef.current;
    if (ws) ws.setTime(ws.getCurrentTime() + 5);
  };

  const skipBackward = () => {
    const ws = wavesurferRef.current;
    if (ws) ws.setTime(Math.max(ws.getCurrentTime() - 5, 0));
  };

  const toggleLoop = () => {
    setIsLooping((prev) => !prev);
  };

  // Format seconds -> M:SS
  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="bg-slate-900/90 border border-slate-700 rounded-lg overflow-hidden shadow-lg">
      {/* Waveform */}
      <div className="p-4 bg-slate-800/70">
        <div ref={waveformRef} className="w-full" />
        {/* Time display */}
        <div className="flex justify-between text-xs text-slate-400 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between p-4 gap-4">
        {/* Track Info */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Image
            src={track.image || "/placeholder.svg"}
            alt={track.title}
            className="w-12 h-12 object-cover rounded"
            width={48}
            height={48}
          />
          <div>
            <p className="text-white text-sm font-medium truncate">
              {track.title}
            </p>
            <p className="text-slate-400 text-xs">
              {track.artist} • {track.bpm} BPM • {track.plays} plays
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap lg:justify-center">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="text-slate-300 hover:text-red-500"
          >
            <Heart fill={isLiked ? "red" : "none"} />
          </button>
          <button
            onClick={skipBackward}
            className="text-slate-300 hover:text-white"
          >
            <SkipBack />
          </button>
          <button
            onClick={togglePlay}
            className="p-3 rounded-full bg-[#7085FE] hover:bg-[#5C6FFF] text-white transition-colors"
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button
            onClick={skipForward}
            className="text-slate-300 hover:text-white"
          >
            <SkipForward />
          </button>
          <button
            onClick={() => setShowLyrics(!showLyrics)}
            className="text-slate-300 hover:text-white"
          >
            <FileText />
          </button>
          <button
            onClick={toggleLoop}
            className={`text-slate-300 hover:text-white ${
              isLooping ? "text-[#7085FE]" : ""
            }`}
          >
            <Repeat />
          </button>
          {/* <button className="text-slate-300 hover:text-white">
            <ListMusic />
          </button> */}

          {/* Volume */}
          <div className="flex items-center gap-2">
            <Volume2 className="text-slate-300" />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-20 accent-[#7085FE]"
            />
          </div>
        </div>
      </div>

      {/* Lyrics Section */}
      {showLyrics && (
        <div className="p-4 border-t border-slate-700 text-slate-300 text-sm bg-slate-800/50">
          <p>
            🎵 “MetroLife” — sample lyrics placeholder. Add your lyrics or
            captions here dynamically later.
          </p>
        </div>
      )}
    </div>
  );
}
