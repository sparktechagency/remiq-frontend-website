import React from "react";
import Image from "next/image";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import Link from "next/link";

interface BeatProps {
  beat: {
    name: string;
    view: string;
    image: string;
  };
}

const BeatsCard: React.FC<BeatProps> = ({ beat }) => {
  return (
    <Link href={`/beats/${beat.name}`}>
      <div className="relative group w-full max-h-[200px] rounded-lg overflow-hidden cursor-pointer">
        {/* Image */}
        <Image
          src={beat.image}
          alt={beat.name}
          width={300}
          height={200}
          className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
          {/* Play Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
            <BsPlayFill size={24} className="text-white ml-1" />
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-0 w-full p-3 flex flex-col items-start gap-y-1 ">
            <h3 className="text-white font-medium text-sm truncate">
              {beat.name}
            </h3>
            <div className="flex items-center gap-1 text-white/80">
              <AiOutlineCaretRight size={14} />
              <span className="text-xs">{beat.view}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BeatsCard;
