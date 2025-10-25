"use client";

import FileUploadArea from "@/components/Forms/FileUploadArea";
import FormSection from "@/components/Forms/FormSection";
import TagInput from "@/components/Forms/TagInput";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import { BPM_OPTIONS, CATEGORIES, KEYS } from "@/constants/upload";
import { Form, Input, Select, Switch } from "antd";
import { Music, ImageIcon } from "lucide-react";
import { useState } from "react";

export default function SoundKitPage() {
  const [form] = Form.useForm();
  const [tags, setTags] = useState<string[]>(["#Hashtag", "@Mention"]);

  const handleSubmit = (values: any) => {
    console.log("Sound Kit submitted:", { ...values, tags });
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto py-8 pb-10 px-4 lg:px-5 ">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Create Sound Kit
        </h1>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="space-y-6 custom-form"
      >
        {/* File Uploads */}
        <div className="grid grid-cols-2 gap-4">
          <FormSection>
            <FileUploadArea
              icon={<ImageIcon className="w-8 h-8" />}
              label="Upload Thumbnail"
              accept="image/*"
            />
          </FormSection>
          <FormSection>
            <FileUploadArea
              icon={<Music className="w-8 h-8" />}
              label="Upload mp3"
              accept="audio/mp3"
            />
          </FormSection>
        </div>

        {/* Title */}
        <FormSection title="Add Title">
          <Form.Item
            name="title"
            rules={[{ required: true, message: "Title is required" }]}
            className="mb-0"
          >
            <Input
              placeholder="Add Title"
              className="!text-white placeholder-white !h-10 bg-transparent"
            />
          </Form.Item>
        </FormSection>

        {/* Description */}
        <FormSection title="Description">
          <Form.Item
            name="description"
            rules={[{ required: true, message: "Description is required" }]}
            className="mb-0"
          >
            <Input.TextArea
              placeholder="Description"
              rows={4}
              className="bg-gray-900 dark:bg-gray-800 border-gray-700 text-white placeholder-gray-500"
            />
          </Form.Item>
        </FormSection>

        {/* Category, Key, BPM */}
        <div className="grid grid-cols-3 gap-4">
          <FormSection title="Select Categories">
            <Form.Item
              name="category"
              rules={[{ required: true, message: "Category is required" }]}
              className="mb-0"
            >
              <Select placeholder="Select category" options={CATEGORIES} />
            </Form.Item>
          </FormSection>

          <FormSection title="Key">
            <Form.Item
              name="key"
              rules={[{ required: true, message: "Key is required" }]}
              className="mb-0"
            >
              <Select
                placeholder="Select key"
                options={KEYS.map((k) => ({ label: k, value: k }))}
              />
            </Form.Item>
          </FormSection>

          <FormSection title="BPM">
            <Form.Item
              name="bpm"
              rules={[{ required: true, message: "BPM is required" }]}
              className="mb-0"
            >
              <Select placeholder="Select BPM" options={BPM_OPTIONS} />
            </Form.Item>
          </FormSection>
        </div>

        {/* Allow Download */}
        <FormSection title="Allow Download">
          <Form.Item
            name="allowDownload"
            valuePropName="checked"
            className="mb-0 flex items-center"
          >
            <Switch
              className="bg-gray-700/50 rounded-full"
              checkedChildren="✔"
              //   unCheckedChildren="✖"
              style={{
                backgroundColor: "#374151",
              }}
            />
          </Form.Item>
        </FormSection>

        {/* Tags */}
        <FormSection title="Add Tags">
          <TagInput tags={tags} onTagsChange={setTags} />
        </FormSection>

        {/* Submit Button */}
        <PrimaryButton
          htmlType="submit"
          text="Create Sound Kit"
          size="large"
          className="w-full !h-12 !text-base"
          onClick={() => form.submit()}
        />
      </Form>
    </div>
  );
}
