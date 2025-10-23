import { Modal } from 'antd';
import React from 'react';
import { FiChevronRight, FiLock } from 'react-icons/fi';
import { RiDeleteBin6Line } from "react-icons/ri";

const PasswordSecurity = ({ isOpen, setIsOpen , setIsChangePassword, setIsDeleteAccount }: { isOpen: boolean, setIsOpen: (open: boolean) => void , setIsChangePassword: (open: boolean) => void , setIsDeleteAccount: (open: boolean) => void }) => {
    const items = [
        { key: "password", label: "Change Password", icon: FiLock, onClick: () => { setIsOpen(false); setIsChangePassword(true)} },
        { key: "delete", label: "Delete Account", icon: RiDeleteBin6Line, onClick: () => { setIsOpen(false); setIsDeleteAccount(true) }, danger: true },
    ];

    return (
        <Modal
            centered
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            footer={null}
            width={620}
            className="custom-black-modal"
        >
            <div>
                <div className="mb-6">
                    <h3 className="m-0 text-white text-lg font-medium">Password & Security</h3>
                </div>
                <div className="flex flex-col gap-3">
                    {items.map((it) => {
                        const Icon = it.icon as React.ComponentType<any>;
                        return (
                            <button
                                key={it.key}
                                type="button"
                                onClick={it.onClick}
                                className={`w-full flex items-center justify-between gap-3 p-[10px]  py-4 rounded-[8px] bg-[#122D42] border border-[#404142] `}
                            >
                                <div className="flex items-center gap-3">
                                    <div className=" text-[#7085FE] flex-shrink-0">
                                        <Icon size={20} />
                                    </div>

                                    <div className="text-left">
                                        <div className={`text-[16px] font-normal ${it.danger ? "text-[#ff6666]" : "text-[#e6eef8]"}`}>
                                            {it.label}
                                        </div>
                                    </div>
                                </div>

                                <FiChevronRight size={17} className="text-[#9fb3c9]" />
                            </button>
                        );
                    })}
                </div>
            </div>
        </Modal>
    );
};

export default PasswordSecurity;