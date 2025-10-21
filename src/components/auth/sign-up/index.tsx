"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/auth";
import { loginSchema, registerSchema } from "@/schemas/userSchema";
import { storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox, Col, message, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import {MdLock, MdOutlineEmail, MdPhone} from "react-icons/md"
import {CiUser} from "react-icons/ci"
import { register } from "module";
interface FormValues {
  email: string;
  password: string;
}

const loginFields = [
    {
    name: "username",
    type: "username",
    placeholder: "Enter your username",
    label: "Username",
    className:
      "!bg-secondary !text-white !w-full !py-4 valid:bg-secondary outline-none placeholder:!text-gray-300 !border-none   ",
    prefix:<CiUser size={20} color="#6B7280"/>
  },
  {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    className:
      "!bg-secondary !text-white !w-full !py-4 valid:bg-secondary outline-none placeholder:!text-gray-300 !border-none   ",
    prefix:<MdOutlineEmail size={20} color="#6B7280"/>
  },
    {
    name: "contact",
    type: "text",
    placeholder: "Enter your Phone Number",
    label: "Phone Number",
    className:
      "!bg-secondary !text-white !w-full !py-4 valid:bg-secondary outline-none placeholder:!text-gray-300 !border-none   ",
    prefix:<MdPhone size={20} color="#6B7280"/>
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    className:
      "!bg-secondary !text-white !w-full !py-4 valid:bg-secondary placeholder:!text-gray-300 !border-none  ",
    prefix:<MdLock size={20} color="#6B7280"/>
  },
];

const SignUp = () => {


  const [userLogin, { isLoading }] = useUserLoginMutation();
  const router = useRouter()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    router.push("/verify-otp");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary px-4">
      <div className="w-full mx-auto max-w-xl">
       <div className="w-full justify-center flex">
         <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          className=""
        />
       </div>
        <h2 className="text-center text-white text-2xl mb-6">Welcome Back!</h2>

        <Form submitHandler={onSubmit} resolver={yupResolver(registerSchema)}>
          {loginFields.map((field) => (
            <div key={field.name} className="mb-4">
              <FormInput {...field} />
            </div>
          ))}

        

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white !py-3 !my-2 rounded-md font-medium transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </Form>

        <p className="text-center text-gray-400 !mt-10 text-xs md:text-sm ">
          You already have an account?{" "}
          <Link
            href={`/login`}
            className="text-blue-400 underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
