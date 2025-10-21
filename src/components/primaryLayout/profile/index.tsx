import React from 'react';
import ProfileBanner from './ProfileBanner';
import UserProfileSidebar from './UserProfileSidebar';
import ProfileDetails from './ProfileDetails/ProfileDetails';

const Profile = () => {
    return (
        <div className=' grid grid-cols-12 h-[calc(100vh-70px)] pt-2 items-center gap-x-10 overflow-hidden'>
            <div className=' lg:col-span-3 col-span-0  bg-[#122D42] h-full'>
                <UserProfileSidebar />
            </div>

            <div className=' lg:col-span-9 col-span-12  h-full '>
                <ProfileBanner /> 
                <ProfileDetails />
            </div>
        </div>
    );
};

export default Profile;