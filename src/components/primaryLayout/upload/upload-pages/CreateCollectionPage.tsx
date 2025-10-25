"use client";
import FileUploadArea from "@/components/Forms/FileUploadArea";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import { Form, Input, Checkbox } from "antd";
import { Folder } from "lucide-react";

export default function CreateCollectionPage() {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Collection submitted:", values);
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto py-8 pb-10 px-4 lg:px-5">
      <div>
        <h1 className="text-3xl font-bold text-gray-100">Create Collection</h1>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="space-y-6 custom-form"
      >
        {/* Upload Thumbnail */}
        <Form.Item>
          <FileUploadArea
            icon={<Folder className="w-8 h-8" />}
            label="Upload Thumbnail"
            accept="image/*"
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
            className="!text-white !placeholder-white !h-12 bg-transparent"
          />
        </Form.Item>

        {/* Allow Download */}
        <Form.Item name="allowDownload" valuePropName="checked">
          <Checkbox className="!text-white/80">Allow Download</Checkbox>
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
