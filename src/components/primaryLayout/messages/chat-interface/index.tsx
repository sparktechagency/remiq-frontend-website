"use client";
import { useState } from "react";
import { Drawer } from "antd";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import ProfileSidebar from "./ProfileSidebar";

interface ChatAreaProps {
  chatId: string;
  isCommunity?: boolean;
}

export default function ChatArea({
  chatId,
  isCommunity = false,
}: ChatAreaProps) {
  const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);

  return (
    <div className="flex h-full w-full">
      <div className="flex flex-col flex-1 h-full relative ">
        <ChatHeader
          chatId={chatId}
          isCommunity={isCommunity}
          onInfoClick={() => setProfileDrawerOpen(true)}
        />
        <MessageList chatId={chatId} isCommunity={isCommunity} />
        <MessageInput />
      </div>

      <div className="hidden xl:block">
        <ProfileSidebar isCommunity={isCommunity} />
      </div>

      <Drawer
        placement="right"
        onClose={() => setProfileDrawerOpen(false)}
        open={profileDrawerOpen}
        width={320}
        className="profile-drawer"
        styles={{
          body: { padding: 0, background: "#0D1B2E" },
          header: { display: "none" },
        }}
      >
        <ProfileSidebar isCommunity={isCommunity} />
      </Drawer>
    </div>
  );
}
