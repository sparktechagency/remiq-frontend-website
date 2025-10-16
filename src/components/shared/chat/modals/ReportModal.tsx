"use client";

import { useState } from "react";
import { Modal, Radio, Button } from "antd";
import type { RadioChangeEvent } from "antd";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const reportReasons = [
  "Spam Or Irrelevant Content",
  "Harassment Or Bullying",
  "Offensive Or Inappropriate Content",
  "Impersonation Or Fake Account",
  "Other",
];

export default function ReportModal({
  isOpen,
  onClose,
  onSubmit,
}: ReportModalProps) {
  const [selectedReason, setSelectedReason] = useState(reportReasons[0]);

  const handleChange = (e: RadioChangeEvent) => {
    setSelectedReason(e.target.value);
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      width={440}
      className="report-modal"
      styles={{
        content: {
          backgroundColor: "#0D1B2E",
          border: "1px solid #1A2942",
          padding: "24px",
        },
      }}
    >
      <h2 className="text-white text-base mb-6">
        Please Select The Reason For Reporting This Conversation
      </h2>
      <Radio.Group
        onChange={handleChange}
        value={selectedReason}
        className="w-full space-y-3 mb-6"
      >
        {reportReasons.map((reason) => (
          <div
            key={reason}
            className="flex items-center p-3 bg-[#1A2942] rounded-lg hover:bg-[#243552] transition-colors"
          >
            <Radio value={reason} className="!text-white">
              <span className="text-white text-sm">{reason}</span>
            </Radio>
          </div>
        ))}
      </Radio.Group>
      <Button
        type="primary"
        onClick={onSubmit}
        block
        className="!h-12 !bg-[#6B7FFF] hover:!bg-[#5A6EEE] !border-none !rounded-lg !text-base !font-medium"
      >
        Submit Report
      </Button>
    </Modal>
  );
}
