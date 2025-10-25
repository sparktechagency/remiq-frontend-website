"use client";

import { useEffect, useRef, useState } from "react";
import VideoPost from "./VideoPost";
import { posts } from "@/constants/home";

export function VideoFeed() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(container.children);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = items.indexOf(entry.target);
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      {
        root: container,
        threshold: 0.6, // 60% of video visible → consider it active
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[calc(100vh-65px)] overflow-y-scroll snap-y snap-mandatory scrollbar-hide pb-10 lg:pb-0"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {posts?.map((post, index) => (
        <div
          key={post.id}
          className="h-[calc(100vh-65px)] snap-center flex items-center justify-center"
        >
          <VideoPost {...post} isActive={index === activeIndex} />
        </div>
      ))}
    </div>
  );
}
