"use client";

import { Modal, Input, Empty } from "antd";
import { Search } from "lucide-react";
import { useState } from "react";

import Image from "next/image";
import { DEMO_COLLECTIONS } from "@/constants/upload";

interface CollectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (collection: any) => void;
}

export default function CollectionsModal({
  isOpen,
  onClose,
  onSelect,
}: CollectionsModalProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCollections = DEMO_COLLECTIONS.filter((collection) =>
    collection.name.toLowerCase().includes(searchTerm.toLowerCase())
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
      <div className="space-y-4">
        <h3>Select Your Collection</h3>
        <div className="relative">
          <Input
            prefix={<Search className="w-4 h-4 text-gray-400" />}
            placeholder="Search collections..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 headerSearch"
          />
        </div>

        <div className="max-h-96 overflow-y-auto space-y-2">
          {filteredCollections.length > 0 ? (
            filteredCollections.map((collection) => (
              <div
                key={collection.id}
                onClick={() => {
                  onSelect(collection);
                  onClose();
                }}
                className="flex items-center gap-3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <Image
                  src={collection.thumbnail || "/placeholder.svg"}
                  alt={collection.name}
                  className="w-12 h-12 rounded object-cover"
                  width={48}
                  height={48}
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {collection.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {collection.beatCount} beats
                  </p>
                </div>
              </div>
            ))
          ) : (
            <Empty description="No collections found" />
          )}
        </div>
      </div>
    </Modal>
  );
}
