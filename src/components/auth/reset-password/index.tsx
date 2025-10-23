"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { resetFields } from "@/constants/auth";
import Image from "next/image";
import { SubmitHandler } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
}

const ResetPassword = () => {
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("data", data);
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
        <h2 className="text-center text-white text-2xl mb-6">Reset Password</h2>

        <Form submitHandler={onSubmit} >
          {resetFields.map((field) => (
            <div key={field.name} className="mb-4">
              <FormInput {...field} />
            </div>
          ))}

          <button
            type="submit"
            // disabled={isLoading}
            className="w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white !py-3 !my-2 rounded-md font-medium transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Change Password
          </button>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
