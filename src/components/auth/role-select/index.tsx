"use client";
import Image from "next/image";
import { useState } from "react";
const RoleSelect = () => {
  const [role,setRole]=useState('')

  const onSubmit = async () => {
    console.log("role",role);  
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
        <h2 className="text-center text-white text-2xl mb-6">Tell Us Who You Are</h2>

        <div onClick={()=>setRole('producer')} className={` flex cursor-pointer items-center justify-center ${role === 'producer' ? 'outline': ''} !py-3 text-white mb-3 rounded-md hover:outline  bg-secondary `}>
            <h1>Producer</h1>
        </div>
        <div onClick={()=>setRole('artist')} className={` flex cursor-pointer items-center justify-center ${role === 'artist' ? 'outline': ''} !py-3 text-white mb-3 rounded-md hover:outline  bg-secondary `}>
            <h1>Artist</h1>
        </div>

          <button
            type="submit"
            onClick={onSubmit}
            // disabled={isLoading}
            className="w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white !py-3 !my-2 rounded-md font-medium transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
           Next
          </button>
      </div>
    </div>
  );
};

export default RoleSelect;
