import React from 'react';
import { Modal, Switch } from "antd";
import {
    FiLock,
    FiChevronRight,
    FiStar,
    FiBookmark,
    FiShield,
    FiSlash,
    FiHelpCircle,
    FiLogOut,
} from "react-icons/fi";
import { useRouter } from 'next/navigation';
import PasswordSecurity from './PasswordSecurity';
import ChangePassword from './ChangePassword';
import DeleteAccount from './DeleteAccount';

type Props = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    setIsPreferenceOpen: (open: boolean) => void
};

const Setting: React.FC<Props> = ({ isOpen, setIsOpen, setIsPreferenceOpen }) => {
    const [isPrivate, setIsPrivate] = React.useState(true);
    const router = useRouter();
    const [isPassword, setIsPassword] = React.useState(false);   
    const [isChangePassword, setIsChangePassword] = React.useState(false); 
    const [isDeleteAccount, setIsDeleteAccount] = React.useState(false);

    const items = [
        { key: "preference", label: "Preference", icon: FiStar, onClick: () => { setIsOpen(false); setIsPreferenceOpen(true) } },
        { key: "bookmarks", label: "Bookmarks", icon: FiBookmark, onClick: () => { setIsOpen(false); router.push("/bookmark") } },
        { key: "password", label: "Password & Security", icon: FiShield, onClick: () => { setIsOpen(false); setIsPassword(true) } },
        { key: "blocked", label: "Blocked Member", icon: FiSlash, onClick: () => console.log("blocked") },
        { key: "help", label: "Help & Support", icon: FiHelpCircle, onClick: () => console.log("help") },
        { key: "logout", label: "Log Out", icon: FiLogOut, onClick: () => console.log("logout"), danger: true },
    ];
    return (
        <div>
            <Modal
                centered
                open={isOpen}
                onCancel={() => setIsOpen(false)}
                footer={null}
                width={820}
                className="custom-black-modal"
            >
                <div className="px-[18px] pt-[14px] pb-[22px]">
                    {/* Title */}
                    <div className="mb-3">
                        <h3 className="m-0 text-white text-lg font-medium">Settings</h3>
                    </div>

                    {/* Private toggle row */}
                    <div className="mb-3 flex items-center justify-between gap-3 rounded-[8px] p-3 py-4 bg-[#122D42] border border-[#404142]">
                        <div className="flex items-center gap-3">
                            <p className="  text-[#7085FE]"> <FiLock size={20} /> </p>
                            <div className="text-[16px] text-[#e6eef8]">Private</div>
                        </div>
                        <Switch checked={isPrivate} onChange={(v) => setIsPrivate(v)} />
                    </div>

                    {/* Settings list */}
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
            <PasswordSecurity isOpen={isPassword} setIsOpen={setIsPassword} setIsChangePassword={setIsChangePassword} setIsDeleteAccount={setIsDeleteAccount} /> 
            <ChangePassword isOpen={isChangePassword} setIsOpen={setIsChangePassword} /> 
            <DeleteAccount isOpen={isDeleteAccount} setIsOpen={setIsDeleteAccount} />
        </div>
    );
};

export default Setting;