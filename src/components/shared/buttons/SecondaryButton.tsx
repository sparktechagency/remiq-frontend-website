import { Button } from "antd";
import React from "react";

export default function SecondaryButton({
  text,
  className,
  onClick,
  icon,
  size,
  mobileTextHidden,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  size?: "large" | "middle" | "small";
  mobileTextHidden?: boolean;
}) {
  return (
    <Button
      icon={icon ? icon : null}
      size={size ? size : "middle"}
      className={`${className} !bg-transparent  !border !border-[#7085FE] !text-white`}
      onClick={onClick}
    >
      <span className={mobileTextHidden ? "hidden sm:inline" : ""}>{text}</span>
    </Button>
  );
}
