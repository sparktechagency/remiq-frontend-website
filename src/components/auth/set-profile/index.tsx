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
import { GoPlus } from "react-icons/go";
import { ChangeEvent, useState } from "react";
interface FormValues {
  email: string;
  password: string;
}



const ForgetPassword = () => {
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const [image, setImage] = useState('');
  const router = useRouter();

  const ChangeItem = async (e:ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];

    const url = URL.createObjectURL(file!);
    setImage(url);

    
  };

  function onSubmit() {
    router.push("/subscription");
  }

  



  return (
    <div className="flex items-center justify-center min-h-screen bg-primary !px-4">
      <div className="w-full mx-auto max-w-xl">
        
        <h2 className="text-center text-white text-2xl mb-6">
          Add Profile Picture
        </h2>
        <div className="w-full relative justify-center flex mb-5">
          <Image
            src={image||"/avater.png"}
            alt="logo"
            width={200}
            height={200}
            className=" w-[200px] h-[200px] rounded-full object-cover"
          />
          <input type="file" name="image" id="file" hidden onChange={ChangeItem} />
          <label htmlFor="file" className="cursor-pointer bottom-0 right-[38%] bg-blue-500 absolute block p-3 text-2xl !text-white rounded-full">
            <GoPlus />
          </label>
        </div>

          <button
            type="submit"
            disabled={isLoading}
            onClick={onSubmit}
            className="w-full bg-blue-500  hover:bg-blue-600 cursor-pointer text-white !py-3 !my-2 rounded-md font-medium transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Saving..." : "Next"}
          </button>
          <button
            type="submit"
            onClick={onSubmit}
            disabled={isLoading}
            className="w-full border border-blue-500 hover:bg-blue-600 cursor-pointer text-white !py-3 !my-2 rounded-md font-medium transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Saving..." : "Skip"}
          </button>

      </div>
    </div>
  );
};

export default ForgetPassword;
