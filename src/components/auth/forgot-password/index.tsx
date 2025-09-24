"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/auth";
import { forgetPasswordSchema, loginSchema } from "@/schemas/userSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { SubmitHandler } from "react-hook-form";
import { MdOutlineEmail } from "react-icons/md";

interface FormValues {
  email: string;
  password: string;
}

const loginFields = [
  {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    className:
      "!bg-secondary !text-white !w-full !py-4 valid:bg-secondary placeholder:!text-gray-300 !border-none !mb-4  ",
    prefix: <MdOutlineEmail size={20} color="#6B7280" />,
  },
];

const ForgetPassword = () => {
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("data", data);
    
    router.push("/verify-otp");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary !px-4">
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
        <h2 className="text-center text-white text-2xl mb-6">
          Forgot Password
        </h2>

        <Form submitHandler={onSubmit} resolver={yupResolver(forgetPasswordSchema)}>
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
            {isLoading ? "Sending..." : "Sent OTP"}
          </button>
        </Form>

        <p className="text-center text-gray-400 !mt-10 text-xs md:text-sm ">
          Didn't get OTP?{" "}
          <Link
            href="/auth/forget-password"
            className="text-blue-400 underline font-medium"
          >
            Resend
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
