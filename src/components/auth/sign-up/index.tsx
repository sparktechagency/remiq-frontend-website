"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { singUpFields } from "@/constants/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
}

const SignUp = () => {
  const router = useRouter()

  const onSubmit: SubmitHandler<FormValues> = () => {
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

        <Form submitHandler={onSubmit} >
          {singUpFields.map((field) => (
            <div key={field.name} className="mb-4">
              <FormInput {...field} />
            </div>
          ))}
          <button
            type="submit"
            // disabled={isLoading}
            className="w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white !py-3 !my-2 rounded-md font-medium transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Sign Up
          </button>
        </Form>

        <p className="text-center text-gray-400 !mt-10 text-xs md:text-sm ">
          You already have an account?
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
