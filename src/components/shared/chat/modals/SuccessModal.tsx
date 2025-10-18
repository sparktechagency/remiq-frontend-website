"use client";

import { Modal, Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  message,
}: SuccessModalProps) {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      width={360}
      styles={{
        content: {
          backgroundColor: "#0D1B2E",
          border: "1px solid #1A2942",
          padding: "32px",
        },
      }}
    >
      <div className="text-center">
        <div className="w-12 h-12 bg-[#1A2942] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircleOutlined className="text-2xl text-[#6B7FFF]" />
        </div>
        <p className="text-white text-sm mb-6">{message}</p>
        <Button
          type="primary"
          onClick={onClose}
          className="!h-10 !px-8 !bg-[#6B7FFF] hover:!bg-[#5A6EEE] !border-none !rounded-lg !font-medium"
        >
          Ok
        </Button>
      </div>
    </Modal>
  );
}
