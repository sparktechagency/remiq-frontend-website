import { preferenceStyles } from '@/constants/profile';
import { Modal } from 'antd';
import React, { useState } from 'react';

interface PreferenceProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const Preference: React.FC<PreferenceProps> = ({ isOpen, setIsOpen }) => {
    const [selectedStyles, setSelectedStyles] = useState<string[]>([]);

    const handleStyleClick = (id: string) => {
        setSelectedStyles(prev => 
            prev.includes(id) 
                ? prev.filter(style => style !== id)
                : [...prev, id]
        );
    };

    return (
        <Modal
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            footer={null}
            width={500}
            className="custom-black-modal"
        >
            <div className="">  
                <p className=' w-[70%] text-2xl font-semibold pt-2'>  Select the Music Styles You’re Most Interested In </p>
                <p className="text-[#9C9C9C] text-[16px] pt-1 pb-6">
                    Fine-tune your feed to discover the music that fits your style.
                </p>

                {/* Search Input */}
                <div className="relative pb-6" >
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#7085FE]"
                    />
                </div>

                {/* Music Styles Grid */}
                <div className="flex flex-wrap gap-2.5 pb-6">
                    {preferenceStyles.map((style) => (
                        <button
                            key={style.id}
                            onClick={() => handleStyleClick(style.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                                ${selectedStyles.includes(style.id)
                                    ? 'bg-[#7085FE] text-white'
                                    : 'bg-[#122D42] text-slate-300 hover:bg-[#1a3955]'
                                }`}
                        >
                            {style.title}
                        </button>
                    ))}
                </div>

                {/* Update Button */}
                <button
                    onClick={() => {
                        console.log('Selected styles:', selectedStyles);
                        setIsOpen(false);
                    }}
                    className="w-full bg-[#7085FE] text-white py-3 rounded-lg font-medium hover:bg-[#5a6fd4] transition-colors"
                >
                    Update
                </button>
            </div>
        </Modal>
    );
};

export default Preference;