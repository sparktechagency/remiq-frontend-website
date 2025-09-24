"use client";

import { getErrorMessageBuPropertyName } from "@/utils/schema-validator";
import { Input } from "antd";
import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";
import FieldRequireLabel from "../UI/FieldRequireLabel";

interface IInput {
  name: string;
  label?: string;
  size?: "large" | "small" | "middle";
  type?: string;
  value?: string | string[] | undefined;
  placeholder?: string;
  validation?: object;
  disabled?: boolean;
  prefixSelector?: ReactNode;
  className?: string;
  required?: boolean;
  suffix?: ReactNode;
  prefix?: ReactNode;
}
const FormInput = ({
  name,
  type,
  size = "large",
  value,
  placeholder,
  label,
  prefixSelector,
  disabled = false,
  required = false,
  className = "!py-2",
  suffix = null,
  prefix = null,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageBuPropertyName(errors, name);
  
  return (
    <>
      <FieldRequireLabel label={label} required={required} />

      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              {...field}
              type={type}
              size={size}
              placeholder={placeholder}
              value={value ? value : field.value}
              suffix={suffix ?? null}
              prefix={prefix ?? null}
              autoComplete='off'
              disabled={disabled}
              className={className}
            />
          ) : (
            <Input
              {...field}
              type={type}
              size={size}
              placeholder={placeholder}
              addonBefore={prefixSelector ?? null}
              suffix={suffix ?? null}
              prefix={prefix ?? null}
              autoComplete='off'
              className={className}
              disabled={disabled}
            />
          )
        }
      />

      <small className='!text-red-500'>
        {typeof errorMessage === "string"
          ? errorMessage
          : typeof errors[name]?.message === "string"
            ? errors[name]?.message
            : ""}
      </small>
    </>
  );
};

export default FormInput;
