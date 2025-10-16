"use client";

import { useState } from "react";
import { Avatar, Dropdown, Button, Image as AntdImage, Modal } from "antd";
import type { MenuProps } from "antd";
import {
  MoreOutlined,
  UserOutlined,
  WarningOutlined,
  StopOutlined,
  LogoutOutlined,
  GlobalOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import ReportModal from "@/components/shared/chat/modals/ReportModal";
import ConfirmModal from "@/components/shared/chat/modals/ConfirmModal";
import SuccessModal from "@/components/shared/chat/modals/SuccessModal";
import { MediaItem } from "@/constants/global";
import mediaItems from "@/constants/mediaItem";

interface ProfileSidebarProps {
  isCommunity?: boolean;
  chatId?: string;
}

export default function ProfileSidebar({
  chatId,
  isCommunity = false,
}: ProfileSidebarProps) {
  const [showReportModal, setShowReportModal] = useState(false);
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [openVideo, setOpenVideo] = useState(false);
  console.log(chatId);
  // Mock data
  const profile = {
    name: "Chord Progressions",
    username: "@jhon_lura",
    avatar: "https://i.ibb.co.com/v4MYNf8g/IMG-20251014-201029-2.jpg",
    website: "www.clamvi.com",
    email: "clamvi002@gmail.com",
    about:
      "Hi! I am a versatile beatmaker blending hip-hop, R&B, and electronic vibes, known for hard-hitting drums and atmospheric melodies, create sounds that inspire artists.",
  };

  const handleMediaClick = (item: MediaItem) => {
    if (item.type === "video") {
      setSelectedVideo(item.src);
      setOpenVideo(true);
    }
  };
  const handleReport = () => {
    setShowReportModal(false);
    setShowSuccessModal(true);
  };

  const menuItems: MenuProps["items"] = [
    {
      key: "profile",
      label: "Profile",
      icon: <UserOutlined />,
    },
    {
      key: "report",
      label: "Report",
      icon: <WarningOutlined />,
      onClick: () => setShowReportModal(true),
    },
    {
      key: "action",
      label: isCommunity ? "Leave" : "Block",
      icon: isCommunity ? <LogoutOutlined /> : <StopOutlined />,
      onClick: () =>
        isCommunity ? setShowLeaveModal(true) : setShowBlockModal(true),
    },
  ];

  return (
    <>
      <div className="w-full lg:w-[280px] xl:w-[300px] bg-[#0D1B2E] border-l border-[#1A2942] flex flex-col h-full overflow-y-auto scrollbar-hide max-h-[calc(100vh-65px)] overflow-auto">
        <div className="p-4 lg:p-6 border-b border-[#1A2942]">
          <div className="flex items-start justify-between mb-3 lg:mb-4">
            <Avatar
              src={profile.avatar || "/placeholder.svg"}
              size={64}
              className="lg:!w-20 lg:!h-20 !object-cover "
            />
            <Dropdown
              menu={{ items: menuItems }}
              trigger={["click"]}
              placement="bottomRight"
              overlayClassName="profile-dropdown"
            >
              <Button
                type="text"
                icon={<MoreOutlined className="text-lg lg:text-xl" />}
                className="!text-gray-400 hover:!text-white"
              />
            </Dropdown>
          </div>
          <h2 className="text-base lg:text-lg font-semibold text-white mb-1">
            {profile.name}
          </h2>
          <p className="text-xs lg:text-sm text-gray-400 mb-2 lg:mb-3">
            {profile.username}
          </p>
          {profile.website && (
            <a
              href={`https://${profile.website}`}
              className="flex items-center gap-2 text-xs lg:text-sm text-[#6B7FFF] hover:underline mb-1"
            >
              <GlobalOutlined />
              <span className="truncate">{profile.website}</span>
            </a>
          )}
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-xs lg:text-sm text-[#6B7FFF] hover:underline"
            >
              <MailOutlined />
              <span className="truncate">{profile.email}</span>
            </a>
          )}
        </div>

        {/* About */}
        <div className="p-4 lg:p-6 border-b border-[#1A2942]">
          <h3 className="text-xs lg:text-sm font-semibold text-white mb-2">
            About
          </h3>
          <p className="text-xs lg:text-sm text-gray-400 leading-relaxed">
            {profile.about}
          </p>
        </div>

        {/* Media */}
        <div className="p-4 lg:p-6">
          <h3 className="text-xs lg:text-sm font-semibold text-white mb-3 lg:mb-4">
            Media
          </h3>

          {/* --- Image Viewer Wrapper --- */}
          <AntdImage.PreviewGroup>
            <div className="grid grid-cols-3 gap-1.5 lg:gap-2">
              {mediaItems?.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-square bg-[#1A2942] rounded-lg overflow-hidden group cursor-pointer"
                  onClick={() => handleMediaClick(item)}
                >
                  {item.type === "image" ? (
                    <AntdImage
                      src={item.thumbnail}
                      alt={`Media ${item.id}`}
                      className="object-cover w-full h-full !m-0"
                      preview={{ src: item.src }}
                    />
                  ) : (
                    <>
                      <Image
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={`Video ${item.id}`}
                        fill
                        className="object-cover !h-full !w-full "
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg
                          className="w-6 h-6 lg:w-8 lg:h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </AntdImage.PreviewGroup>

          {/* --- Video Modal --- */}
          <Modal
            open={openVideo}
            footer={null}
            centered
            onCancel={() => setOpenVideo(false)}
            width={800}
            bodyStyle={{ padding: 0, background: "#000" }}
          >
            {selectedVideo && (
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full rounded-lg"
              />
            )}
          </Modal>
        </div>
      </div>

      {/* Modals */}
      <ReportModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
        onSubmit={handleReport}
      />
      <ConfirmModal
        isOpen={showBlockModal}
        onClose={() => setShowBlockModal(false)}
        onConfirm={() => {
          setShowBlockModal(false);
          console.log("User blocked");
        }}
        title="Are you sure you want to remove this user?"
        confirmText="Confirm"
        cancelText="Cancel"
        userName="Leslie Alexander"
        userAvatar="/man.jpg"
      />
      <ConfirmModal
        isOpen={showLeaveModal}
        onClose={() => setShowLeaveModal(false)}
        onConfirm={() => {
          setShowLeaveModal(false);
          console.log("Left community");
        }}
        title="Are you sure you want to leave this community?"
        confirmText="No"
        cancelText="Yes"
      />
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        message="Your Report Has Been Successfully Submitted"
      />
    </>
  );
}
