"use client";
import React from "react";
import { Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import { sampleBeats } from "@/constants/explore";
import Link from "next/link";

export default function ExploreGrid() {
  return (
    <div className=" container mx-auto px-4 md:px-5 py-8 pb-16  2xl:py-12">
      <h2 className="text-white lg:mb-10 font-semibold lg:text-2xl mb-6">
        Free Beat Marketplace
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-full gap-4 lg:gap-6">
        {sampleBeats.map((beat) => (
          <Link href={`/`} key={beat.id}>
            <div className="relative !rounded-xl overflow-hidden !bg-[#111111] !h-[250px]">
              {/* Thumbnail */}
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
          </Link>
        ))}
      </div>
    </div>
  );
}
