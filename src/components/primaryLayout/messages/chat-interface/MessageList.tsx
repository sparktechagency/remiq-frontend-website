import Message from "@/components/shared/chat/Message";
import { communityMessages, oneToOneMessages } from "@/constants/messages";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";

export default function MessageList({
  chatId,
  isCommunity,
}: {
  chatId: string;
  isCommunity?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  console.log(chatId);

  // Dynamically choose which message set to use
  const currentMessages = useMemo(() => {
    if (pathname.includes("/chat/")) return oneToOneMessages;
    if (pathname.includes("/community/")) return communityMessages;
    return [];
  }, [pathname]);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    const el = containerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [currentMessages]);

  return (
    <div
      ref={containerRef}
      className="h-[calc(100vh-130px)]  overflow-y-auto px-3 lg:px-6 py-3 lg:py-4 pb-26 lg:pb-16 space-y-3 lg:space-y-4 flex flex-col-reverse"
    >
      {currentMessages?.map((message) => (
        <Message key={message.id} message={message} isCommunity={isCommunity} />
      ))}
    </div>
  );
}
