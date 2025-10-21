import { Button } from "antd";
import React from "react";

export default function PrimaryButton({
  text,
  className,
  onClick,
  icon,
  size,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  size?: "large" | "middle" | "small";
}) {
  return (
    <Button
      icon={icon ? icon : null}
      size={size ? size : "middle"}
      className={`${className} !bg-gradient-to-r from-[#3D5AFE] to-[#7085FE] !border-0 !text-white`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
