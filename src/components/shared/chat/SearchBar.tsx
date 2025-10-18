"use client";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchBar() {
  return (
    <Input
      placeholder="Search"
      prefix={<SearchOutlined className="text-gray-400" />}
      className="!bg-[#1A2942] !text-white !border-none !h-10 !rounded-lg headerSearch"
      style={{
        backgroundColor: "#1A2942",
        color: "#ffffff",
      }}
    />
  );
}
