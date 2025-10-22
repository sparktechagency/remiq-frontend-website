import React from "react";
import { LuUpload } from "react-icons/lu";
import { collectionData } from "@/constants/profile";
import SoundKitCard from "./SoundKitCard";
import Link from "next/link";

const Collection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  overflow-y-auto">
      {/* Upload Card */}
      <Link
        href="/upload/collection"
        className="relative w-full h-[200px] rounded-lg bg-slate-800/40 border-2 border-dashed border-slate-700 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-800/60 transition-colors"
      >
        <LuUpload size={24} className="text-slate-400 mb-2" />
        <span className="text-slate-400 text-sm font-medium">
          Create Collection
        </span>
      </Link>

      {/* Beat Cards */}
      {collectionData?.slice(1).map((soundKit) => (
        <SoundKitCard key={soundKit.id} soundKit={soundKit} isCollectionPage={true} />
      ))}
    </div>
  );
};

export default Collection;
