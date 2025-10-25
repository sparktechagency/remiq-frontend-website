import React from 'react';
import { Modal, Input } from 'antd';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import { followers } from '@/constants/profile';

interface FollowersProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    type?: 'followers' | 'following';
}

const Followers = ({ isOpen, setIsOpen, type = 'followers' }: FollowersProps) => {

    const filteredFollowers = followers.filter((f) =>
        type === "followers" ? f.status === "Following" : f.status === "Followed"
    ); 

    console.log(filteredFollowers);

    return (
        <Modal
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            footer={null}
            width={400}
            className="custom-black-modal"
        > 
        <p className=' text-xl font-medium '>{type === "followers" ? "Following" : "Followers"}</p>
            <div className="py-4">
                <Input
                    prefix={<FiSearch className="text-slate-500" />}
                    placeholder="Search"
                    className="rounded-md" 
                    style={{ height:40}}
                    // onChange={(e) => setSearchTerm(e.target.value)} 
                />
            </div>

            <div className="max-h-[400px] overflow-y-auto">
                {filteredFollowers.length > 0 ? (
                    filteredFollowers.map((follower, index) => {
                        const isFollowing = follower.status === 'Following';

                        return (
                            <div
                                key={index}
                                className="flex items-center justify-between px-1  hover:rounded py-3 hover:bg-slate-800/50 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        <Image
                                            src={follower.img}
                                            alt={follower.name}
                                            width={40}
                                            height={40}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium text-sm">{follower.name}</h4>
                                        <p className="text-slate-400 text-xs">{follower.username}</p>
                                    </div>
                                </div>

                                {isFollowing ? (
                                    <button className="px-4 py-1 rounded-md bg-[#122D42] text-white text-sm transition-colors">
                                        Following
                                    </button>
                                ) : (
                                    <button className="px-4 py-1 rounded-md bg-[#122D42] text-white text-sm transition-colors">
                                        + Follow
                                    </button>
                                )}
                            </div>
                        );
                    })
                ) : (
                    <p className="text-white text-center py-4">No users found</p>
                )}
            </div>
        </Modal>
    );
};

export default Followers;
