import Message from "@/components/shared/chat/Message";
import messages from "@/constants/messages";
import { useEffect, useRef } from "react";

interface MessageListProps {
  chatId: string;
}

export default function MessageList({ chatId }: MessageListProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
console.log(chatId);
  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      // Instantly scroll to bottom whenever messages change
      el.scrollTop = el.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="h-[calc(100vh-130px)] overflow-y-auto px-3 lg:px-6 py-3 lg:py-4 pb-16 lg:pb-24 space-y-3 lg:space-y-4 flex flex-col-reverse "
    >
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}
