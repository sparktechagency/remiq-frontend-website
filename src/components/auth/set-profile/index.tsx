"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GoPlus } from "react-icons/go";
import { ChangeEvent, useState } from "react";

const ForgetPassword = () => {
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
            // disabled={isLoading}
            onClick={onSubmit}
            className="w-full bg-blue-500  hover:bg-blue-600 cursor-pointer text-white !py-3 !my-2 rounded-md font-medium transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
          Next
          </button>
          <button
            type="submit"
            onClick={onSubmit}
            // disabled={isLoading}
            className="w-full border border-blue-500 hover:bg-blue-600 cursor-pointer text-white !py-3 !my-2 rounded-md font-medium transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
           Skip
          </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
