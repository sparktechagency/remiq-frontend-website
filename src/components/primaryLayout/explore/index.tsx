"use client";
import React from "react";
import { Row, Col, Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import { sampleBeats } from "@/constants/explore";

export default function ExploreGrid() {
  return (
    <div className=" container mx-auto px-4 md:px-5 pt-8 2xl:py-12">
      <h2 className="text-white mb-5 font-semibold">Free Beat Marketplace</h2>
      <Row gutter={[16, 16]}>
        {sampleBeats.map((beat) => (
          <Col key={beat.id} xs={24} sm={12} md={8}>
            <div className="relative !rounded-xl overflow-hidden !bg-[#111111] !h-[250px]">
              {/* Thumbnail */}
              {/* @ts-ignore */}
              <Image
                src={beat.thumb}
                alt="beat thumbnail"
                className="!w-full !h-full !object-cover !block"
                width={400}
                height={500}
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
