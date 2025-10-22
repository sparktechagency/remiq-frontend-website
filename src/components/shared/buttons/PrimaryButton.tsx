import { Button } from "antd";
import React from "react";

export default function PrimaryButton({
  text,
  className,
  onClick,
  icon,
  size,
  htmlType = "button",
}: {
  text: string;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  size?: "large" | "middle" | "small";
  htmlType?: "button" | "submit" | "reset";
}) {
  return (
    <Button
      htmlType={htmlType}
      icon={icon ? icon : null}
      size={size ? size : "middle"}
      className={`${className} !bg-gradient-to-r from-[#3D5AFE] to-[#7085FE] !border-0 !text-white`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
