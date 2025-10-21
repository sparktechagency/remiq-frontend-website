"use client";

import { useState } from "react";

import { Collection, Track } from "@/constants/global";
import { CollectionSidebar } from "./shared/CollectionSidebar";
import { CollectionHeader } from "./components/CollectionHeader";
import { TrackList } from "./components/TrackList";
import { CommentsModal } from "./components/CommentsModal";
import { LikesModal } from "./components/LikesModal";
import { mockComments, mockLikes } from "@/constants/collection";
import { toast } from "sonner";

interface CollectionPageProps {
  collection: Collection;
}

export function CollectionPage({ collection }: CollectionPageProps) {
  const [commentsModalOpen, setCommentsModalOpen] = useState(false);
  const [likesModalOpen, setLikesModalOpen] = useState(false);

  const handleBuyTrack = (track: Track) => {
    // addItem(track);
    // Show toast notification
    console.log(track);
  };

  const handleBuyAll = () => {
    // collection.tracks.forEach((track) => addItem(track));
    // Show toast notification
  };

  const handleAddComment = (text: string) => {
    // Handle adding comment
    console.log("Comment added:", text);
  };

  return (
    <div className="px-4 md:px-5 pt-8 2xl:pt-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <CollectionSidebar
          collection={collection}
          onComment={() => setCommentsModalOpen(true)}
          onLike={() => toast.success("Liked!")}
        />

        {/* Main Content */}
        <div className="flex-1">
          <CollectionHeader collection={collection} onBuyAll={handleBuyAll} />
          {/* Track List */}
          <TrackList tracks={collection.tracks} onBuyTrack={handleBuyTrack} />
        </div>
      </div>

      <CommentsModal
        open={commentsModalOpen}
        onClose={() => setCommentsModalOpen(false)}
        comments={mockComments}
        onAddComment={handleAddComment}
      />
      <LikesModal
        open={likesModalOpen}
        onClose={() => setLikesModalOpen(false)}
        likes={mockLikes}
      />
    </div>
  );
}
