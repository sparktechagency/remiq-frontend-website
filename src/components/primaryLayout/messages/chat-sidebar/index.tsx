"use client";
import Link from "next/link";
import { Button, Tooltip } from "antd";
import SearchBar from "@/components/shared/chat/SearchBar";
import StoryList from "./StoryList";
import ChatList from "./ChatList";
import { useParams, usePathname } from "next/navigation";
import { Users } from "lucide-react";

export default function ChatSidebar() {
  const { chatId } = useParams();
  const pathname = usePathname();
  const isCommunity = pathname.includes("/community/");
  const showStories = !isCommunity;
  console.log("community", isCommunity, "showStories:", showStories);
  return (
    <div className="w-full px-2 py-4  bg-transparent flex flex-col h-[calc(100vh-65px)] border-r pr-2 border-white/30">
      <div className=" space-y-3 flex flex-col lg:flex-row  gap-4">
        <SearchBar />
        <Tooltip title={isCommunity ? "Chats" : "Community"}>
          <Link
            href={isCommunity ? "/messages/chat/1" : "/messages/community/1"}
          >
            <Button
              icon={
                <Users size={20} className="!fill-current !text-[#7085FE]" />
              }
              block
              className="!h-10 !bg-transparent !border-[#7085FE] !rounded-lg !text-sm"
            >
              <span className="lg:hidden">
                {isCommunity ? "Go to Chats" : "Community"}
              </span>
            </Button>
          </Link>
        </Tooltip>
      </div>

      {/* Stories */}
      {showStories && <StoryList />}

      {/* Chat List */}
      <ChatList isCommunity={isCommunity} activeChatId={chatId} />
    </div>
  );
}
