"use client";

import type React from "react";

import { Upload } from "lucide-react";
import { useState } from "react";

interface FileUploadAreaProps {
  icon?: React.ReactNode;
  label: string;
  accept?: string;
  onFileSelect?: (file: File) => void;
  fileName?: string;
}

export default function FileUploadArea({
  icon = <Upload className="w-8 h-8" />,
  label,
  accept,
  onFileSelect,
  fileName,
}: FileUploadAreaProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0 && onFileSelect) {
      onFileSelect(files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0 && onFileSelect) {
      onFileSelect(files[0]);
    }
  };

  return (
    <label
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`flex flex-col-reverse gap-2 items-center justify-center w-full p-8 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
        isDragging
          ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
          : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
      }`}
    >
      <input
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden text-white"
      />
      <div className="flex flex-col items-center gap-2">
        <div className="!text-blue-500">{icon}</div>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {fileName || label}
        </p>
      </div>
    </label>
  );
}
