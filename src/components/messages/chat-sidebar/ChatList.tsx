import ChatListItem from "@/components/shared/chat/ChatListItem";
import { chats } from "@/constants/chats";

interface ChatListProps {
  isCommunity?: boolean;
  activeChatId: string | any;
}

export default function ChatList({
  isCommunity = false,
  activeChatId,
}: ChatListProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      {chats?.map((chat) => (
        <ChatListItem
          key={chat.id}
          chat={chat}
          isActive={chat.id === activeChatId}
          isCommunity={isCommunity}
        />
      ))}
    </div>
  );
}
