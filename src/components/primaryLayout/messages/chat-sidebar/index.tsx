"use client";
import Link from "next/link";
import { Button, Tooltip } from "antd";
import SearchBar from "@/components/shared/chat/SearchBar";
import StoryList from "./StoryList";
import ChatList from "./ChatList";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ArrowLeft, Users } from "lucide-react";

export default function ChatSidebar() {
  const { chatId } = useParams();
  const pathname = usePathname();
  const isCommunity = pathname.includes("/community/");
  const showStories = !isCommunity;
  console.log("community", isCommunity, "showStories:", showStories);

  const router = useRouter();
  return (
    <div className="w-full px-2 py-4  bg-transparent flex flex-col h-[calc(100vh-65px)] border-r pr-2 border-white/30">

      <div className="flex items-center justify-between mb-4 md:hidden">
        <Button
          shape="circle"
          className="!mr-2 !bg-transparent !border-none !hover:bg-[#1C274C] flex items-center justify-center"
          onClick={() => router.back()}
          aria-label="Back"
        >
          <span className="sr-only">Back</span>
          <span className="flex items-center justify-center">
            <ArrowLeft size={22} color="#7085FE" />
          </span>
        </Button>
        <div className="text-lg font-semibold text-white flex-1 flex justify-center">
          Chat
        </div>
        <Tooltip title={isCommunity ? "Chats" : "Community"}>
          <Link
            href={isCommunity ? "/messages/chat/1" : "/messages/community/1"}
          >
            <Button
              icon={
                <Users size={22} className="!fill-current !text-[#7085FE]" />
              }
              shape="circle"
              className="!bg-transparent !border-none !hover:bg-[#1C274C] flex items-center justify-center"
              aria-label={isCommunity ? "Go to Chats" : "Go to Community"}
            />
          </Link>
        </Tooltip>
      </div>



      <div className=" space-y-3 flex  gap-4">
        <SearchBar />
        <Tooltip title={isCommunity ? "Chats" : "Community"} className="hidden md:block">
          <Link
            href={isCommunity ? "/messages/chat/1" : "/messages/community/1"}
          >
            <Button
              icon={
                <Users size={20} className="!fill-current !text-[#7085FE]" />
              }
              block
              className="!h-10 !bg-transparent !border-[#7085FE] !rounded-lg !text-sm !px-3"
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
