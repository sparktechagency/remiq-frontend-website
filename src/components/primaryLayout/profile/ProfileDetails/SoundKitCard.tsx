import Image from 'next/image'; 
import { BsMusicNoteList } from "react-icons/bs";
import React from 'react';
interface SoundKitProps {
    soundKit: {
        name: string;
        image: string;
    }
}

const SoundKitCard: React.FC<SoundKitProps> = ({ soundKit }) => {
    return (
        <div>
            <div className='relative group w-full max-h-[200px] rounded-lg overflow-hidden cursor-pointer'>
                {/* Image */}
                <Image
                    src={soundKit.image}
                    alt={soundKit.name}
                    width={300}
                    height={200}
                    className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">


                    {/* Bottom Content */}
                    <div className="absolute bottom-0 w-full p-3 flex flex-col items-center gap-y-1 ">
                        <h3 className="text-white font-medium text-sm truncate flex items-center gap-1">
                         <span>   <BsMusicNoteList size={14} /> </span> 
                         <span> {soundKit.name} </span>   
                        </h3>
          
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoundKitCard;