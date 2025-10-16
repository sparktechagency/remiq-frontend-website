import Link from "next/link";
import { Avatar, Badge } from "antd";

interface Chat {
  id: string;
  name: string;
  message: string;
  time: string;
  avatar: string;
  unread: number;
  online: boolean;
}

interface ChatListItemProps {
  chat: Chat;
  isActive: boolean;
  isCommunity?: boolean;
}

export default function ChatListItem({
  chat,
  isActive,
  isCommunity = false,
}: ChatListItemProps) {
  const href = isCommunity
    ? `/messages/community/${chat.id}`
    : `/messages/chat/${chat.id}`;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2.5 lg:py-3 hover:bg-[#1A2942] transition-colors ${
        isActive ? "border border-[#3D5AFE] rounded-xl" : ""
      }`}
    >
      <div className="relative flex-shrink-0">
        <Badge
          dot={chat.online}
          color="#52c41a"
          offset={[-5, 32]}
          style={{ boxShadow: "none" }}
        >
          <Avatar
            src={chat.avatar || "/placeholder.svg"}
            size={36}
            className="lg:!w-10 lg:!h-10"
          />
        </Badge>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-0.5 lg:mb-1">
          <h3 className="text-xs lg:text-sm font-medium text-white truncate">
            {chat.name}
          </h3>
          <span className="text-[10px] lg:text-xs text-gray-400 flex-shrink-0 ml-2">
            {chat.time}
          </span>
        </div>
        <p className="text-xs lg:text-sm text-gray-400 truncate ">
          {chat.message}
        </p>
      </div>
      {chat.unread > 0 && (
        <Badge
          count={chat.unread}
          className="flex-shrink-0"
          style={{
            backgroundColor: "#7085FE",
            fontSize: "10px",
            boxShadow: "none",
          }}
        />
      )}
    </Link>
  );
}
