"use client";

import { useState } from "react";
import { Input, Button } from "antd";
import {
  PaperClipOutlined,
  SendOutlined,
  SmileOutlined,
} from "@ant-design/icons";

export default function MessageInput() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending:", message);
      setMessage("");
    }
  };

  return (
    <div className="h-16 lg:h-20 bg-primary border-t border-[#1A2942] px-3 lg:px-6 flex items-center gap-2 lg:gap-3 flex-shrink-0 absolute bottom-0 z-20 w-full  ">
      <Button
        type="text"
        icon={<PaperClipOutlined className="text-lg lg:text-xl" />}
        className="!text-gray-400 hover:!text-white !h-9 !w-9 lg:!h-10 lg:!w-10"
      />
      <div className="flex-1 relative">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onPressEnter={handleSend}
          placeholder="Type a message"
          suffix={
            <Button
              type="text"
              icon={<SmileOutlined />}
              className="!text-gray-400 hover:!text-white !h-8 !w-8"
            />
          }
          className="!bg-[#1A2942] !text-white !border-none !h-10 lg:!h-12 !rounded-lg !text-sm headerSearch"
          style={{
            backgroundColor: "#1A2942",
            color: "#ffffff",
          }}
        />
      </div>
      <Button
        type="primary"
        icon={<SendOutlined />}
        onClick={handleSend}
        className="!h-10 !w-10 lg:!h-12 lg:!w-12 !bg-[#6B7FFF] hover:!bg-[#5A6EEE] !border-none !rounded-full"
      />
    </div>
  );
}
