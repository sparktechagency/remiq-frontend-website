"use client";

import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import { Form, Input } from "antd";
import { toast } from "sonner";

export default function ContactForm() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    toast.success("Form submitted successfully!");
  };

  return (
    <div className=" flex items-center justify-center p-6 py-12">
      <div className="w-full max-w-7xl">
        <h1 className="text-2xl md:text-[40px] font-semibold text-white mb-6">
          Contact Us
        </h1>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="text-white custom-form"
        >
          {/* Name */}
          <Form.Item
            label={<span className="text-gray-300">Name</span>}
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input
              placeholder="Steave Ani"
              className="bg-[#12212F] border-none !text-white h-10 rounded-md !placeholder-gray-400 focus:bg-[#1A2C3C]"
            />
          </Form.Item>

          {/* Email */}
          <Form.Item
            label={<span className="text-gray-300">Email</span>}
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input
              placeholder="steaveani@gmail.com"
              className="bg-[#12212F] border-none text-white h-10 rounded-md !placeholder-gray-400 focus:bg-[#1A2C3C]"
            />
          </Form.Item>

          {/* Subject */}
          <Form.Item
            label={<span className="text-gray-300">Subject</span>}
            name="subject"
            rules={[{ required: true, message: "Please enter a subject" }]}
          >
            <Input
              placeholder="Subject"
              className="bg-[#12212F] border-none text-white h-10 rounded-md !placeholder-gray-400 focus:bg-[#1A2C3C]"
            />
          </Form.Item>

          {/* Message */}
          <Form.Item
            label={<span className="text-gray-300">Message</span>}
            name="message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea
              rows={6}
              placeholder="Message"
              className="bg-[#12212F] border-none !text-white rounded-md !placeholder-gray-400 focus:bg-[#1A2C3C] resize-none"
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <PrimaryButton
              htmlType="submit"
              text="Send Message"
              className="!h-12 w-full max-w-lg mx-auto"
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
