"use client";

import { Modal, Button, Avatar } from "antd";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  confirmText: string;
  cancelText: string;
  userName?: string;
  userAvatar?: string;
}

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  confirmText,
  cancelText,
  userName,
  userAvatar,
}: ConfirmModalProps) {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      width={400}
      styles={{
        content: {
          backgroundColor: "#0D1B2E",
          border: "1px solid #1A2942",
          padding: "24px",
        },
      }}
    >
      {userName && userAvatar && (
        <div className="flex flex-col items-center mb-4">
          <Avatar
            src={userAvatar || "/placeholder.svg"}
            size={64}
            className="mb-3"
          />
          <p className="text-white text-sm font-medium">{userName}</p>
        </div>
      )}
      <p className="text-white text-center mb-6">{title}</p>
      <div className="flex gap-3">
        <Button
          onClick={onClose}
          className="flex-1 !h-12 !bg-[#1A2942] hover:!bg-[#243552] !text-white !border-none !rounded-lg !font-medium"
        >
          {cancelText}
        </Button>
        <Button
          type="primary"
          onClick={onConfirm}
          className="flex-1 !h-12 !bg-[#6B7FFF] hover:!bg-[#5A6EEE] !border-none !rounded-lg !font-medium"
        >
          {confirmText}
        </Button>
      </div>
    </Modal>
  );
}
