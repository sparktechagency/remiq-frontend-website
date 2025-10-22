import React from 'react';
import BeatsCard from './BeatsCard';
import { LuUpload } from 'react-icons/lu';
import { beatsData } from '@/constants/profile';
import Link from 'next/link';

const Beats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  overflow-y-auto">
      {/* Upload Card */}
      <Link href="/upload/beats" className="relative w-full h-[200px] rounded-lg bg-slate-800/40 border-2 border-dashed border-slate-700 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-800/60 transition-colors">
        <LuUpload size={24} className="text-slate-400 mb-2" />
        <span className="text-slate-400 text-sm font-medium">Add Beats</span>
      </Link>

      {/* Beat Cards */}
      {beatsData.slice(1).map((beat) => (
        <BeatsCard key={beat.id} beat={beat} />
      ))}
    </div>
  );
};

export default Beats;