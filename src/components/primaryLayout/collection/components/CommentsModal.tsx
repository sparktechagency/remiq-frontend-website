"use client";

import { Modal, Button, Input, ConfigProvider } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Comment } from "@/constants/global";
import { UserItem } from "../shared/UserItem";

interface CommentsModalProps {
  open: boolean;
  onClose: () => void;
  comments: Comment[];
  onAddComment?: (text: string) => void;
}

export function CommentsModal({
  open,
  onClose,
  comments,
  onAddComment,
}: CommentsModalProps) {
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    if (commentText.trim()) {
      onAddComment?.(commentText);
      setCommentText("");
    }
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "rgb(7,18,26)",
            headerBg: "rgb(7,18,26)",
          },
        },
      }}
    >
      <Modal
        title="Comments"
        open={open}
        onCancel={onClose}
        footer={null}
        width={600}
        bodyStyle={{ padding: 0 }}
        className="comments-modal"
      >
        <div className="flex flex-col h-96">
          {/* Comments List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {comments.length === 0 ? (
              <p className="text-slate-400 text-sm text-center py-8">
                No comments yet
              </p>
            ) : (
              comments?.map((comment) => (
                <div
                  key={comment.id}
                  className="pb-3 border-b border-slate-700 last:border-0"
                >
                  <UserItem
                    name={comment.author}
                    handle={comment.author.toLowerCase()}
                    avatar={comment.avatar}
                    action={
                      <span className="text-xs text-slate-400">
                        {comment.timestamp}
                      </span>
                    }
                  />
                  <p className="text-sm text-slate-300 mt-2 ml-14">
                    {comment.text}
                  </p>
                  <button className="text-xs text-blue-400 mt-2 ml-14 hover:text-blue-300">
                    Reply
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Comment Input */}
          <div className="border-t border-slate-700 p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Add a comment..."
                value={commentText}
                
                onChange={(e) => setCommentText(e.target.value)}
                onPressEnter={handleAddComment}
                className="!bg-[#1A2942] !text-white !border-none !rounded-lg !text-sm headerSearch"
                style={{ backgroundColor: "#1A2942", color: "#ffffff" }}
              />
              <Button
                type="primary"
                icon={<SendOutlined />}
                onClick={handleAddComment}
              />
            </div>
          </div>
        </div>
      </Modal>
    </ConfigProvider>
  );
}
