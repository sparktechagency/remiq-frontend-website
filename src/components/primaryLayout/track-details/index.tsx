"use client";

import { useState } from "react";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Collection } from "@/constants/global";
import { CollectionSidebar } from "../collection/shared/CollectionSidebar";
import { CommentsModal } from "../collection/components/CommentsModal";
import { LikesModal } from "../collection/components/LikesModal";
import { mockComments, mockLikes } from "@/constants/collection";

interface TrackDetailPageProps {
  collection: Collection;
}

export function TrackDetailPage({ collection }: TrackDetailPageProps) {
  const [commentsModalOpen, setCommentsModalOpen] = useState(false);
  const [likesModalOpen, setLikesModalOpen] = useState(false);

  return (
    <div className="px-4 md:px-5 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <CollectionSidebar
          collection={collection}
          onComment={() => setCommentsModalOpen(true)}
        />

        {/* Main Content */}
        <div className="flex-1">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">
              {collection.title}
            </h2>

            {/* Track Info */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-slate-700" />
              <div>
                <p className="text-sm font-medium text-slate-100">
                  {collection.artist}
                </p>
                <p className="text-xs text-slate-400">
                  @{collection.artist.toLowerCase()}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 mb-6">
              <h3 className="text-sm font-semibold text-slate-100 mb-2">
                Description
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {collection.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {collection.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                type="primary"
                size="large"
                className="flex-1"
                icon={<ShoppingCartOutlined />}
              >
                Add to Cart - ${collection.totalPrice}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CommentsModal
        open={commentsModalOpen}
        onClose={() => setCommentsModalOpen(false)}
        comments={mockComments}
      />
      <LikesModal
        open={likesModalOpen}
        onClose={() => setLikesModalOpen(false)}
        likes={mockLikes}
      />
    </div>
  );
}
