
"use client";

import React, { useState } from "react";
import { Modal, Form, Input, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Image from "next/image"; 

type Props = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
};

const EditProfile: React.FC<Props> = ({ isOpen, setIsOpen }) => {
    const [form] = Form.useForm();
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

    const handleCancel = () => {
        setIsOpen(false);
    };

    const onFinish = (values: any) => {
        console.log("values", values);
        setIsOpen(false);
    };

    const uploadProps = {
        beforeUpload: (file: File) => {
            const reader = new FileReader();
            reader.onload = (e) => setAvatarPreview(String(e.target?.result));
            reader.readAsDataURL(file);
            return false;
        },
        showUploadList: false,
        accept: "image/*",
        maxCount: 1,
    };

    return (
        <>
            <Modal
                centered
                open={isOpen}
                onCancel={handleCancel}
                footer={null}
                width={820}
                className="custom-black-modal"

            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{
                        name: "Steave Ani",
                        bio: "Just a kid with big dreams and a laptop—producing music that speaks louder than words.",
                        email: "steaveani@gmail.com",
                        website: "https://www.steaveani.com",
                        social: {
                            youtube: "https://www.youtube.com/@channelName",
                            x: "https://x.com/@channelName",
                            mix: "",
                            tiktok: "",
                            instagram: "",
                        },
                    }}
                >
                    {/* Replace Row/Col with simple div layout */}
                    <div className="flex gap-6">
                        {/* Left column (avatar + upload) */}
                        <div className="w-1/4 flex-shrink-0">
                            <div className="mb-3">
                                {avatarPreview ? (
                                    <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-slate-700">
                                        <Image
                                            src={avatarPreview}
                                            alt="avatar"
                                            width={120}
                                            height={120}
                                            className="object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-[120px] h-[120px] overflow-hidden border-s rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-slate-400">
                                        A
                                    </div>
                                )}
                            </div>

                            <Upload {...uploadProps}>
                                <Button icon={<UploadOutlined />} size="small">
                                    Upload Avatar
                                </Button>
                            </Upload>
                        </div>

                        {/* Right column (form inputs) */}
                        <div className="w-3/4">
                            <Form.Item
                                label={<label className="block text-sm  text-[#9CA3AF]">Name</label>}
                                name="name"
                                rules={[{ required: true, message: "Please enter name" }]}
                            >
                                <Input placeholder="Name" style={{ height: 45 }} />
                            </Form.Item>

                            <Form.Item label={<label className="block text-sm  text-[#9CA3AF]">Social Media</label>} name="bio">
                                <Input.TextArea rows={4} placeholder="Short bio" />
                            </Form.Item>

                            <div className="flex gap-x-4">
                                <div className="flex-1">
                                    <Form.Item
                                        label={<label className="block text-sm  text-[#9CA3AF]">Email</label>}
                                        name="email"
                                        rules={[{ type: "email", message: "Enter a valid email" }]}
                                    >
                                        <Input placeholder="email@example.com" style={{ height: 45 }} />
                                    </Form.Item>
                                </div>
                                <div className="flex-1">
                                    <Form.Item
                                        label={<label className="block text-sm  text-[#9CA3AF]">Website URL</label>}
                                        name="website"
                                        rules={[{ type: "url", message: "Enter a valid url" }]}
                                    >
                                        <Input placeholder="https://example.com" style={{ height: 45 }} />
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social inputs */}
                    <div className="mt-4">
                        <label className="block text-sm mb-2 text-[#9CA3AF]">Social Media</label>

                        <Form.Item name={["social", "youtube"]}>
                            <Input placeholder="YouTube URL" prefix={<Image
                                src="/icon/youtube.png"
                                alt="Mix"
                                width={20}
                                height={20}
                                className="mr-2 rounded object-contain"
                            />} style={{ height: 45 }} />
                        </Form.Item>

                        <Form.Item name={["social", "x"]}>
                            <Input placeholder="X / Twitter URL"
                                prefix={<Image
                                    src="/icon/twitter.png"
                                    alt="Mix"
                                    width={20}
                                    height={20}
                                    className="mr-2 rounded object-contain"
                                />}
                                style={{ height: 45 }} />
                        </Form.Item>

                        <Form.Item name={["social", "mix"]}>
                            <Input placeholder="Mix / Other"
                                prefix={<Image
                                    src="/icon/muso.png"
                                    alt="Mix"
                                    width={24}
                                    height={24}
                                    className="mr-2 rounded object-contain"
                                />}
                                style={{ height: 45 }} />
                        </Form.Item>

                        <Form.Item name={["social", "tiktok"]}>
                            <Input placeholder="TikTok URL"
                                prefix={<Image
                                    src="/icon/tiktok.png"
                                    alt="Mix"
                                    width={20}
                                    height={20}
                                    className="mr-2 rounded object-contain"
                                />}
                                style={{ height: 45 }} />
                        </Form.Item>

                        <Form.Item name={["social", "instagram"]}>
                            <Input
                                placeholder="Instagram URL"
                                prefix={<Image
                                    src="/icon/insta.png"
                                    alt="Mix"
                                    width={20}
                                    height={20}
                                    className="mr-2 rounded object-contain"
                                />} style={{ height: 45 }}
                            />
                        </Form.Item>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <button type="submit" className=" bg-gradient-to-r from-[#3D5AFE] to-[#7085FE] h-[45px]  px-8 rounded-md text-white">
                            Save Changes
                        </button>
                    </div>
                </Form>
            </Modal>
        </>
    );
};

export default EditProfile;
