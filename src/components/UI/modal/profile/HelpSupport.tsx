import { Modal } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { RiQuestionnaireLine } from 'react-icons/ri';
import { LiaClipboardListSolid } from "react-icons/lia";
import { GoShieldCheck } from 'react-icons/go';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { FiChevronRight } from 'react-icons/fi';

const HelpSupport = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {
    const router = useRouter();

    const items = [
        { key: "about-us", label: "About Us", icon: BsInfoCircle, onClick: () => { setIsOpen(false); router.push("/about") } },
        { key: "faq", label: "FAQ", icon: RiQuestionnaireLine, onClick: () => { setIsOpen(false); router.push("/faq") } },
        { key: "terms", label: "Terms & Conditions", icon: LiaClipboardListSolid, onClick: () => { setIsOpen(false); router.push("/terms") } },
        { key: "privacy", label: "Privacy Policy", icon: GoShieldCheck, onClick: () => { setIsOpen(false); router.push("/privacy") } },
        { key: "contact", label: "Contact Us", icon: MdOutlineSupportAgent, onClick: () => { setIsOpen(false); router.push("/contact") } },
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
                                        <div className={`text-[16px] font-normal text-[#e6eef8]`}>
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

export default HelpSupport;