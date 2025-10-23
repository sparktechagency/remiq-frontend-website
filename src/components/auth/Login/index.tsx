"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { loginFields } from "@/constants/auth";
import { Checkbox, } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  // const [userLogin, { isLoading }] = useUserLoginMutation();
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("data", data);

    router.push("");
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

        <Form submitHandler={onSubmit}>
          {loginFields.map((field) => (
            <div key={field.name} className="mb-4">
              <FormInput {...field} />
            </div>
          ))}

          <div className="flex items-center justify-between  text-gray-400 text-sm">
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="!text-gray-400 !my-3.5"
            >
              Remember me
            </Checkbox>
            <Link href="/forgot-password" className="text-blue-400 underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white !py-3 !my-2 rounded-md font-medium transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {true ? "Logging in..." : "Log In"}
          </button>
        </Form>

        <p className="text-center text-gray-400 !mt-10 text-xs md:text-sm ">
          Don&apos;t have an account?{" "}
          <Link
            href={`/sign-up?callbackUrl=${callbackUrl}`}
            className="text-blue-400 underline font-medium"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
