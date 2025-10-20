import React from 'react';
import ProfileBanner from './ProfileBanner';

const Profile = () => {
    return (
        <div className=' grid grid-cols-12 '>
            <div className=' lg:col-span-2 col-span-0'>

            </div>

            <div className=' lg:col-span-10 col-span-12 bg-gray-100'>
               <ProfileBanner />
            </div>
        </div>
    );
};

export default Profile;