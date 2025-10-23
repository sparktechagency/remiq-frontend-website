import React from 'react';
import BeatsCard from '../profile/ProfileDetails/BeatsCard';
import { beatsData } from '@/constants/profile';

const Bookmark = () => {
    return ( 
        <div className=' pt-10 lg:px-20'> 
            <p className=' text-2xl font-medium pb-4 text-white/90 '> Bookmarks </p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  overflow-y-auto'>
            {
            beatsData.slice(1).map((beat) => (
                <BeatsCard key={beat.id} beat={beat} />
            ))
            }
        </div>
        </div>
    );
};

export default Bookmark;