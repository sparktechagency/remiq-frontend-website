"use client";

import { useState, useRef } from "react";
import { Input, Button, Image as AntdImage } from "antd";
import {
  PaperClipOutlined,
  SendOutlined,
  SmileOutlined,
  CloseCircleFilled,
} from "@ant-design/icons";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const inputRef = useRef<any>(null);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const urls = files.map((file) => URL.createObjectURL(file));
    setMediaFiles((prev) => [...prev, ...files]);
    setPreviewUrls((prev) => [...prev, ...urls]);
  };

  // Remove selected file
  const handleRemoveMedia = (index: number) => {
    setMediaFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle send
  const handleSend = () => {
    if (!message.trim() && mediaFiles.length === 0) return;

    console.log("Sending message:", message);
    console.log("Sending media:", mediaFiles);

    setMessage("");
    setMediaFiles([]);
    setPreviewUrls([]);
  };

  // Focus input to trigger native emoji keyboard
  const handleEmojiClick = () => {
    inputRef.current?.focus();

    // Optional: For desktop users, you can show a tooltip suggesting the emoji shortcut
    // (e.g., Windows: Win + . , Mac: Ctrl + Cmd + Space)
  };

  return (
    <div className="absolute bottom-[48px] lg:bottom-0 z-20 w-full bg-primary border-t border-[#1A2942] px-3 lg:px-6 flex flex-col gap-2 py-2 lg:py-3">
      {/* Media preview section (above input) */}
      {previewUrls.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 px-1">
          {previewUrls.map((url, index) => {
            const file = mediaFiles[index];
            return (
              <div
                key={index}
                className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden bg-[#1A2942] group"
              >
                {file.type.startsWith("image/") ? (
                  <AntdImage
                    src={url}
                    alt="preview"
                    className="object-cover w-full h-full !m-0"
                    preview={false}
                  />
                ) : (
                  <video
                    src={url}
                    className="object-cover w-full h-full"
                    controls={false}
                    muted
                  />
                )}
                <Button
                  type="text"
                  icon={<CloseCircleFilled />}
                  onClick={() => handleRemoveMedia(index)}
                  className="!absolute !top-0 !right-0 !text-white !bg-black/40 hover:!bg-black/60 !rounded-full !p-0"
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Input + Buttons */}
      <div className="flex items-center gap-2 lg:gap-3">
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Attachment button */}
        <Button
          type="text"
          icon={<PaperClipOutlined className="text-lg lg:text-xl" />}
          className="!text-gray-400 hover:!text-white !h-9 !w-9 lg:!h-10 lg:!w-10"
          onClick={() => fileInputRef.current?.click()}
        />

        {/* Text input */}
        <div className="flex-1 relative">
          <Input
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onPressEnter={handleSend}
            placeholder="Type a message"
            suffix={
              <Button
                type="text"
                icon={<SmileOutlined />}
                className="!text-gray-400 hover:!text-white !h-8 !w-8"
                onClick={handleEmojiClick}
              />
            }
            className="!bg-[#1A2942] !text-white !border-none !h-10 lg:!h-12 !rounded-lg !text-sm headerSearch"
            style={{ backgroundColor: "#1A2942", color: "#ffffff" }}
          />
        </div>

        {/* Send button */}
        <Button
          type="primary"
          icon={<SendOutlined />}
          onClick={handleSend}
          className="!h-10 !w-10 lg:!h-12 lg:!w-12 !bg-[#6B7FFF] hover:!bg-[#5A6EEE] !border-none !rounded-full"
        />
      </div>
    </div>
  );
}
