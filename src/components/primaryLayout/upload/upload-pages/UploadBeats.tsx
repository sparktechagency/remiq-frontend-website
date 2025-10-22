"use client";

import { useState } from "react";
import { Form, Input, Select, Checkbox } from "antd";
import { Music } from "lucide-react";
import FileUploadArea from "@/components/Forms/FileUploadArea";
import { BPM_OPTIONS, CATEGORIES, KEYS } from "@/constants/upload";
import TagInput from "@/components/Forms/TagInput";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";

export default function UploadBeats() {
  const [form] = Form.useForm();
  const [tags, setTags] = useState<string[]>(["#Hashtag", "@Mention"]);

  const handleSubmit = (values: any) => {
    console.log("Beats submitted:", { ...values, tags });
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto py-8 px-4 lg:px-5">
      <div>
        <h1 className="text-3xl font-bold text-gray-100">Beats Upload</h1>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="space-y-6 custom-form"
      >
        {/* Upload Beats */}
        <Form.Item>
          <FileUploadArea
            icon={<Music className="w-8 h-8" />}
            label="Upload beats"
            accept="audio/*"
          />
        </Form.Item>

        {/* Title */}
        <Form.Item
          label="Add Title"
          name="title"
          rules={[{ required: true, message: "Please add a title" }]}
        >
          <Input
            placeholder="Add Title"
            className="!text-white !placeholder-white !h-10 bg-transparent"
          />
        </Form.Item>

        {/* Description */}
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please add a description" }]}
        >
          <Input.TextArea placeholder="Description" rows={4} />
        </Form.Item>

        {/* Categories and BPM in grid */}
        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="Select Categories"
            name="category"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select category" options={CATEGORIES} />
          </Form.Item>

          <Form.Item label="BPM" name="bpm" rules={[{ required: true }]}>
            <Select placeholder="Select BPM" options={BPM_OPTIONS} />
          </Form.Item>
        </div>

        {/* Key */}
        <Form.Item label="Key" name="key" rules={[{ required: true }]}>
          <Select
            placeholder="Select key"
            options={KEYS.map((k) => ({ label: k, value: k }))}
          />
        </Form.Item>

        {/* Allow Download */}
        <Form.Item name="allowDownload" valuePropName="checked">
          <Checkbox className="!text-white/80">Allow Download</Checkbox>
        </Form.Item>

        {/* Tags */}
        <Form.Item label="Add Tags" name="tags">
          <TagInput tags={tags} onTagsChange={setTags} />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <PrimaryButton
            htmlType="submit"
            text="Create Post"
            size="large"
            className="w-full !h-12 !text-base"
          />
        </Form.Item>
      </Form>
    </div>
  );
}
