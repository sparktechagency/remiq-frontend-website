"use client";

import { Avatar } from "antd";
import { HeartOutlined, MessageOutlined } from "@ant-design/icons";
import { Collection } from "@/constants/global";
import Image from "next/image";

interface CollectionSidebarProps {
  collection: Collection;
  onLike?: () => void;
  onComment?: () => void;
}

export function CollectionSidebar({
  collection,
  onLike,
  onComment,
}: CollectionSidebarProps) {
  return (
    <div className="w-full md:w-64 lg:w-72 2xl:w-80 flex flex-col gap-6 bg-[#122D42] py-6 px-4 rounded-lg">
      {/* Collection Image */}
      <div className="rounded-lg overflow-hidden bg-slate-800 aspect-square">
        <Image
          width={302}
          height={281}
          src={collection?.image || "/placeholder.svg"}
          alt={collection?.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Collection Info */}
      <div>
        <h1 className="text-xl 2xl:text-2xl font-bold text-slate-100 mb-2">
          {collection.title}
        </h1>
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2 ">
            <Avatar
              size={32}
              src={"https://i.ibb.co.com/v4MYNf8g/IMG-20251014-201029-2.jpg"}
            />
            <div>
              <p className="text-sm font-medium text-slate-100">
                {collection.artist}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              onClick={onLike}
              className="flex items-center gap-1 !text-slate-400 hover:!text-white cursor-pointer"
            >
              <HeartOutlined className="" />
              <span className="">{collection.likes}</span>
            </div>
            <div
              onClick={onComment}
              className="flex items-center gap-1 !text-slate-400 hover:!text-white cursor-pointer"
            >
              <MessageOutlined className="" />
              <span className="">{collection.comments}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}

      {/* Collection Details */}
      <div className="space-y-3 text-sm">
        <div>
          <p className="text-slate-400 mb-1">Categories</p>
          <p className="text-slate-100 font-medium">{collection.category}</p>
        </div>
        <div>
          <p className="text-slate-400 mb-1">Published</p>
          <p className="text-slate-100 font-medium">{collection.published}</p>
        </div>
      </div>

      {/* Tags */}
      <div>
        <p className="text-slate-400 text-sm mb-2">Tags</p>
        <div className="flex flex-wrap gap-2">
          {collection.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
