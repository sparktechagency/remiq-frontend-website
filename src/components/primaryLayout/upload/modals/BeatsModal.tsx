"use client";

import { Modal, Input, Empty } from "antd";
import { Search } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { DEMO_BEATS } from "@/constants/upload";

interface BeatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (beat: any) => void;
}

export default function BeatsModal({
  isOpen,
  onClose,
  onSelect,
}: BeatsModalProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBeats = DEMO_BEATS.filter((beat) =>
    beat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Modal
      title={null}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={500}
      centered
      className="custom-black-modal"
    >
      <div className="space-y-4 pt-6">
        <div className="relative">
          <Input
            placeholder="Search beats..."
            value={searchTerm}
            prefix={<Search className="w-4 h-4 text-gray-400" />}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 headerSearch"
          />
        </div>

        <div className="max-h-96 overflow-y-auto space-y-2">
          {filteredBeats.length > 0 ? (
            filteredBeats?.map((beat: any) => (
              <div
                key={beat.id}
                onClick={() => {
                  onSelect(beat);
                  onClose();
                }}
                className="flex items-center gap-3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <Image
                  src={
                    "https://i.ibb.co.com/C5g2Z3K3/e8cde141e7f103c27e158862f2251ebad7fb35b3.jpg"
                  }
                  alt={beat.name}
                  className="w-12 h-12 rounded object-cover"
                  width={120}
                  height={120}
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {beat.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {beat.bpm} bpm • {beat.key}
                  </p>
                </div>
                <button className="w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center">
                  ♪
                </button>
              </div>
            ))
          ) : (
            <Empty description="No beats found" />
          )}
        </div>
      </div>
    </Modal>
  );
}
