import Image from 'next/image';
import React from 'react';

const ProfileBanner = () => {
    return (
        <div>
            <div className='h-[210px]'> 
                <Image width={1200} height={210} src="/profile/profileBanner2.jpg" alt="" className='h-full w-full object-fill' />
            </div>
        </div>
    );
};

export default ProfileBanner;