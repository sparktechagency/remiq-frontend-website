"use client";

import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { LucideMessageSquare } from "lucide-react";
import { avatar, infoItems, socialItems } from "@/constants/profile";
import Image from "next/image";
import { FiEdit2 } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import EditProfile from "@/components/UI/modal/profile/EditProfile";
import Setting from "@/components/UI/modal/profile/Setting";
import Followers from "@/components/UI/modal/profile/Followers";
import Preference from "@/components/UI/modal/profile/Preference";

const UserProfileSidebar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);
  const [isFollowing, setIsFollowing] = React.useState(false);
  const [type, setType] = React.useState('followers')
  const [isPreferenceOpen, setIsPreferenceOpen] = React.useState(false);

  return (
    <aside className="w-full max-w-full px-6 py-8 text-white relative">

      <div className=" flex items-center gap-2 absolute top-4 right-4 ">

        <button
          onClick={() => setIsModalOpen(true)}
          className=" p-2 rounded-full bg-white/10 transition-colors"
        >
          <FiEdit2 size={18} className="text-white/80" />
        </button>

        <button onClick={() => setIsSettingsOpen(true)}
          className=" p-2 rounded-full bg-white/10 transition-colors">
          <IoMdSettings size={20} />
        </button>
      </div>

      <div className="flex flex-col items-center pt-4">
        {/* Avatar */}
        <div className="relative mb-4">
          <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-[#7085FE] to-[#7085FE]">
            <Image
              src={avatar}
              alt="Profile avatar"
              height={112}
              width={112}
              className="w-full h-full rounded-full object-cover border-4 border-[#0f2b36]"
            />
          </div>
        </div>

        {/* Name + Verified Badge */}
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          Steave Ani
          <span
            title="Verified"
            className="  text-[#3b82f6]"
          >
            <BsPatchCheckFill size={20} />
          </span>
        </h2>
        <p className="mt-1 text-xs text-[#9C9C9C]">@stave_ani</p>

        {/* Followers Info */}
        <div className="mt-3 flex items-center gap-3 text-sm text-white/90">
          <span className="font-medium cursor-pointer " onClick={() => { setIsFollowing(true); setType('followers') }}>128k Followers</span>
          <span className="">•</span>
          <span className="font-medium cursor-pointer " onClick={() => { setIsFollowing(true); setType('following') }}>128k Followings</span>
        </div>

        {/* Bio */}
        <p className="mt-4 text-center leading-relaxed text-sm text-white/90">
          Just A Kid With Big Dreams And A Laptop — Producing Music That Speaks
          Louder Than Words.
        </p>

        {/* Buttons */}
        <div className="mt-5 w-full space-y-3">
          <button className="w-full rounded-md bg-[#7085FE] py-2 font-medium text-white hover:bg-[#7085FE] transition-colors">
            + Follow
          </button>
          <button className="w-full rounded-md border border-white/30 bg-[#2382CC4D] py-2 text-slate-200 flex items-center justify-center gap-2 hover:bg-slate-700/30 transition-colors">
            <LucideMessageSquare size={16} />
            Message
          </button>
        </div>

        {/* Divider */}
        <hr className="my-5 w-full border-slate-700" />

        {/* Info Section */}
        <ul className="w-full space-y-3 text-sm text-slate-300">
          {infoItems.map(({ key, icon: Icon, text, href }) => (
            <li key={key} className="flex items-center gap-3">
              <Icon size={16} className="text-slate-400" />
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    key === "website"
                      ? "text-sky-300 hover:underline"
                      : "text-slate-300 hover:underline"
                  }
                >
                  {text}
                </a>
              ) : (
                <span>{text}</span>
              )}
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="mt-5 flex items-center justify-start gap-3">
          {socialItems.map(({ key, imgUrl, href }: { key: string, imgUrl: string, href: string }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 flex items-center justify-center "
            >
              <Image
                src={imgUrl}
                alt={`${key} social link`}
                width={20}
                height={20}
                className="rounded object-contain"
              />
            </a>
          ))}
        </div>
      </div>
      <EditProfile isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <Setting isOpen={isSettingsOpen} setIsOpen={setIsSettingsOpen} setIsPreferenceOpen={setIsPreferenceOpen} />

      {
        type === 'following' ? <Followers isOpen={isFollowing} setIsOpen={setIsFollowing} type='followers' /> : <Followers isOpen={isFollowing} setIsOpen={setIsFollowing} type='following' />
      }
      <Preference isOpen={isPreferenceOpen} setIsOpen={setIsPreferenceOpen} />
    </aside>
  );
};

export default UserProfileSidebar;
