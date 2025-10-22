"use client";
import { useState } from "react";
import { Form, Input, Select, Checkbox, Button } from "antd";
import { Music, Folder } from "lucide-react";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import BeatsModal from "../modals/BeatsModal";
import TagInput from "@/components/Forms/TagInput";
import CollectionsModal from "../modals/CollectionsModal";

export default function CreatePostPage() {
  const [form] = Form.useForm();
  const [selectedBeat, setSelectedBeat] = useState<any>(null);
  const [selectedCollection, setSelectedCollection] = useState<any>(null);
  const [beatsModalOpen, setBeatsModalOpen] = useState(false);
  const [collectionsModalOpen, setCollectionsModalOpen] = useState(false);
  const [tags, setTags] = useState<string[]>(["#Hashtag", "@Mention"]);

  const handleSubmit = (values: any) => {
    console.log("Form submitted:", {
      ...values,
      tags,
      selectedBeat,
      selectedCollection,
    });
  };

  const beatTypeOptions = [
    { label: "Trap", value: "trap" },
    { label: "Hip-Hop", value: "hip-hop" },
    { label: "RnB", value: "rnb" },
    { label: "Pop", value: "pop" },
  ];

  return (
    <div className="space-y-6 max-w-3xl mx-auto py-8 px-4 lg:px-5">
      <div>
        <h1 className="text-3xl font-bold text-gray-100">Create Post</h1>
      </div>

      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        className="space-y-6 custom-form"
      >
        {/* Upload Beats Section */}
        <div
          onClick={() => setBeatsModalOpen(true)}
          className="flex flex-col gap-2 items-center justify-center text-white/60 border border-[#FFFFFF1A] py-8 rounded-lg cursor-pointer "
        >
          <div className=" flex items-center justify-center w-20 h-20 border-2 border-dashed border-gray-500 rounded-lg hover:border-blue-500 transition-colors">
            <Music className="w-8 h-8" />
          </div>
          <p>Upload Beats</p>
        </div>

        {/* Title */}
        <Form.Item
          label={<span className="text-white">Add Title</span>}
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

        {/* Beat Types */}
        <Form.Item label="Select Beats Types" name="beatTypes">
          <Select
            mode="multiple"
            placeholder="Select beat types"
            options={beatTypeOptions}
            className="!h-10 "
          />
        </Form.Item>

        {/* Collection Selection */}
        <Form.Item label="Select Your Collection" name="collection">
          <Button
            type="default"
            onClick={() => setCollectionsModalOpen(true)}
            className="w-full flex items-center gap-2"
            style={{
              height: "40px",
              backgroundColor: "transparent",
              border: "1px solid #FFFFFF1A",
              color: "white",
            }}
          >
            <Folder className="w-4 h-4" />
            {selectedCollection?.name || "Select Collection"}
          </Button>
        </Form.Item>

        {/* Toggles */}
        <div className="grid grid-cols-3 gap-4">
          <Form.Item name="allowDownload" valuePropName="checked">
            <Checkbox className="!text-white/80">Allow Download</Checkbox>
          </Form.Item>

          <Form.Item name="linkToBeat" valuePropName="checked">
            <Checkbox className="!text-white/80">Link to Beat</Checkbox>
          </Form.Item>

          <Form.Item name="addToStory" valuePropName="checked">
            <Checkbox className="!text-white/80">Add to Story</Checkbox>
          </Form.Item>
        </div>

        {/* Tags */}
        <Form.Item label="Add Tags" name="tags">
          <TagInput tags={tags} onTagsChange={setTags} />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <PrimaryButton
            text="Create Post"
            size="large"
            className="w-full !h-12 !text-base"
            htmlType="submit"
          />
        </Form.Item>
      </Form>

      {/* Modals */}
      <BeatsModal
        isOpen={beatsModalOpen}
        onClose={() => setBeatsModalOpen(false)}
        onSelect={setSelectedBeat}
      />
      <CollectionsModal
        isOpen={collectionsModalOpen}
        onClose={() => setCollectionsModalOpen(false)}
        onSelect={setSelectedCollection}
      />
    </div>
  );
}
