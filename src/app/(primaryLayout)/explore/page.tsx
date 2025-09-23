"use client"
import React from "react";
import { Row, Col, Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";



 const sampleBeats = [
  {
    id: 1,
    thumb: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop",
  },
  {
    id: 2,
    thumb: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=500&fit=crop",
  },
  {
    id: 3,
    thumb: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&h=500&fit=crop",
  },
  {
    id: 4,
    thumb: "https://images.unsplash.com/photo-1571974599782-87624638275d?w=400&h=500&fit=crop",
  },
  {
    id: 5,
    thumb: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=500&fit=crop",
  },
  {
    id: 6,
    thumb: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=500&fit=crop",
  },
  {
    id: 7,
    thumb: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop",
  },
  {
    id: 8,
    thumb: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=500&fit=crop",
  },
  {
    id: 9,
    thumb: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=500&fit=crop",
  },
];

export default function ExploreGrid() {
  return (
    <div className="p-5  !min-h-screen">
      <h2 className="text-white mb-5 font-semibold">Free Beat Marketplace</h2>
      <Row gutter={[16, 16]}>
        {sampleBeats.map((beat) => (
          <Col key={beat.id} xs={24} sm={12} md={8}>
            <div className="relative !rounded-xl overflow-hidden !bg-[#111111] !h-[250px]">
              {/* Thumbnail */}
              <img
                src={beat.thumb}
                alt="beat thumbnail"
                className="!w-full !h-full !object-cover !block"
              />

              {/* Overlay */}
              <div className="absolute inset-0 !bg-black/40 flex justify-center items-center">
                <Button
                  type="text"
                  icon={
                    <PlayCircleOutlined className="!text-[40px] !text-white" />
                  }
                />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
