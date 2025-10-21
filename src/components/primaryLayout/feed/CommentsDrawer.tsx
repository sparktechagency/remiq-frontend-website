import { useState } from "react";
import { Avatar, Button, Drawer, List, Space, message } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import { IoIosSend } from "react-icons/io";

const { Text } = Typography;

interface Comment {
  id: string;
  user: {
    username: string;
    avatar: string;
  };
  text: string;
  likes: number;
  timestamp: string;
  isLiked: boolean;
}

interface CommentsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  postId: string;
  comments: Comment[];
}

export const CommentsDrawer = ({
  isOpen,
  onClose,
  comments,
}: CommentsDrawerProps) => {
  const [newComment, setNewComment] = useState("");
  const [commentsList, setCommentsList] = useState<Comment[]>(comments);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        user: {
          username: "currentuser",
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        },
        text: newComment,
        likes: 0,
        timestamp: "now",
        isLiked: false,
      };
      setCommentsList([comment, ...commentsList]);
      setNewComment("");
      message.success("Comment added!");
    }
  };

  const toggleCommentLike = (commentId: string) => {
    setCommentsList(
      commentsList.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              isLiked: !comment.isLiked,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            }
          : comment
      )
    );
  };

  return (
    <Drawer
      title="Comments"
      placement={typeof window !== "undefined" && window.innerWidth <= 768 ? "bottom" : "right"}
      onClose={onClose}
      open={isOpen}
      height="70vh"
      width={450}
      styles={{
        header: {
          background: "#07121A",
          color: "#ffffff",
        },
        body: {
          background: "#07121A",
        },
        wrapper: {
          background: "#000000",
        },
        mask: {
          color: "#ffffff",
        },
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ flex: 1, overflowY: "auto", marginBottom: 16 }}>
          <List
            itemLayout="horizontal"
            dataSource={commentsList}
            renderItem={(comment) => (
              <List.Item
                style={{
                  cursor: "pointer",
                  background: "#07121A",
                  color: "#ffff",
                }}
                key={comment.id}
                actions={[
                  <Button
                    key="like-button"
                    type="text"
                    icon={
                      comment.isLiked ? (
                        <HeartFilled style={{ color: "#ff4d4f" }} />
                      ) : (
                        <HeartOutlined style={{ color: "#ffffff" }} />
                      )
                    }
                    className="!text-white"
                    onClick={() => toggleCommentLike(comment.id)}
                  >
                    {comment.likes}
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={comment.user.avatar} />}
                  title={
                    <Space>
                      <Text strong style={{ color: "#ffffff" }}>
                        {comment.user.username}
                      </Text>
                      <Text type="secondary" style={{ color: "#ffffff" }}>
                        {comment.timestamp}
                      </Text>
                    </Space>
                  }
                  description={
                    <Text style={{ color: "#ffffff" }}>{comment.text}</Text>
                  }
                />
              </List.Item>
            )}
          />
        </div>

        <div className="flex items-center gap-4 p-2 border-t border-gray-700 bg-[#122D42] rounded-full">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
            <UserOutlined className="text-2xl text-gray-300" />
          </div>

          {/* Input */}
          <textarea
            placeholder="Add comment..."
            value={newComment}
            onChange={(e) => {
              setNewComment(e.target.value);
              // Auto adjust height
              e.target.style.height = 'auto';
              e.target.style.height = e.target.scrollHeight + 'px';
            }}
            rows={1}
            className="flex-1  text-white placeholder-gray-400 px-4 py-2 rounded-2xl resize-none   focus:outline-none min-h-[40px] max-h-[120px] overflow-y-hidden"
            onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleAddComment();
              }
            }}
          />

          {/* Send Button */}
          <button
            onClick={handleAddComment}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#7085FE] hover:bg-[#5a6fe4] transition-colors"
          >
            <IoIosSend  className="text-xl text-white" />
          </button>
        </div>
      </div>
    </Drawer>
  );
};
