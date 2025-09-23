"use client"

import { useEffect, useRef, useState } from "react"
import VideoPost from "./VideoPost"
import { VideoFeedProps } from "@/types/post"

export function VideoFeed({ posts }: VideoFeedProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollTop = container.scrollTop
      const itemHeight = container.clientHeight
      const newIndex = Math.round(scrollTop / itemHeight)
      setCurrentIndex(newIndex)
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="h-[calc(100vh-65px)] overflow-auto snap-y snap-mandatory scrollbar-hide"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {posts.map((post, index) => (
        <div key={post.id} className="h-screen snap-start flex items-center justify-center">
          <VideoPost {...post} isActive={index === currentIndex} />
        </div>
      ))}
    </div>
  )
}
