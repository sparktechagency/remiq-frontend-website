"use client";
import React, { useState, useEffect } from "react";
import { Button, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface OTPVerificationProps {
  onVerify?: (otp: string) => void;
  onResend?: () => void;
  loading?: boolean;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({
  onVerify,
  onResend,
  loading = false,
}) => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [timer, setTimer] = useState<number>(42);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);

  // Timer countdown effect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  // Handle OTP input change
  const handleOTPChange = (value: string, index: number) => {
    // Only allow numeric values
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };



  // Handle key press for backspace navigation
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData("Text");
    const newOtp = pastedData
      .split("")
      .filter((char) => /^\d$/.test(char))
      .slice(0, 4);
    setOtp(newOtp);
  }

  const router = useRouter();
  // Handle verify button click
  const handleVerify = () => {
    const otpString = otp.join("");

    router.push("/reset-password");
  };

  // Handle resend
  const handleResend = () => {
    setTimer(42);
    setIsResendDisabled(true);
    setOtp(["", "", "", ""]);

    if (onResend) {
      onResend();
    } else {
      message.info("Verification code resent to your email");
    }
  };

  // Format timer display
  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const isVerifyDisabled = otp.some((digit) => !digit) || loading;

  return (
    <div  className="min-h-screen bg-primary flex items-center justify-center p-5">
      <div className=" backdrop-blur-sm rounded-xl p-10 w-full max-w-md text-center">
        {/* Logo/Title */}
        <div className="w-full justify-center flex">
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={200}
            className=""
          />
        </div>

        {/* Description */}
      

        {/* OTP Input Fields */}
        <div  className="flex justify-center gap-3 !mb-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleOTPChange(e.target.value.slice(-1), index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              maxLength={1}
              autoComplete="off"
              className="w-24 h-24 text-center text-2xl font-bold bg-slate-800/60 border-2 border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200 hover:border-blue-500/60"
            />
          ))}
        </div>
          <p className="text-gray-400 !py-3 text-sm">
          A code has been sent to your email
        </p>

        {/* Timer */}
        <div className="text-gray-500 text-sm mb-6">{formatTimer(timer)}</div>

        {/* Verify Button */}
       <button
            type="submit"
            disabled={loading}
            onClick={handleVerify}
            className="w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white !py-3 !my-2 rounded-md font-medium transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        {/* Resend Button */}
        <button
          onClick={handleResend}
          disabled={isResendDisabled}
          className={`text-sm transition-colors duration-200 ${
            isResendDisabled
              ? "text-gray-500 cursor-not-allowed"
              : "text-gray-400 hover:text-blue-400"
          }`}
        >
          Resend
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
