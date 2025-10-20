"use client";

import { Like } from "@/constants/global";
import { Modal, Button } from "antd";
import { UserItem } from "../shared/UserItem";
interface LikesModalProps {
  open: boolean;
  onClose: () => void;
  likes: Like[];
}

export function LikesModal({ open, onClose, likes }: LikesModalProps) {
  return (
    <Modal
      title="Liked"
      open={open}
      onCancel={onClose}
      footer={null}
      width={600}
      bodyStyle={{ padding: 0 }}
      className="likes-modal"
    >
      <div className="flex flex-col h-96">
        {/* Likes List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {likes.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-8">
              No likes yet
            </p>
          ) : (
            likes.map((like) => (
              <UserItem
                key={like.id}
                name={like.author}
                handle={like.handle}
                avatar={like.avatar}
                action={<Button size="small">Follow</Button>}
              />
            ))
          )}
        </div>
      </div>
    </Modal>
  );
}
