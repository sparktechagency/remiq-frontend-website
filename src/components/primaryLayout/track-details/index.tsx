"use client";

import { useState } from "react";
import { Collection } from "@/constants/global";
import { CollectionSidebar } from "../collection/shared/CollectionSidebar";
import { CommentsModal } from "../collection/components/CommentsModal";
import { LikesModal } from "../collection/components/LikesModal";
import { mockComments, mockLikes } from "@/constants/collection";
import SingleTrackPlayer from "./SingleTrackPlayer";
import { demoTrack } from "@/constants/track";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface TrackDetailPageProps {
  collection: Collection;
  isBeatsPage?: boolean;
}

export function TrackDetailPage({
  collection,
  isBeatsPage,
}: TrackDetailPageProps) {
  const [commentsModalOpen, setCommentsModalOpen] = useState(false);
  const [likesModalOpen, setLikesModalOpen] = useState(false);

  return (
    <div className="px-4 md:px-5 pt-8 2xl:pt-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <CollectionSidebar
          collection={collection}
          onComment={() => setCommentsModalOpen(true)}
        />

        {/* Main Content */}
        <div className="flex-1 lg:max-h-[calc(100vh-110px)] lg:overflow-auto">
          <div className="mb-8">
            {/* heading */}
            <div className="flex flex-col md:flex-row justify-between lg:items-center mb-4 gap-4">
              <h2 className="text-white/90 text-xl ">
                {isBeatsPage ? "Beat Details" : "Sound Kit Details"}
              </h2>
              <div className="flex items-center gap-4">
                {/* Price */}

                <SecondaryButton
                  onClick={() => toast.success("Added to cart!")}
                  icon={<ShoppingCart size={20} className="mt-0.5" />}
                  size="large"
                  className="!w-full lg:!h-[50px]"
                  text={`$${collection.totalPrice}`}
                  mobileTextHidden={true}
                />
                <PrimaryButton
                  size="large"
                  className="!w-[400px] lg:!h-[50px]"
                  text={`Buy Now`}
                />
              </div>
            </div>

            <SingleTrackPlayer track={demoTrack} />
            {/* Description */}
            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 my-6">
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
            {/* <div className="flex gap-3">
              <Button
                type="primary"
                size="large"
                className="flex-1"
                icon={<ShoppingCartOutlined />}
              >
                Add to Cart - ${collection.totalPrice}
              </Button>
            </div> */}
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
