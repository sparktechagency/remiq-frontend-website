"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
<<<<<<< HEAD
// import { useUserLoginMutation } from "@/redux/api/auth"; 
import { Checkbox, Col, Row } from "antd";
=======

import { loginSchema } from "@/schemas/userSchema";

import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox, Col, message, Row } from "antd";
>>>>>>> eb50882a8bd61561d45f98f2e9d29b07fc96ee5e
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import {MdLock, MdOutlineEmail} from "react-icons/md"
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
      "!bg-secondary !text-white !w-full !py-4 valid:bg-secondary outline-none placeholder:!text-gray-300 !border-none !mb-2  ",
    prefix:<MdOutlineEmail size={20} color="#6B7280"/>
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    className:
      "!bg-secondary !text-white !w-full !py-4 valid:bg-secondary placeholder:!text-gray-300 !border-none !mb-2  ",
    prefix:<MdLock size={20} color="#6B7280"/>
  },
];

const Login = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  // const [userLogin, { isLoading }] = useUserLoginMutation();
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("data", data);
    
    router.push("")
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

<<<<<<< HEAD
          <Col
            sm={12}
            md={8}
            lg={8}
            style={{ 
              backgroundColor: '#fff',
              width: '100%',
              padding: '2rem',
              borderRadius: '0.75rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
            className="!important"
          >
            <div style={{ maxWidth: '28rem', margin: '0 auto' }}>
              <h2 style={{ 
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#6B7280',
                textAlign: 'center',
                marginBottom: '0.5rem'
              }}>
                Welcome Back
              </h2>
              <p style={{
                color: '#9CA3AF',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                Please sign in to your account
              </p>

              <div style={{ padding: '1rem' }}>
                <Form
                  submitHandler={onSubmit}      
                >
                  {loginFields.map((field) => (
                    <div key={field.name} style={{ marginBottom: '1.5rem' }}>
                      <FormInput {...field} />
                    </div>
                  ))}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem'
                  }}>
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      style={{ fontSize: '0.875rem', color: '#9CA3AF' }}
                      className="hover:text-gray-600 !important"
                    >
                      Remember me
                    </Checkbox>
                    <Link
                      href="/forgot-password"
                      style={{
                        fontSize: '0.875rem',
                        color: '#60A5FA',
                        textDecoration: 'underline'
                      }}
                      className="hover:text-blue-600 !important"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    // disabled={isLoading} 
                    style={{
                      width: '100%',
                      backgroundColor: '#3B82F6',
                      color: 'white',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      fontWeight: '500',
                      transition: 'background-color 200ms'
                    }}
                    className="hover:bg-blue-600 disabled:opacity-70 disabled:cursor-not-allowed !important"
                  >
                    {/* {isLoading ? "Logging in..." : "Log In"}   */} 
                    Log In
                  </button>
                  <div style={{ position: 'relative', margin: '2rem 0' }}>
                    <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center' }}>
                      <div style={{ width: '100%', borderTop: '1px solid #E5E7EB' }}></div>
                    </div>
                    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', fontSize: '0.875rem' }}>
                      <span style={{ padding: '0 1rem', backgroundColor: 'white', color: '#9CA3AF' }}>
                        OR
                      </span>
                    </div>
                  </div>
                </Form>
              </div>

              <p style={{ textAlign: 'center', color: '#9CA3AF' }}>
                Don&apos;t have an account?{" "}
                <Link
                  href={`/register${callbackUrl ? `?callbackUrl=${callbackUrl}` : ""}`}
                  style={{
                    color: '#60A5FA',
                    textDecoration: 'underline',
                    fontWeight: '500'
                  }}
                  className="hover:text-blue-600 !important"
                >
                  Create Account
                </Link>
              </p>
=======
        <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
          {loginFields.map((field) => (
            <div key={field.name} className="mb-4">
              <FormInput {...field} />
>>>>>>> eb50882a8bd61561d45f98f2e9d29b07fc96ee5e
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
          Don't have an account?{" "}
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
