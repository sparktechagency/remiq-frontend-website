import { BlockMembers } from '@/constants/profile';
import { Modal } from 'antd';
import Image from 'next/image';
import React from 'react';
import { MdBlock } from 'react-icons/md';

const BlockMember = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (open: boolean) => void }) => {
    return (
        <Modal
            centered
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            footer={null}
            width={500}
            className="custom-black-modal"
        >
            <p className=' text-xl font-medium  mb-3'>Blocked Members</p>
            <div className="max-h-[400px] overflow-y-auto">
                {BlockMembers.length > 0 ? (
                    BlockMembers.map((follower, index) => {
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

                                <p> <MdBlock size={20} /> </p>
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

export default BlockMember;