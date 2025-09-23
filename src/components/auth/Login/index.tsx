"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/auth";
import { loginSchema } from "@/schemas/userSchema";
import { storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox, Col, message, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
}

const loginFields = [
  {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email"
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password"
  },
];

const Login = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const [userLogin, { isLoading }] = useUserLoginMutation();
  const [rememberMe, setRememberMe] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // try {
    //   const res = await userLogin({
    //     loginData: data,
    //     callbackUrl: callbackUrl || undefined,
    //   }).unwrap();
    //   if (res?.accessToken) {
    //     storeUserInfo({ accessToken: res.accessToken });
    //     message.success("Login successful!");
    //   }
    // } catch (error) {
    //   message.error((error as any)?.data?.message || "Something went wrong");
    // }
    console.log({data})
  };

  return (
    <div>
      <div className="container mx-auto px-4">
        <Row
          justify="center"
          align="middle"
          style={{ gap: '3.5rem' }}
          className="flex flex-col md:flex-row !important"
        >
          <Col
            sm={12}
            md={16}
            lg={10}
            style={{ padding: '2rem' }}
            className="justify-center items-center hidden md:flex !important"
          >
            <Image
              src="/login-illustration.svg"
              alt="Login illustration"
              width={500}
              height={500}
              style={{ objectFit: 'contain', maxWidth: '100%' }}
              priority
            />
          </Col>

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
                  resolver={yupResolver(loginSchema)}
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
                    disabled={isLoading}
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
                    {isLoading ? "Logging in..." : "Log In"}
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
                Don't have an account?{" "}
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
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
