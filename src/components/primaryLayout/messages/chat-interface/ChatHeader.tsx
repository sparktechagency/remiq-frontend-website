"use client";

import { Avatar, Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface ChatHeaderProps {
  chatId: string;
  isCommunity?: boolean;
  onInfoClick?: () => void;
}

export default function ChatHeader({
  chatId,
  isCommunity = false,
  onInfoClick,
}: ChatHeaderProps) {
  console.log(chatId);
  // Mock data - in real app, fetch based on chatId
  const user = {
    name: isCommunity ? "Bangla Community" : "Marvin McKinney",
    status: "Online",
    avatar: "https://i.ibb.co.com/v4MYNf8g/IMG-20251014-201029-2.jpg",
    role: isCommunity ? "Edward Davidson (Moderator)" : null,
  };

  const router = useRouter()

  const handleBackRoute = () => {

    router.push("/");
    // }
  }

  return (
    <div className="h-14 lg:h-16 bg-[#0D1B2E] border-b border-[#1A2942] flex items-center justify-between px-4 lg:px-6 flex-shrink-0">
      <div className="flex items-center gap-2 lg:gap-2 min-w-0">
        <Button
          shape="circle"
          className="!bg-transparent !border-none !hover:bg-[#1C274C] flex items-center justify-center md:!hidden"
          onClick={handleBackRoute}
          aria-label="Back"
        >
          <span className="sr-only">Back</span>
          <span className="flex items-center justify-center">
            <ArrowLeft size={22} color="#7085FE" />
          </span>
        </Button>
        <Avatar
          src={user.avatar || "/placeholder.svg"}
          size={globalThis.innerWidth < 1024 ? 36 : 40}
          style={{
            objectPosition: "cover",
          }}
        />
        <div className="min-w-0">
          <h2 className="text-sm lg:text-base font-medium text-white truncate">
            {user.name}
          </h2>
          <p className="text-xs text-[#7085FE]">{user.status}</p>
          {/* {user.role && (
            <p className="text-xs text-gray-400 truncate">{user.role}</p>
          )} */}
        </div>
      </div>
      <div className="flex items-center gap-2 lg:hidden">
        <Button
          type="text"
          icon={<InfoCircleOutlined className="text-lg lg:text-xl" />}
          onClick={onInfoClick}
          className="xl:hidden !text-gray-400 hover:!text-white"
        />
      </div>
    </div>
  );
}
