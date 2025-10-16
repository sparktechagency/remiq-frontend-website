import { Avatar } from "antd";
import { CheckOutlined } from "@ant-design/icons";

// interface MessageProps {
//   message: {
//     id: number;
//     text: string;
//     sender: "user" | "other";
//     time: string;
//     avatar?: string;
//     senderName?: string;
//     status?: "sent" | "delivered" | "read";
//   };
// }

export default function Message({ message, isCommunity = false }: any) {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex gap-2 lg:gap-3 items-end ${
        isUser ? "flex-row-reverse" : ""
      }`}
    >
      {!isUser && message.avatar && (
        <Avatar
          src={message.avatar || "/placeholder.svg"}
          size={28}
          className="flex-shrink-0 lg:!w-8 lg:!h-8"
        />
      )}
      <div
        className={`flex flex-col ${
          isUser ? "items-end" : "items-start"
        } max-w-[75%] lg:max-w-[60%]`}
      >
        {!isUser && message.senderName && isCommunity && (
          <span className="text-[10px] lg:text-xs text-gray-400 mb-1">
            {message.senderName}
          </span>
        )}
        <div
          className={`px-3 lg:px-4 py-2 rounded-2xl ${
            isUser
              ? "bg-[#6B7FFF] text-white rounded-br-sm"
              : "bg-[#1A2942] text-white rounded-bl-sm"
          }`}
        >
          <p className="text-xs lg:text-sm leading-relaxed break-words">
            {message.text}
          </p>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-[10px] lg:text-xs text-gray-400">
            {message.time}
          </span>
          {isUser && message.status && (
            <CheckOutlined className="text-[10px] lg:text-xs text-[#6B7FFF]" />
          )}
        </div>
      </div>
    </div>
  );
}
